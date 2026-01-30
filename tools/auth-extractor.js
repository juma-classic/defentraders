const fs = require('fs');
const path = require('path');

class AuthenticationExtractor {
    constructor() {
        this.authPatterns = {
            oauth: /oauth|OAuth|OAUTH/g,
            token: /token|Token|TOKEN|jwt|JWT/g,
            login: /login|Login|LOGIN|signin|signIn|auth|Auth/g,
            session: /session|Session|SESSION/g,
            cookie: /cookie|Cookie|COOKIE/g,
            storage: /localStorage|sessionStorage|storage/g
        };
        
        this.authEndpoints = [];
        this.authFunctions = [];
        this.authComponents = [];
        this.authConfig = {};
    }

    // Extract authentication-related code from a file
    extractFromFile(filePath) {
        const code = fs.readFileSync(filePath, 'utf8');
        const result = {
            file: filePath,
            endpoints: this.findAuthEndpoints(code),
            functions: this.findAuthFunctions(code),
            components: this.findAuthComponents(code),
            config: this.findAuthConfig(code),
            tokens: this.findTokenHandling(code),
            oauth: this.findOAuthFlow(code)
        };
        
        return result;
    }

    // Find authentication endpoints
    findAuthEndpoints(code) {
        const endpoints = [];
        const patterns = [
            /https?:\/\/[^"'\s]*oauth[^"'\s]*/gi,
            /https?:\/\/[^"'\s]*auth[^"'\s]*/gi,
            /https?:\/\/[^"'\s]*login[^"'\s]*/gi,
            /https?:\/\/[^"'\s]*token[^"'\s]*/gi,
            /["'`]\/api\/[^"'`]*auth[^"'`]*["'`]/gi,
            /["'`]\/api\/[^"'`]*login[^"'`]*["'`]/gi
        ];
        
        patterns.forEach(pattern => {
            const matches = code.match(pattern);
            if (matches) {
                endpoints.push(...matches.map(match => match.replace(/["'`]/g, '')));
            }
        });
        
        return [...new Set(endpoints)];
    }

    // Find authentication functions
    findAuthFunctions(code) {
        const functions = [];
        const patterns = [
            /function\s+(\w*[Aa]uth\w*)\s*\(/g,
            /function\s+(\w*[Ll]ogin\w*)\s*\(/g,
            /function\s+(\w*[Tt]oken\w*)\s*\(/g,
            /(\w*[Aa]uth\w*)\s*[:=]\s*function/g,
            /(\w*[Ll]ogin\w*)\s*[:=]\s*function/g,
            /(\w*[Tt]oken\w*)\s*[:=]\s*function/g,
            /(\w*[Aa]uth\w*)\s*[:=]\s*\(/g,
            /(\w*[Ll]ogin\w*)\s*[:=]\s*\(/g,
            /(\w*[Tt]oken\w*)\s*[:=]\s*\(/g
        ];
        
        patterns.forEach(pattern => {
            let match;
            while ((match = pattern.exec(code)) !== null) {
                functions.push(match[1]);
            }
        });
        
        return [...new Set(functions)];
    }

    // Find authentication components
    findAuthComponents(code) {
        const components = [];
        const patterns = [
            /React\.createElement\s*\(\s*["']([^"']*[Aa]uth[^"']*)["']/g,
            /React\.createElement\s*\(\s*["']([^"']*[Ll]ogin[^"']*)["']/g,
            /React\.createElement\s*\(\s*(\w*[Aa]uth\w*)/g,
            /React\.createElement\s*\(\s*(\w*[Ll]ogin\w*)/g
        ];
        
        patterns.forEach(pattern => {
            let match;
            while ((match = pattern.exec(code)) !== null) {
                components.push(match[1]);
            }
        });
        
        return [...new Set(components)];
    }

    // Find authentication configuration
    findAuthConfig(code) {
        const config = {};
        
        // Look for OAuth configuration
        const oauthMatches = code.match(/oauth[^}]*\{[^}]*\}/gi);
        if (oauthMatches) {
            config.oauth = oauthMatches;
        }
        
        // Look for API configuration
        const apiMatches = code.match(/api[^}]*\{[^}]*\}/gi);
        if (apiMatches) {
            config.api = apiMatches;
        }
        
        // Look for app IDs
        const appIdMatches = code.match(/app_id[^,}]*/gi);
        if (appIdMatches) {
            config.appIds = appIdMatches;
        }
        
        return config;
    }

    // Find token handling patterns
    findTokenHandling(code) {
        const tokens = {
            storage: [],
            validation: [],
            refresh: [],
            usage: []
        };
        
        // Token storage patterns
        const storagePatterns = [
            /localStorage\.setItem\([^)]*token[^)]*/gi,
            /sessionStorage\.setItem\([^)]*token[^)]*/gi,
            /localStorage\.getItem\([^)]*token[^)]*/gi,
            /sessionStorage\.getItem\([^)]*token[^)]*/gi
        ];
        
        storagePatterns.forEach(pattern => {
            const matches = code.match(pattern);
            if (matches) {
                tokens.storage.push(...matches);
            }
        });
        
        // Token validation patterns
        const validationPatterns = [
            /token[^}]*valid[^}]*/gi,
            /valid[^}]*token[^}]*/gi,
            /token[^}]*expir[^}]*/gi,
            /expir[^}]*token[^}]*/gi
        ];
        
        validationPatterns.forEach(pattern => {
            const matches = code.match(pattern);
            if (matches) {
                tokens.validation.push(...matches);
            }
        });
        
        return tokens;
    }

    // Find OAuth flow patterns
    findOAuthFlow(code) {
        const oauth = {
            authorize: [],
            callback: [],
            refresh: [],
            logout: []
        };
        
        // Authorization patterns
        const authPatterns = [
            /oauth2\/authorize[^"'\s]*/gi,
            /authorization[^}]*code[^}]*/gi
        ];
        
        authPatterns.forEach(pattern => {
            const matches = code.match(pattern);
            if (matches) {
                oauth.authorize.push(...matches);
            }
        });
        
        // Callback patterns
        const callbackPatterns = [
            /oauth[^}]*callback[^}]*/gi,
            /callback[^}]*oauth[^}]*/gi
        ];
        
        callbackPatterns.forEach(pattern => {
            const matches = code.match(pattern);
            if (matches) {
                oauth.callback.push(...matches);
            }
        });
        
        return oauth;
    }

    // Extract authentication from all relevant files
    extractAll() {
        const authFiles = [
            'dtrader.defentraders.site/js/core.mainA.0ec6c5c2fd4cbb83a1e2.js',
            'dtrader.defentraders.site/js/core.maini.0ec6c5c2fd4cbb83a1e2.js',
            'defentraders.site/static/js/index.a06adbc7.js',
            'static.deriv.com/scripts/cookie.js'
        ];
        
        const results = [];
        
        authFiles.forEach(file => {
            if (fs.existsSync(file)) {
                console.log(`Extracting auth from: ${file}`);
                try {
                    const result = this.extractFromFile(file);
                    results.push(result);
                } catch (error) {
                    console.error(`Error processing ${file}:`, error.message);
                }
            }
        });
        
        return results;
    }

    // Generate authentication documentation
    generateAuthDoc(results) {
        const doc = {
            timestamp: new Date().toISOString(),
            summary: {
                totalFiles: results.length,
                totalEndpoints: 0,
                totalFunctions: 0,
                totalComponents: 0
            },
            endpoints: [],
            functions: [],
            components: [],
            oauthFlow: [],
            tokenHandling: [],
            recommendations: []
        };
        
        results.forEach(result => {
            doc.summary.totalEndpoints += result.endpoints.length;
            doc.summary.totalFunctions += result.functions.length;
            doc.summary.totalComponents += result.components.length;
            
            doc.endpoints.push(...result.endpoints);
            doc.functions.push(...result.functions);
            doc.components.push(...result.components);
            doc.oauthFlow.push(...result.oauth.authorize);
            doc.tokenHandling.push(...result.tokens.storage);
        });
        
        // Remove duplicates
        doc.endpoints = [...new Set(doc.endpoints)];
        doc.functions = [...new Set(doc.functions)];
        doc.components = [...new Set(doc.components)];
        
        // Add recommendations
        doc.recommendations = [
            "Implement OAuth 2.0 flow with PKCE for security",
            "Use secure token storage (httpOnly cookies preferred)",
            "Implement token refresh mechanism",
            "Add proper error handling for auth failures",
            "Implement session timeout handling",
            "Add multi-account support",
            "Implement proper logout flow"
        ];
        
        return doc;
    }
}

// CLI usage
if (require.main === module) {
    const extractor = new AuthenticationExtractor();
    const results = extractor.extractAll();
    const doc = extractor.generateAuthDoc(results);
    
    fs.writeFileSync('auth-analysis.json', JSON.stringify(doc, null, 2));
    console.log('Authentication analysis complete! Results saved to auth-analysis.json');
}

module.exports = AuthenticationExtractor;