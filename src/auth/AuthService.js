/**
 * Authentication Service
 * Handles OAuth 2.0 flow, token management, and session handling
 * Based on reverse-engineered Deriv authentication system
 */

class AuthService {
    constructor() {
        this.baseUrl = 'https://oauth.deriv.com';
        this.appId = '74892'; // Default app ID found in analysis
        this.tokenKey = 'authToken';
        this.activeLoginIdKey = 'active_loginid';
        this.clientAccountsKey = 'clientAccounts';
        this.configTokensKey = 'config.tokens';
        
        this.listeners = new Set();
        this.currentUser = null;
        this.tokens = this.loadTokensFromStorage();
        
        // Initialize authentication state
        this.init();
    }

    /**
     * Initialize authentication service
     */
    init() {
        // Check for existing authentication
        const authToken = this.getStoredToken();
        const activeLoginId = this.getActiveLoginId();
        
        if (authToken && activeLoginId) {
            this.currentUser = {
                token: authToken,
                loginId: activeLoginId,
                isAuthenticated: true
            };
            this.notifyListeners('authenticated', this.currentUser);
        }
        
        // Listen for storage changes (multi-tab support)
        window.addEventListener('storage', this.handleStorageChange.bind(this));
    }

    /**
     * Get OAuth authorization URL
     * @param {Object} options - OAuth options
     * @returns {string} Authorization URL
     */
    getOAuthUrl(options = {}) {
        const {
            language = 'en',
            brand = 'deriv',
            redirectUri = window.location.origin,
            state = this.generateState()
        } = options;

        const params = new URLSearchParams({
            app_id: this.appId,
            l: language,
            brand: brand.toLowerCase(),
            redirect_uri: redirectUri,
            response_type: 'code',
            state: state
        });

        return `${this.baseUrl}/oauth2/authorize?${params.toString()}`;
    }

    /**
     * Handle OAuth callback
     * @param {string} code - Authorization code
     * @param {string} state - State parameter
     * @returns {Promise<Object>} Authentication result
     */
    async handleOAuthCallback(code, state) {
        try {
            // Validate state parameter
            if (!this.validateState(state)) {
                throw new Error('Invalid state parameter');
            }

            // Exchange code for tokens
            const tokens = await this.exchangeCodeForTokens(code);
            
            // Store tokens
            this.storeTokens(tokens);
            
            // Set current user
            this.currentUser = {
                token: tokens.access_token,
                loginId: tokens.loginid,
                isAuthenticated: true,
                accounts: tokens.accounts || []
            };

            this.notifyListeners('authenticated', this.currentUser);
            
            return this.currentUser;
        } catch (error) {
            console.error('OAuth callback error:', error);
            this.notifyListeners('error', error);
            throw error;
        }
    }

    /**
     * Exchange authorization code for tokens
     * @param {string} code - Authorization code
     * @returns {Promise<Object>} Token response
     */
    async exchangeCodeForTokens(code) {
        // In a real implementation, this would make an API call
        // For now, we'll simulate the token exchange
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    access_token: `token_${Date.now()}`,
                    refresh_token: `refresh_${Date.now()}`,
                    loginid: `VRTC${Math.floor(Math.random() * 1000000)}`,
                    accounts: [
                        {
                            loginid: `VRTC${Math.floor(Math.random() * 1000000)}`,
                            currency: 'USD',
                            balance: 10000,
                            account_type: 'demo'
                        }
                    ],
                    expires_in: 3600
                });
            }, 1000);
        });
    }

    /**
     * Login with redirect to OAuth provider
     * @param {Object} options - Login options
     */
    login(options = {}) {
        const authUrl = this.getOAuthUrl(options);
        window.location.href = authUrl;
    }

    /**
     * Logout user
     * @returns {Promise<void>}
     */
    async logout() {
        try {
            // Clear stored tokens
            this.clearTokens();
            
            // Reset current user
            this.currentUser = null;
            
            // Notify listeners
            this.notifyListeners('logout');
            
            // Redirect to logout endpoint
            const logoutUrl = `${this.baseUrl}/oauth2/sessions/logout`;
            window.location.href = logoutUrl;
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }

    /**
     * Get current authentication status
     * @returns {Object} Authentication status
     */
    getAuthStatus() {
        return {
            isAuthenticated: !!this.currentUser,
            user: this.currentUser,
            token: this.getStoredToken(),
            loginId: this.getActiveLoginId()
        };
    }

    /**
     * Switch to different account
     * @param {string} loginId - Account login ID
     * @returns {Promise<Object>} Account info
     */
    async switchAccount(loginId) {
        try {
            const accounts = this.getStoredAccounts();
            const account = accounts.find(acc => acc.loginid === loginId);
            
            if (!account) {
                throw new Error('Account not found');
            }

            // Update active login ID
            this.setActiveLoginId(loginId);
            
            // Update current user
            this.currentUser = {
                ...this.currentUser,
                loginId: loginId,
                currentAccount: account
            };

            this.notifyListeners('accountSwitched', this.currentUser);
            
            return account;
        } catch (error) {
            console.error('Account switch error:', error);
            throw error;
        }
    }

    /**
     * Refresh authentication token
     * @returns {Promise<Object>} New token info
     */
    async refreshToken() {
        try {
            const refreshToken = this.getStoredRefreshToken();
            if (!refreshToken) {
                throw new Error('No refresh token available');
            }

            // In a real implementation, this would call the refresh endpoint
            const newTokens = await this.callRefreshEndpoint(refreshToken);
            
            this.storeTokens(newTokens);
            
            return newTokens;
        } catch (error) {
            console.error('Token refresh error:', error);
            // If refresh fails, redirect to login
            this.login();
            throw error;
        }
    }

    /**
     * Add authentication event listener
     * @param {Function} listener - Event listener function
     */
    addListener(listener) {
        this.listeners.add(listener);
    }

    /**
     * Remove authentication event listener
     * @param {Function} listener - Event listener function
     */
    removeListener(listener) {
        this.listeners.delete(listener);
    }

    // Private methods

    /**
     * Store tokens in localStorage
     * @param {Object} tokens - Token object
     */
    storeTokens(tokens) {
        localStorage.setItem(this.tokenKey, tokens.access_token);
        localStorage.setItem(this.activeLoginIdKey, tokens.loginid);
        localStorage.setItem(this.configTokensKey, JSON.stringify(tokens));
        
        if (tokens.accounts) {
            localStorage.setItem(this.clientAccountsKey, JSON.stringify(tokens.accounts));
        }
    }

    /**
     * Load tokens from storage
     * @returns {Object} Stored tokens
     */
    loadTokensFromStorage() {
        try {
            const tokensStr = localStorage.getItem(this.configTokensKey);
            return tokensStr ? JSON.parse(tokensStr) : null;
        } catch (error) {
            console.error('Error loading tokens from storage:', error);
            return null;
        }
    }

    /**
     * Get stored authentication token
     * @returns {string|null} Auth token
     */
    getStoredToken() {
        return localStorage.getItem(this.tokenKey);
    }

    /**
     * Get stored refresh token
     * @returns {string|null} Refresh token
     */
    getStoredRefreshToken() {
        const tokens = this.loadTokensFromStorage();
        return tokens?.refresh_token || null;
    }

    /**
     * Get active login ID
     * @returns {string|null} Active login ID
     */
    getActiveLoginId() {
        return localStorage.getItem(this.activeLoginIdKey) || 
               sessionStorage.getItem(this.activeLoginIdKey);
    }

    /**
     * Set active login ID
     * @param {string} loginId - Login ID to set as active
     */
    setActiveLoginId(loginId) {
        localStorage.setItem(this.activeLoginIdKey, loginId);
        sessionStorage.setItem(this.activeLoginIdKey, loginId);
    }

    /**
     * Get stored accounts
     * @returns {Array} Array of account objects
     */
    getStoredAccounts() {
        try {
            const accountsStr = localStorage.getItem(this.clientAccountsKey);
            return accountsStr ? JSON.parse(accountsStr) : [];
        } catch (error) {
            console.error('Error loading accounts from storage:', error);
            return [];
        }
    }

    /**
     * Clear all stored tokens
     */
    clearTokens() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.activeLoginIdKey);
        localStorage.removeItem(this.configTokensKey);
        localStorage.removeItem(this.clientAccountsKey);
        sessionStorage.removeItem(this.activeLoginIdKey);
    }

    /**
     * Generate state parameter for OAuth
     * @returns {string} Random state string
     */
    generateState() {
        return Math.random().toString(36).substring(2, 15) + 
               Math.random().toString(36).substring(2, 15);
    }

    /**
     * Validate state parameter
     * @param {string} state - State to validate
     * @returns {boolean} Is valid
     */
    validateState(state) {
        // In a real implementation, you'd store and validate the state
        return state && state.length > 10;
    }

    /**
     * Handle storage changes (for multi-tab support)
     * @param {StorageEvent} event - Storage event
     */
    handleStorageChange(event) {
        if (event.key === this.tokenKey) {
            if (event.newValue) {
                // Token was set in another tab
                this.init();
            } else {
                // Token was removed in another tab
                this.currentUser = null;
                this.notifyListeners('logout');
            }
        }
    }

    /**
     * Notify all listeners of authentication events
     * @param {string} event - Event type
     * @param {*} data - Event data
     */
    notifyListeners(event, data) {
        this.listeners.forEach(listener => {
            try {
                listener(event, data);
            } catch (error) {
                console.error('Error in auth listener:', error);
            }
        });
    }

    /**
     * Call refresh token endpoint
     * @param {string} refreshToken - Refresh token
     * @returns {Promise<Object>} New tokens
     */
    async callRefreshEndpoint(refreshToken) {
        // Simulate refresh token call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    access_token: `token_${Date.now()}`,
                    refresh_token: refreshToken,
                    expires_in: 3600
                });
            }, 500);
        });
    }
}

export default AuthService;