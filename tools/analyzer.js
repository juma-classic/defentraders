const fs = require('fs');
const path = require('path');
const JSDeobfuscator = require('./deobfuscator');

class CodebaseAnalyzer {
    constructor() {
        this.deobfuscator = new JSDeobfuscator();
        this.results = {
            files: [],
            summary: {
                totalFiles: 0,
                totalSize: 0,
                uniqueComponents: new Set(),
                uniqueEndpoints: new Set(),
                uniqueFunctions: new Set()
            }
        };
    }

    // Analyze all JavaScript files in the codebase
    analyzeAll() {
        const jsFiles = this.findJSFiles('.');
        
        console.log(`Found ${jsFiles.length} JavaScript files to analyze...`);
        
        jsFiles.forEach(file => {
            try {
                console.log(`Analyzing: ${file}`);
                const analysis = this.deobfuscator.analyze(file);
                this.results.files.push(analysis);
                
                // Update summary
                this.results.summary.totalFiles++;
                this.results.summary.totalSize += analysis.size;
                
                analysis.reactComponents.forEach(comp => 
                    this.results.summary.uniqueComponents.add(comp)
                );
                analysis.apiEndpoints.forEach(endpoint => 
                    this.results.summary.uniqueEndpoints.add(endpoint)
                );
                analysis.functions.forEach(func => 
                    this.results.summary.uniqueFunctions.add(func.name)
                );
                
            } catch (error) {
                console.error(`Error analyzing ${file}:`, error.message);
            }
        });
        
        // Convert Sets to Arrays for JSON serialization
        this.results.summary.uniqueComponents = Array.from(this.results.summary.uniqueComponents);
        this.results.summary.uniqueEndpoints = Array.from(this.results.summary.uniqueEndpoints);
        this.results.summary.uniqueFunctions = Array.from(this.results.summary.uniqueFunctions);
        
        return this.results;
    }

    // Find all JavaScript files recursively
    findJSFiles(dir) {
        const jsFiles = [];
        
        const scanDir = (currentDir) => {
            const items = fs.readdirSync(currentDir);
            
            items.forEach(item => {
                const fullPath = path.join(currentDir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    // Skip node_modules and other irrelevant directories
                    if (!['node_modules', '.git', 'tools'].includes(item)) {
                        scanDir(fullPath);
                    }
                } else if (item.endsWith('.js') && !item.includes('node_modules')) {
                    jsFiles.push(fullPath);
                }
            });
        };
        
        scanDir(dir);
        return jsFiles;
    }

    // Generate a detailed report
    generateReport() {
        const results = this.analyzeAll();
        
        const report = {
            timestamp: new Date().toISOString(),
            summary: results.summary,
            topFiles: results.files
                .sort((a, b) => b.size - a.size)
                .slice(0, 10)
                .map(file => ({
                    file: file.file,
                    size: file.size,
                    componentCount: file.reactComponents.length,
                    endpointCount: file.apiEndpoints.length,
                    functionCount: file.functions.length
                })),
            allComponents: results.summary.uniqueComponents,
            allEndpoints: results.summary.uniqueEndpoints,
            keyFindings: this.extractKeyFindings(results)
        };
        
        // Save report
        fs.writeFileSync('analysis-report.json', JSON.stringify(report, null, 2));
        console.log('\nAnalysis complete! Report saved to analysis-report.json');
        
        return report;
    }

    // Extract key findings from the analysis
    extractKeyFindings(results) {
        const findings = [];
        
        // Find trading-related components
        const tradingComponents = results.summary.uniqueComponents.filter(comp =>
            comp.toLowerCase().includes('trade') ||
            comp.toLowerCase().includes('chart') ||
            comp.toLowerCase().includes('order') ||
            comp.toLowerCase().includes('position')
        );
        
        if (tradingComponents.length > 0) {
            findings.push({
                category: 'Trading Components',
                items: tradingComponents,
                description: 'React components related to trading functionality'
            });
        }
        
        // Find API endpoints
        const apiEndpoints = results.summary.uniqueEndpoints.filter(endpoint =>
            endpoint.includes('api') || endpoint.includes('deriv')
        );
        
        if (apiEndpoints.length > 0) {
            findings.push({
                category: 'API Endpoints',
                items: apiEndpoints,
                description: 'Discovered API endpoints and external services'
            });
        }
        
        // Find authentication-related functions
        const authFunctions = results.summary.uniqueFunctions.filter(func =>
            func.toLowerCase().includes('auth') ||
            func.toLowerCase().includes('login') ||
            func.toLowerCase().includes('token')
        );
        
        if (authFunctions.length > 0) {
            findings.push({
                category: 'Authentication Functions',
                items: authFunctions,
                description: 'Functions related to user authentication'
            });
        }
        
        return findings;
    }
}

// CLI usage
if (require.main === module) {
    const analyzer = new CodebaseAnalyzer();
    analyzer.generateReport();
}

module.exports = CodebaseAnalyzer;