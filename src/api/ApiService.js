/**
 * API Service
 * Handles WebSocket connections and REST API calls
 * Based on reverse-engineered Deriv API patterns
 */

class ApiService {
    constructor(authService) {
        this.authService = authService;
        this.wsUrl = 'wss://ws.binaryws.com/websockets/v3';
        this.restUrl = 'https://api.deriv.com';
        
        this.ws = null;
        this.isConnected = false;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 1000;
        
        this.requestId = 1;
        this.pendingRequests = new Map();
        this.subscriptions = new Map();
        this.listeners = new Set();
        
        this.init();
    }

    /**
     * Initialize API service
     */
    init() {
        this.connect();
        
        // Listen for auth changes
        this.authService.addListener((event, data) => {
            if (event === 'authenticated') {
                this.authorize(data.token);
            } else if (event === 'logout') {
                this.disconnect();
            }
        });
    }

    /**
     * Connect to WebSocket
     */
    connect() {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            return;
        }

        try {
            this.ws = new WebSocket(this.wsUrl);
            
            this.ws.onopen = this.handleOpen.bind(this);
            this.ws.onmessage = this.handleMessage.bind(this);
            this.ws.onclose = this.handleClose.bind(this);
            this.ws.onerror = this.handleError.bind(this);
            
        } catch (error) {
            console.error('WebSocket connection error:', error);
            this.scheduleReconnect();
        }
    }

    /**
     * Disconnect from WebSocket
     */
    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        this.isConnected = false;
        this.pendingRequests.clear();
        this.subscriptions.clear();
    }

    /**
     * Handle WebSocket open event
     */
    handleOpen() {
        console.log('WebSocket connected');
        this.isConnected = true;
        this.reconnectAttempts = 0;
        
        // Authorize if we have a token
        const authStatus = this.authService.getAuthStatus();
        if (authStatus.isAuthenticated && authStatus.token) {
            this.authorize(authStatus.token);
        }
        
        this.notifyListeners('connected');
    }

    /**
     * Handle WebSocket message
     */
    handleMessage(event) {
        try {
            const data = JSON.parse(event.data);
            
            // Handle response to pending request
            if (data.req_id && this.pendingRequests.has(data.req_id)) {
                const { resolve, reject } = this.pendingRequests.get(data.req_id);
                this.pendingRequests.delete(data.req_id);
                
                if (data.error) {
                    reject(new Error(data.error.message || 'API Error'));
                } else {
                    resolve(data);
                }
                return;
            }
            
            // Handle subscription updates
            if (data.subscription) {
                const subscription = this.subscriptions.get(data.subscription.id);
                if (subscription && subscription.callback) {
                    subscription.callback(data);
                }
                return;
            }
            
            // Handle other messages
            this.notifyListeners('message', data);
            
        } catch (error) {
            console.error('Error parsing WebSocket message:', error);
        }
    }

    /**
     * Handle WebSocket close event
     */
    handleClose(event) {
        console.log('WebSocket disconnected:', event.code, event.reason);
        this.isConnected = false;
        
        // Reject all pending requests
        this.pendingRequests.forEach(({ reject }) => {
            reject(new Error('Connection closed'));
        });
        this.pendingRequests.clear();
        
        this.notifyListeners('disconnected');
        
        // Attempt to reconnect if not a clean close
        if (event.code !== 1000) {
            this.scheduleReconnect();
        }
    }

    /**
     * Handle WebSocket error event
     */
    handleError(error) {
        console.error('WebSocket error:', error);
        this.notifyListeners('error', error);
    }

    /**
     * Schedule reconnection attempt
     */
    scheduleReconnect() {
        if (this.reconnectAttempts >= this.maxReconnectAttempts) {
            console.error('Max reconnection attempts reached');
            return;
        }
        
        this.reconnectAttempts++;
        const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
        
        console.log(`Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts})`);
        
        setTimeout(() => {
            this.connect();
        }, delay);
    }

    /**
     * Send WebSocket request
     */
    async sendRequest(request) {
        return new Promise((resolve, reject) => {
            if (!this.isConnected) {
                reject(new Error('Not connected to WebSocket'));
                return;
            }
            
            const reqId = this.requestId++;
            const requestWithId = { ...request, req_id: reqId };
            
            this.pendingRequests.set(reqId, { resolve, reject });
            
            try {
                this.ws.send(JSON.stringify(requestWithId));
            } catch (error) {
                this.pendingRequests.delete(reqId);
                reject(error);
            }
            
            // Set timeout for request
            setTimeout(() => {
                if (this.pendingRequests.has(reqId)) {
                    this.pendingRequests.delete(reqId);
                    reject(new Error('Request timeout'));
                }
            }, 30000);
        });
    }

    /**
     * Authorize with token
     */
    async authorize(token) {
        try {
            const response = await this.sendRequest({
                authorize: token
            });
            
            console.log('Authorization successful:', response.authorize);
            this.notifyListeners('authorized', response.authorize);
            
            return response.authorize;
        } catch (error) {
            console.error('Authorization failed:', error);
            throw error;
        }
    }

    /**
     * Get account balance
     */
    async getBalance() {
        try {
            const response = await this.sendRequest({
                balance: 1
            });
            
            return response.balance;
        } catch (error) {
            console.error('Failed to get balance:', error);
            throw error;
        }
    }

    /**
     * Subscribe to balance updates
     */
    subscribeToBalance(callback) {
        return this.subscribe({
            balance: 1,
            subscribe: 1
        }, callback);
    }

    /**
     * Get trading times
     */
    async getTradingTimes(date = new Date().toISOString().split('T')[0]) {
        try {
            const response = await this.sendRequest({
                trading_times: date
            });
            
            return response.trading_times;
        } catch (error) {
            console.error('Failed to get trading times:', error);
            throw error;
        }
    }

    /**
     * Get active symbols
     */
    async getActiveSymbols(productType = 'basic') {
        try {
            const response = await this.sendRequest({
                active_symbols: productType
            });
            
            return response.active_symbols;
        } catch (error) {
            console.error('Failed to get active symbols:', error);
            throw error;
        }
    }

    /**
     * Subscribe to tick data
     */
    subscribeToTicks(symbol, callback) {
        return this.subscribe({
            ticks: symbol,
            subscribe: 1
        }, callback);
    }

    /**
     * Subscribe to candle data
     */
    subscribeToCandles(symbol, granularity = 60, callback) {
        return this.subscribe({
            ticks_history: symbol,
            adjust_start_time: 1,
            count: 1000,
            end: 'latest',
            granularity: granularity,
            style: 'candles',
            subscribe: 1
        }, callback);
    }

    /**
     * Buy contract
     */
    async buyContract(parameters) {
        try {
            const response = await this.sendRequest({
                buy: 1,
                parameters: parameters
            });
            
            return response.buy;
        } catch (error) {
            console.error('Failed to buy contract:', error);
            throw error;
        }
    }

    /**
     * Sell contract
     */
    async sellContract(contractId, price) {
        try {
            const response = await this.sendRequest({
                sell: contractId,
                price: price
            });
            
            return response.sell;
        } catch (error) {
            console.error('Failed to sell contract:', error);
            throw error;
        }
    }

    /**
     * Get contract proposal
     */
    async getProposal(proposal) {
        try {
            const response = await this.sendRequest({
                proposal: 1,
                ...proposal
            });
            
            return response.proposal;
        } catch (error) {
            console.error('Failed to get proposal:', error);
            throw error;
        }
    }

    /**
     * Subscribe to proposal updates
     */
    subscribeToProposal(proposal, callback) {
        return this.subscribe({
            proposal: 1,
            subscribe: 1,
            ...proposal
        }, callback);
    }

    /**
     * Get portfolio
     */
    async getPortfolio() {
        try {
            const response = await this.sendRequest({
                portfolio: 1
            });
            
            return response.portfolio;
        } catch (error) {
            console.error('Failed to get portfolio:', error);
            throw error;
        }
    }

    /**
     * Subscribe to portfolio updates
     */
    subscribeToPortfolio(callback) {
        return this.subscribe({
            portfolio: 1,
            subscribe: 1
        }, callback);
    }

    /**
     * Generic subscription method
     */
    subscribe(request, callback) {
        const subscriptionId = `sub_${Date.now()}_${Math.random()}`;
        
        this.subscriptions.set(subscriptionId, {
            request,
            callback,
            id: subscriptionId
        });
        
        this.sendRequest(request).then(response => {
            if (response.subscription) {
                // Update subscription with server-provided ID
                const subscription = this.subscriptions.get(subscriptionId);
                if (subscription) {
                    subscription.serverId = response.subscription.id;
                    this.subscriptions.set(response.subscription.id, subscription);
                }
            }
        }).catch(error => {
            console.error('Subscription failed:', error);
            this.subscriptions.delete(subscriptionId);
        });
        
        // Return unsubscribe function
        return () => {
            const subscription = this.subscriptions.get(subscriptionId);
            if (subscription && subscription.serverId) {
                this.sendRequest({
                    forget: subscription.serverId
                });
                this.subscriptions.delete(subscription.serverId);
            }
            this.subscriptions.delete(subscriptionId);
        };
    }

    /**
     * Add event listener
     */
    addListener(listener) {
        this.listeners.add(listener);
    }

    /**
     * Remove event listener
     */
    removeListener(listener) {
        this.listeners.delete(listener);
    }

    /**
     * Notify all listeners
     */
    notifyListeners(event, data) {
        this.listeners.forEach(listener => {
            try {
                listener(event, data);
            } catch (error) {
                console.error('Error in API listener:', error);
            }
        });
    }

    /**
     * Make REST API call
     */
    async restCall(endpoint, options = {}) {
        const url = `${this.restUrl}${endpoint}`;
        const authStatus = this.authService.getAuthStatus();
        
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };
        
        if (authStatus.isAuthenticated && authStatus.token) {
            config.headers.Authorization = `Bearer ${authStatus.token}`;
        }
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('REST API call failed:', error);
            throw error;
        }
    }
}

export default ApiService;