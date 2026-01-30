const fs = require('fs');
const path = require('path');

class JSDeobfuscator {
    constructor() {
        this.variableMap = new Map();
        this.functionMap = new Map();
        this.stringLiterals = new Map();
    }

    // Extract string literals from minified code
    extractStringLiterals(code) {
        const strings = [];
        const stringRegex = /["'`]((?:\\.|[^"'`\\])*?)["'`]/g;
        let match;
        
        while ((match = stringRegex.exec(code)) !== null) {
            strings.push(match[1]);
        }
        
        return strings;
    }

    // Find React component patterns
    findReactComponents(code) {
        const components = [];
        
        // Look for React.createElement patterns
        const createElementRegex = /React\.createElement\s*\(\s*["']([^"']+)["']/g;
        let match;
        
        while ((match = createElementRegex.exec(code)) !== null) {
            components.push(match[1]);
        }
        
        // Look for JSX-like patterns in minified code
        const jsxRegex = /\w+\s*\(\s*\{\s*[^}]*type\s*:\s*["']([^"']+)["']/g;
        while ((match = jsxRegex.exec(code)) !== null) {
            components.push(match[1]);
        }
        
        return [...new Set(components)];
    }

    // Extract API endpoints and URLs
    extractAPIEndpoints(code) {
        const endpoints = [];
        const urlRegex = /(https?:\/\/[^\s"'`]+)/g;
        let match;
        
        while ((match = urlRegex.exec(code)) !== null) {
            endpoints.push(match[1]);
        }
        
        // Look for relative API paths
        const apiRegex = /["'`](\/(api|v\d+)\/[^"'`]+)["'`]/g;
        while ((match = apiRegex.exec(code)) !== null) {
            endpoints.push(match[1]);
        }
        
        return [...new Set(endpoints)];
    }

    // Find function definitions and their purposes
    analyzeFunctions(code) {
        const functions = [];
        
        // Look for function declarations
        const funcRegex = /function\s+(\w+)\s*\([^)]*\)\s*\{/g;
        let match;
        
        while ((match = funcRegex.exec(code)) !== null) {
            functions.push({
                name: match[1],
                type: 'declaration',
                position: match.index
            });
        }
        
        // Look for arrow functions assigned to variables
        const arrowFuncRegex = /(\w+)\s*=\s*\([^)]*\)\s*=>/g;
        while ((match = arrowFuncRegex.exec(code)) !== null) {
            functions.push({
                name: match[1],
                type: 'arrow',
                position: match.index
            });
        }
        
        return functions;
    }

    // Extract configuration objects
    findConfigObjects(code) {
        const configs = [];
        
        // Look for configuration-like objects
        const configRegex = /(\w+)\s*:\s*\{[^}]*(?:url|endpoint|api|config|settings)[^}]*\}/g;
        let match;
        
        while ((match = configRegex.exec(code)) !== null) {
            configs.push({
                name: match[1],
                position: match.index
            });
        }
        
        return configs;
    }

    // Main analysis function
    analyze(filePath) {
        const code = fs.readFileSync(filePath, 'utf8');
        
        return {
            file: filePath,
            size: code.length,
            stringLiterals: this.extractStringLiterals(code),
            reactComponents: this.findReactComponents(code),
            apiEndpoints: this.extractAPIEndpoints(code),
            functions: this.analyzeFunctions(code),
            configs: this.findConfigObjects(code)
        };
    }

    // Beautify minified code
    beautify(code) {
        // Basic beautification - add line breaks and indentation
        return code
            .replace(/;/g, ';\n')
            .replace(/\{/g, '{\n  ')
            .replace(/\}/g, '\n}')
            .replace(/,/g, ',\n  ')
            .replace(/\n\s*\n/g, '\n');
    }
}

module.exports = JSDeobfuscator;