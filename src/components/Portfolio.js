/**
 * Portfolio Component
 * Portfolio and position management
 */

import React from 'react';
import { useAuth, withAuth } from '../auth/useAuth';
import { usePortfolio, useBalance } from '../api/useApi';
import './Portfolio.css';

const Portfolio = () => {
    const { user } = useAuth();
    const { portfolio, loading: portfolioLoading } = usePortfolio();
    const { balance } = useBalance();

    if (portfolioLoading) {
        return (
            <div className="portfolio portfolio--loading">
                <div className="loading-spinner"></div>
                <p>Loading portfolio...</p>
            </div>
        );
    }

    return (
        <div className="portfolio">
            <div className="portfolio__header">
                <h1>💼 Portfolio</h1>
                <div className="portfolio__summary">
                    {balance && (
                        <div className="balance-card">
                            <h3>Account Balance</h3>
                            <div className="balance-amount">
                                {balance.currency} {balance.balance}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="portfolio__content">
                <div className="positions-section">
                    <h2>Open Positions</h2>
                    {portfolio && portfolio.contracts && portfolio.contracts.length > 0 ? (
                        <div className="positions-list">
                            {portfolio.contracts.map(contract => (
                                <div key={contract.contract_id} className="position-card">
                                    <div className="position-header">
                                        <h4>{contract.display_name}</h4>
                                        <span className={`position-status ${contract.is_sold ? 'closed' : 'open'}`}>
                                            {contract.is_sold ? 'Closed' : 'Open'}
                                        </span>
                                    </div>
                                    <div className="position-details">
                                        <div className="detail-item">
                                            <label>Buy Price:</label>
                                            <span>{contract.currency} {contract.buy_price}</span>
                                        </div>
                                        <div className="detail-item">
                                            <label>Current Price:</label>
                                            <span>{contract.currency} {contract.bid_price || contract.buy_price}</span>
                                        </div>
                                        <div className="detail-item">
                                            <label>P&L:</label>
                                            <span className={contract.profit >= 0 ? 'profit' : 'loss'}>
                                                {contract.currency} {contract.profit}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <h3>No open positions</h3>
                            <p>Start trading to see your positions here</p>
                        </div>
                    )}
                </div>

                <div className="history-section">
                    <h2>Trading History</h2>
                    <div className="history-placeholder">
                        <p>Trading history will appear here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(Portfolio);