/**
 * Main Application Component
 * Reconstructed from reverse-engineered trading platform
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/useAuth';
import { ApiProvider } from './api/useApi';
import Header from './components/Header';
import TradingInterface from './components/TradingInterface';
import BotBuilder from './components/BotBuilder';
import Portfolio from './components/Portfolio';
import Settings from './components/Settings';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <ApiProvider>
                <Router>
                    <div className="app">
                        <Header />
                        <main className="app__main">
                            <Routes>
                                <Route path="/" element={<Navigate to="/trading" replace />} />
                                <Route path="/trading" element={<TradingInterface />} />
                                <Route path="/bot" element={<BotBuilder />} />
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
                        </main>
                        
                        {/* Modal roots - matching the original structure */}
                        <div id="modal_root" className="modal-root"></div>
                        <div id="popup_root" className="popup-root"></div>
                        <div id="v2_modal_root" className="modal-root"></div>
                        <div id="wallets_modal_root" className="modal-root"></div>
                    </div>
                </Router>
            </ApiProvider>
        </AuthProvider>
    );
}

export default App;