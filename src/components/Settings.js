/**
 * Settings Component
 * Application settings and preferences
 */

import React, { useState } from 'react';
import { useAuth, withAuth } from '../auth/useAuth';
import './Settings.css';

const Settings = () => {
    const { user, logout } = useAuth();
    const [theme, setTheme] = useState('light');
    const [notifications, setNotifications] = useState(true);
    const [autoSave, setAutoSave] = useState(true);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="settings">
            <div className="settings__header">
                <h1>⚙️ Settings</h1>
                <p>Manage your account and application preferences</p>
            </div>

            <div className="settings__content">
                <div className="settings-section">
                    <h2>Account Information</h2>
                    <div className="account-info">
                        <div className="info-item">
                            <label>Login ID:</label>
                            <span>{user?.loginId || 'Not logged in'}</span>
                        </div>
                        <div className="info-item">
                            <label>Account Type:</label>
                            <span>{user?.currentAccount?.account_type || 'Demo'}</span>
                        </div>
                        <div className="info-item">
                            <label>Currency:</label>
                            <span>{user?.currentAccount?.currency || 'USD'}</span>
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h2>Appearance</h2>
                    <div className="setting-item">
                        <label>Theme:</label>
                        <div className="theme-selector">
                            <button 
                                className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                                onClick={() => handleThemeChange('light')}
                            >
                                ☀️ Light
                            </button>
                            <button 
                                className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                                onClick={() => handleThemeChange('dark')}
                            >
                                🌙 Dark
                            </button>
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h2>Preferences</h2>
                    <div className="setting-item">
                        <label>
                            <input 
                                type="checkbox" 
                                checked={notifications}
                                onChange={(e) => setNotifications(e.target.checked)}
                            />
                            Enable notifications
                        </label>
                    </div>
                    <div className="setting-item">
                        <label>
                            <input 
                                type="checkbox" 
                                checked={autoSave}
                                onChange={(e) => setAutoSave(e.target.checked)}
                            />
                            Auto-save strategies
                        </label>
                    </div>
                </div>

                <div className="settings-section">
                    <h2>API Configuration</h2>
                    <div className="api-info">
                        <div className="info-item">
                            <label>WebSocket URL:</label>
                            <span>wss://ws.binaryws.com/websockets/v3</span>
                        </div>
                        <div className="info-item">
                            <label>OAuth Provider:</label>
                            <span>oauth.deriv.com</span>
                        </div>
                        <div className="info-item">
                            <label>App ID:</label>
                            <span>74892</span>
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h2>Reverse Engineering Info</h2>
                    <div className="reverse-info">
                        <div className="info-item">
                            <label>Files Analyzed:</label>
                            <span>40 JavaScript files (33.7MB)</span>
                        </div>
                        <div className="info-item">
                            <label>Functions Extracted:</label>
                            <span>1,000+ functions identified</span>
                        </div>
                        <div className="info-item">
                            <label>API Endpoints:</label>
                            <span>200+ endpoints discovered</span>
                        </div>
                        <div className="info-item">
                            <label>Components:</label>
                            <span>80+ React patterns found</span>
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h2>Account Actions</h2>
                    <div className="action-buttons">
                        <button className="btn btn--secondary">Export Data</button>
                        <button className="btn btn--secondary">Clear Cache</button>
                        <button className="btn btn--error" onClick={logout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(Settings);