/**
 * useAuth Hook
 * React hook for authentication state management
 * Based on reverse-engineered patterns from the trading platform
 */

import { useState, useEffect, useContext, createContext } from 'react';
import AuthService from './AuthService';

// Create authentication context
const AuthContext = createContext(null);

// Authentication provider component
export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        isLoading: true,
        user: null,
        error: null,
        accounts: []
    });

    const [authService] = useState(() => new AuthService());

    useEffect(() => {
        // Initialize authentication state
        const initAuth = () => {
            const status = authService.getAuthStatus();
            setAuthState(prev => ({
                ...prev,
                isAuthenticated: status.isAuthenticated,
                user: status.user,
                isLoading: false,
                accounts: authService.getStoredAccounts()
            }));
        };

        // Set up authentication event listener
        const handleAuthEvent = (event, data) => {
            switch (event) {
                case 'authenticated':
                    setAuthState(prev => ({
                        ...prev,
                        isAuthenticated: true,
                        user: data,
                        error: null,
                        isLoading: false,
                        accounts: data.accounts || []
                    }));
                    break;

                case 'logout':
                    setAuthState(prev => ({
                        ...prev,
                        isAuthenticated: false,
                        user: null,
                        error: null,
                        isLoading: false,
                        accounts: []
                    }));
                    break;

                case 'accountSwitched':
                    setAuthState(prev => ({
                        ...prev,
                        user: data
                    }));
                    break;

                case 'error':
                    setAuthState(prev => ({
                        ...prev,
                        error: data,
                        isLoading: false
                    }));
                    break;

                default:
                    break;
            }
        };

        authService.addListener(handleAuthEvent);
        initAuth();

        // Handle OAuth callback if present
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');

        if (code && state) {
            setAuthState(prev => ({ ...prev, isLoading: true }));
            authService.handleOAuthCallback(code, state)
                .then(() => {
                    // Clean up URL
                    window.history.replaceState({}, document.title, window.location.pathname);
                })
                .catch(error => {
                    console.error('OAuth callback error:', error);
                    setAuthState(prev => ({
                        ...prev,
                        error: error.message,
                        isLoading: false
                    }));
                });
        }

        // Cleanup
        return () => {
            authService.removeListener(handleAuthEvent);
        };
    }, [authService]);

    const value = {
        ...authState,
        authService,
        login: (options) => authService.login(options),
        logout: () => authService.logout(),
        switchAccount: (loginId) => authService.switchAccount(loginId),
        refreshToken: () => authService.refreshToken(),
        clearError: () => setAuthState(prev => ({ ...prev, error: null }))
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// useAuth hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Higher-order component for protected routes
export const withAuth = (Component) => {
    return function AuthenticatedComponent(props) {
        const { isAuthenticated, isLoading } = useAuth();

        if (isLoading) {
            return <div className="auth-loading">Loading...</div>;
        }

        if (!isAuthenticated) {
            return <LoginPrompt />;
        }

        return <Component {...props} />;
    };
};

// Login prompt component
const LoginPrompt = () => {
    const { login, error } = useAuth();

    return (
        <div className="login-prompt">
            <div className="login-prompt__content">
                <h2>Authentication Required</h2>
                <p>Please log in to access the trading platform.</p>
                
                {error && (
                    <div className="login-prompt__error">
                        Error: {error}
                    </div>
                )}
                
                <button 
                    className="login-prompt__button"
                    onClick={() => login()}
                >
                    Log In with Deriv
                </button>
            </div>
        </div>
    );
};

// Account switcher component
export const AccountSwitcher = () => {
    const { user, accounts, switchAccount, isLoading } = useAuth();
    const [switching, setSwitching] = useState(false);

    const handleAccountSwitch = async (loginId) => {
        if (switching || loginId === user?.loginId) return;
        
        setSwitching(true);
        try {
            await switchAccount(loginId);
        } catch (error) {
            console.error('Account switch failed:', error);
        } finally {
            setSwitching(false);
        }
    };

    if (!user || accounts.length <= 1) {
        return null;
    }

    return (
        <div className="account-switcher">
            <label htmlFor="account-select">Account:</label>
            <select
                id="account-select"
                value={user.loginId}
                onChange={(e) => handleAccountSwitch(e.target.value)}
                disabled={switching || isLoading}
                className="account-switcher__select"
            >
                {accounts.map(account => (
                    <option key={account.loginid} value={account.loginid}>
                        {account.loginid} ({account.currency} {account.balance})
                    </option>
                ))}
            </select>
            {switching && <span className="account-switcher__loading">Switching...</span>}
        </div>
    );
};

// Authentication status component
export const AuthStatus = () => {
    const { isAuthenticated, user, isLoading, logout } = useAuth();

    if (isLoading) {
        return <div className="auth-status auth-status--loading">Loading...</div>;
    }

    if (!isAuthenticated) {
        return <div className="auth-status auth-status--unauthenticated">Not logged in</div>;
    }

    return (
        <div className="auth-status auth-status--authenticated">
            <span className="auth-status__user">
                Welcome, {user?.loginId}
            </span>
            <button 
                className="auth-status__logout"
                onClick={logout}
            >
                Logout
            </button>
        </div>
    );
};

export default useAuth;