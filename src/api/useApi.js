/**
 * useApi Hook
 * React hook for API state management and WebSocket connections
 * Based on reverse-engineered patterns from the trading platform
 */

import { useState, useEffect, useContext, createContext } from 'react';
import ApiService from './ApiService';
import { useAuth } from '../auth/useAuth';

// Create API context
const ApiContext = createContext(null);

// API provider component
export const ApiProvider = ({ children }) => {
    const { authService } = useAuth();
    const [apiState, setApiState] = useState({
        isConnected: false,
        isAuthorized: false,
        connectionStatus: 'disconnected',
        error: null,
        balance: null,
        portfolio: null,
        activeSymbols: []
    });

    const [apiService] = useState(() => new ApiService(authService));

    useEffect(() => {
        // Set up API event listener
        const handleApiEvent = (event, data) => {
            switch (event) {
                case 'connected':
                    setApiState(prev => ({
                        ...prev,
                        isConnected: true,
                        connectionStatus: 'connected',
                        error: null
                    }));
                    break;

                case 'disconnected':
                    setApiState(prev => ({
                        ...prev,
                        isConnected: false,
                        isAuthorized: false,
                        connectionStatus: 'disconnected'
                    }));
                    break;

                case 'authorized':
                    setApiState(prev => ({
                        ...prev,
                        isAuthorized: true,
                        error: null
                    }));
                    break;

                case 'error':
                    setApiState(prev => ({
                        ...prev,
                        error: data,
                        connectionStatus: 'error'
                    }));
                    break;

                default:
                    break;
            }
        };

        apiService.addListener(handleApiEvent);

        // Cleanup
        return () => {
            apiService.removeListener(handleApiEvent);
        };
    }, [apiService]);

    const value = {
        ...apiState,
        apiService
    };

    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    );
};

// useApi hook
export const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
};

// Hook for balance data
export const useBalance = () => {
    const { apiService, isAuthorized } = useApi();
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isAuthorized) return;

        let unsubscribe;

        const fetchBalance = async () => {
            setLoading(true);
            setError(null);

            try {
                // Subscribe to balance updates
                unsubscribe = apiService.subscribeToBalance((data) => {
                    if (data.balance) {
                        setBalance(data.balance);
                    }
                });

                // Get initial balance
                const initialBalance = await apiService.getBalance();
                setBalance(initialBalance);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [apiService, isAuthorized]);

    return { balance, loading, error };
};

// Hook for portfolio data
export const usePortfolio = () => {
    const { apiService, isAuthorized } = useApi();
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isAuthorized) return;

        let unsubscribe;

        const fetchPortfolio = async () => {
            setLoading(true);
            setError(null);

            try {
                // Subscribe to portfolio updates
                unsubscribe = apiService.subscribeToPortfolio((data) => {
                    if (data.portfolio) {
                        setPortfolio(data.portfolio);
                    }
                });

                // Get initial portfolio
                const initialPortfolio = await apiService.getPortfolio();
                setPortfolio(initialPortfolio);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolio();

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [apiService, isAuthorized]);

    return { portfolio, loading, error };
};

// Hook for tick data
export const useTicks = (symbol) => {
    const { apiService, isConnected } = useApi();
    const [ticks, setTicks] = useState([]);
    const [currentTick, setCurrentTick] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isConnected || !symbol) return;

        let unsubscribe;

        const subscribeTicks = async () => {
            setLoading(true);
            setError(null);

            try {
                unsubscribe = apiService.subscribeToTicks(symbol, (data) => {
                    if (data.tick) {
                        const tick = {
                            epoch: data.tick.epoch,
                            quote: data.tick.quote,
                            symbol: data.tick.symbol
                        };
                        
                        setCurrentTick(tick);
                        setTicks(prev => [...prev.slice(-99), tick]); // Keep last 100 ticks
                    }
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        subscribeTicks();

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [apiService, isConnected, symbol]);

    return { ticks, currentTick, loading, error };
};

// Hook for candle data
export const useCandles = (symbol, granularity = 60) => {
    const { apiService, isConnected } = useApi();
    const [candles, setCandles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isConnected || !symbol) return;

        let unsubscribe;

        const subscribeCandles = async () => {
            setLoading(true);
            setError(null);

            try {
                unsubscribe = apiService.subscribeToCandles(symbol, granularity, (data) => {
                    if (data.candles) {
                        setCandles(data.candles);
                    } else if (data.ohlc) {
                        // Update with new candle
                        setCandles(prev => {
                            const newCandles = [...prev];
                            const lastIndex = newCandles.length - 1;
                            
                            if (lastIndex >= 0 && newCandles[lastIndex].epoch === data.ohlc.epoch) {
                                // Update existing candle
                                newCandles[lastIndex] = data.ohlc;
                            } else {
                                // Add new candle
                                newCandles.push(data.ohlc);
                            }
                            
                            return newCandles.slice(-1000); // Keep last 1000 candles
                        });
                    }
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        subscribeCandles();

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [apiService, isConnected, symbol, granularity]);

    return { candles, loading, error };
};

// Hook for active symbols
export const useActiveSymbols = (productType = 'basic') => {
    const { apiService, isConnected } = useApi();
    const [symbols, setSymbols] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isConnected) return;

        const fetchSymbols = async () => {
            setLoading(true);
            setError(null);

            try {
                const activeSymbols = await apiService.getActiveSymbols(productType);
                setSymbols(activeSymbols);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSymbols();
    }, [apiService, isConnected, productType]);

    return { symbols, loading, error };
};

// Hook for contract proposals
export const useProposal = (proposalParams) => {
    const { apiService, isAuthorized } = useApi();
    const [proposal, setProposal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isAuthorized || !proposalParams) return;

        let unsubscribe;

        const subscribeProposal = async () => {
            setLoading(true);
            setError(null);

            try {
                unsubscribe = apiService.subscribeToProposal(proposalParams, (data) => {
                    if (data.proposal) {
                        setProposal(data.proposal);
                    }
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        subscribeProposal();

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [apiService, isAuthorized, JSON.stringify(proposalParams)]);

    return { proposal, loading, error };
};

// Hook for trading operations
export const useTrading = () => {
    const { apiService, isAuthorized } = useApi();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const buyContract = async (parameters) => {
        if (!isAuthorized) {
            throw new Error('Not authorized');
        }

        setLoading(true);
        setError(null);

        try {
            const result = await apiService.buyContract(parameters);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const sellContract = async (contractId, price) => {
        if (!isAuthorized) {
            throw new Error('Not authorized');
        }

        setLoading(true);
        setError(null);

        try {
            const result = await apiService.sellContract(contractId, price);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        buyContract,
        sellContract,
        loading,
        error,
        clearError: () => setError(null)
    };
};

// Connection status component
export const ConnectionStatus = () => {
    const { isConnected, isAuthorized, connectionStatus, error } = useApi();

    const getStatusClass = () => {
        if (error) return 'connection-status--error';
        if (isAuthorized) return 'connection-status--authorized';
        if (isConnected) return 'connection-status--connected';
        return 'connection-status--disconnected';
    };

    const getStatusText = () => {
        if (error) return `Error: ${error}`;
        if (isAuthorized) return 'Connected & Authorized';
        if (isConnected) return 'Connected';
        return 'Disconnected';
    };

    return (
        <div className={`connection-status ${getStatusClass()}`}>
            <span className="connection-status__indicator"></span>
            <span className="connection-status__text">{getStatusText()}</span>
        </div>
    );
};

export default useApi;