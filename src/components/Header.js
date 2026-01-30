/**
 * Header Component
 * Navigation and user controls
 * Based on reverse-engineered header structure
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthStatus, AccountSwitcher } from '../auth/useAuth';
import { ConnectionStatus } from '../api/useApi';
import './Header.css';

const Header = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'header__nav-link--active' : '';
    };

    return (
        <header className="header">
            <div className="header__container">
                {/* Logo */}
                <div className="header__logo">
                    <Link to="/" className="header__logo-link">
                        <img 
                            src="/icon.png" 
                            alt="Defen Traders" 
                            className="header__logo-image"
                        />
                        <span className="header__logo-text">Defen Traders</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="header__nav">
                    <Link 
                        to="/trading" 
                        className={`header__nav-link ${isActive('/trading')}`}
                    >
                        Trading
                    </Link>
                    <Link 
                        to="/bot" 
                        className={`header__nav-link ${isActive('/bot')}`}
                    >
                        Bot Builder
                    </Link>
                    <Link 
                        to="/portfolio" 
                        className={`header__nav-link ${isActive('/portfolio')}`}
                    >
                        Portfolio
                    </Link>
                    <Link 
                        to="/settings" 
                        className={`header__nav-link ${isActive('/settings')}`}
                    >
                        Settings
                    </Link>
                </nav>

                {/* User controls */}
                <div className="header__controls">
                    <ConnectionStatus />
                    <AccountSwitcher />
                    <AuthStatus />
                </div>
            </div>
        </header>
    );
};

export default Header;