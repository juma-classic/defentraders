/**
 * Trading Interface Component
 * Main trading interface with charts and trade forms
 * Based on reverse-engineered DTrader structure
 */

import React, { useState, useEffect } from 'react';
import { useAuth, withAuth } from '../auth/useAuth';
import { useApi, useTicks, useActiveSymbols, useBalance } from '../api/useApi';
import Chart from './Chart';
import TradeForm from './TradeForm';
import PositionsDrawer from './PositionsDrawer';
import './TradingInterface.css';

const TradingInterface = () => {
    const { user } = useAuth();
    const { isConnected, isAuthorized } = useApi();
    const { symbols, loading: symbolsLoading } = useActiveSymbols();
    const { balance } = useBalance();
    
    const [selectedSymbol, setSelectedSymbol] = useState('R_100');
    const [chartType, setChartType] = useState('area');
    const [interval, setInterval] = useState('1t');
    const [showPositions, setShowPositions] = useState(false);
    
    const { currentTick } = useTicks(selectedSymbol);

    useEffect(() => {
        // Set default symbol when symbols are loaded
        if (symbols.length > 0 && !selectedSymbol) {
            setSelectedSymbol(symbols[0].symbol);
        }
    }, [symbols, selectedSymbol]);

    if (!isConnected) {
        return (
            <div className="trading-interface trading-interface--loading">
                <div className="trading-interface__loading">
                    <div className="loading-spinner"></div>
                    <p>Connecting to trading server...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="trading-interface">
            {/* Trading header */}
            <div className="trading-interface__header">
                <div className="trading-interface__symbol-info">
                    <select 
                        value={selectedSymbol}
                        onChange={(e) => setSelectedSymbol(e.target.value)}
                        className="trading-interface__symbol-select"
                        disabled={symbolsLoading}
                    >
                        {symbols.map(symbol => (
                            <option key={symbol.symbol} value={symbol.symbol}>
                                {symbol.display_name}
                            </option>
                        ))}
                    </select>
                    
                    {currentTick && (
                        <div className="trading-interface__current-price">
                            <span className="trading-interface__price">
                                {currentTick.quote}
                            </span>
                            <span className="trading-interface__time">
                                {new Date(currentTick.epoch * 1000).toLocaleTimeString()}
                            </span>
                        </div>
                    )}
                </div>

                <div className="trading-interface__chart-controls">
                    <select 
                        value={chartType}
                        onChange={(e) => setChartType(e.target.value)}
                        className="trading-interface__chart-type"
                    >
                        <option value="area">Area</option>
                        <option value="line">Line</option>
                        <option value="candle">Candles</option>
                    </select>
                    
                    <select 
                        value={interval}
                        onChange={(e) => setInterval(e.target.value)}
                        className="trading-interface__interval"
                    >
                        <option value="1t">1 Tick</option>
                        <option value="1m">1 Minute</option>
                        <option value="5m">5 Minutes</option>
                        <option value="15m">15 Minutes</option>
                        <option value="1h">1 Hour</option>
                        <option value="1d">1 Day</option>
                    </select>
                </div>

                <div className="trading-interface__account-info">
                    {balance && (
                        <div className="trading-interface__balance">
                            <span className="trading-interface__balance-label">Balance:</span>
                            <span className="trading-interface__balance-amount">
                                {balance.currency} {balance.balance}
                            </span>
                        </div>
                    )}
                    
                    <button 
                        className="trading-interface__positions-toggle"
                        onClick={() => setShowPositions(!showPositions)}
                    >
                        Positions
                    </button>
                </div>
            </div>

            {/* Main trading area */}
            <div className="trading-interface__content">
                {/* Chart area */}
                <div className="trading-interface__chart-area">
                    <Chart 
                        symbol={selectedSymbol}
                        chartType={chartType}
                        interval={interval}
                    />
                </div>

                {/* Trade form */}
                <div className="trading-interface__trade-form">
                    <TradeForm 
                        symbol={selectedSymbol}
                        currentPrice={currentTick?.quote}
                    />
                </div>
            </div>

            {/* Positions drawer */}
            {showPositions && (
                <PositionsDrawer 
                    onClose={() => setShowPositions(false)}
                />
            )}

            {/* Status indicators */}
            <div className="trading-interface__status">
                <div className={`trading-interface__connection-status ${isAuthorized ? 'connected' : 'disconnected'}`}>
                    {isAuthorized ? 'Connected' : 'Disconnected'}
                </div>
            </div>
        </div>
    );
};

export default withAuth(TradingInterface);