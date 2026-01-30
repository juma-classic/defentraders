/**
 * Chart Component
 * Trading chart with real-time data
 * Based on reverse-engineered SmartCharts integration
 */

import React, { useEffect, useRef, useState } from 'react';
import { useTicks, useCandles } from '../api/useApi';
import './Chart.css';

const Chart = ({ symbol, chartType = 'area', interval = '1t' }) => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    // Get tick data for real-time updates
    const { ticks, currentTick } = useTicks(symbol);
    
    // Get candle data for historical data
    const granularity = getGranularityFromInterval(interval);
    const { candles } = useCandles(symbol, granularity);

    useEffect(() => {
        if (chartType === 'area' || chartType === 'line') {
            // Use tick data for area/line charts
            if (ticks.length > 0) {
                setChartData(ticks);
                setIsLoading(false);
            }
        } else if (chartType === 'candle') {
            // Use candle data for candlestick charts
            if (candles.length > 0) {
                setChartData(candles);
                setIsLoading(false);
            }
        }
    }, [ticks, candles, chartType]);

    useEffect(() => {
        if (!chartRef.current || chartData.length === 0) return;

        // Initialize chart
        initializeChart();
    }, [chartData, chartType]);

    const initializeChart = () => {
        const canvas = chartRef.current;
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (chartData.length === 0) return;
        
        // Draw chart based on type
        switch (chartType) {
            case 'area':
                drawAreaChart(ctx, canvas, chartData);
                break;
            case 'line':
                drawLineChart(ctx, canvas, chartData);
                break;
            case 'candle':
                drawCandleChart(ctx, canvas, chartData);
                break;
            default:
                drawLineChart(ctx, canvas, chartData);
        }
    };

    const drawLineChart = (ctx, canvas, data) => {
        if (data.length < 2) return;
        
        const padding = 40;
        const width = canvas.width - 2 * padding;
        const height = canvas.height - 2 * padding;
        
        // Calculate min/max values
        const values = data.map(d => d.quote || d.close);
        const minValue = Math.min(...values);
        const maxValue = Math.max(...values);
        const valueRange = maxValue - minValue || 1;
        
        // Draw grid
        drawGrid(ctx, canvas, padding);
        
        // Draw line
        ctx.beginPath();
        ctx.strokeStyle = '#2196F3';
        ctx.lineWidth = 2;
        
        data.forEach((point, index) => {
            const x = padding + (index / (data.length - 1)) * width;
            const y = padding + height - ((point.quote || point.close) - minValue) / valueRange * height;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
        
        // Draw current price line
        if (currentTick) {
            const currentY = padding + height - (currentTick.quote - minValue) / valueRange * height;
            ctx.beginPath();
            ctx.strokeStyle = '#FF5722';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.moveTo(padding, currentY);
            ctx.lineTo(canvas.width - padding, currentY);
            ctx.stroke();
            ctx.setLineDash([]);
            
            // Price label
            ctx.fillStyle = '#FF5722';
            ctx.font = '12px Arial';
            ctx.fillText(currentTick.quote.toFixed(5), canvas.width - padding + 5, currentY + 4);
        }
    };

    const drawAreaChart = (ctx, canvas, data) => {
        if (data.length < 2) return;
        
        const padding = 40;
        const width = canvas.width - 2 * padding;
        const height = canvas.height - 2 * padding;
        
        // Calculate min/max values
        const values = data.map(d => d.quote || d.close);
        const minValue = Math.min(...values);
        const maxValue = Math.max(...values);
        const valueRange = maxValue - minValue || 1;
        
        // Draw grid
        drawGrid(ctx, canvas, padding);
        
        // Draw area
        const gradient = ctx.createLinearGradient(0, padding, 0, padding + height);
        gradient.addColorStop(0, 'rgba(33, 150, 243, 0.3)');
        gradient.addColorStop(1, 'rgba(33, 150, 243, 0.05)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        
        // Start from bottom left
        ctx.moveTo(padding, padding + height);
        
        // Draw line to first point
        const firstY = padding + height - (data[0].quote - minValue) / valueRange * height;
        ctx.lineTo(padding, firstY);
        
        // Draw the curve
        data.forEach((point, index) => {
            const x = padding + (index / (data.length - 1)) * width;
            const y = padding + height - ((point.quote || point.close) - minValue) / valueRange * height;
            ctx.lineTo(x, y);
        });
        
        // Close the area
        ctx.lineTo(canvas.width - padding, padding + height);
        ctx.closePath();
        ctx.fill();
        
        // Draw the line on top
        drawLineChart(ctx, canvas, data);
    };

    const drawCandleChart = (ctx, canvas, data) => {
        if (data.length === 0) return;
        
        const padding = 40;
        const width = canvas.width - 2 * padding;
        const height = canvas.height - 2 * padding;
        
        // Calculate min/max values
        const highs = data.map(d => d.high);
        const lows = data.map(d => d.low);
        const minValue = Math.min(...lows);
        const maxValue = Math.max(...highs);
        const valueRange = maxValue - minValue || 1;
        
        // Draw grid
        drawGrid(ctx, canvas, padding);
        
        const candleWidth = Math.max(2, width / data.length - 2);
        
        data.forEach((candle, index) => {
            const x = padding + (index / data.length) * width + candleWidth / 2;
            
            const openY = padding + height - (candle.open - minValue) / valueRange * height;
            const closeY = padding + height - (candle.close - minValue) / valueRange * height;
            const highY = padding + height - (candle.high - minValue) / valueRange * height;
            const lowY = padding + height - (candle.low - minValue) / valueRange * height;
            
            const isGreen = candle.close > candle.open;
            
            // Draw wick
            ctx.beginPath();
            ctx.strokeStyle = isGreen ? '#4CAF50' : '#F44336';
            ctx.lineWidth = 1;
            ctx.moveTo(x, highY);
            ctx.lineTo(x, lowY);
            ctx.stroke();
            
            // Draw body
            ctx.fillStyle = isGreen ? '#4CAF50' : '#F44336';
            const bodyTop = Math.min(openY, closeY);
            const bodyHeight = Math.abs(closeY - openY) || 1;
            
            ctx.fillRect(x - candleWidth / 2, bodyTop, candleWidth, bodyHeight);
        });
    };

    const drawGrid = (ctx, canvas, padding) => {
        ctx.strokeStyle = '#E0E0E0';
        ctx.lineWidth = 1;
        
        // Horizontal lines
        for (let i = 0; i <= 5; i++) {
            const y = padding + (i / 5) * (canvas.height - 2 * padding);
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(canvas.width - padding, y);
            ctx.stroke();
        }
        
        // Vertical lines
        for (let i = 0; i <= 10; i++) {
            const x = padding + (i / 10) * (canvas.width - 2 * padding);
            ctx.beginPath();
            ctx.moveTo(x, padding);
            ctx.lineTo(x, canvas.height - padding);
            ctx.stroke();
        }
    };

    if (isLoading) {
        return (
            <div className="chart chart--loading">
                <div className="chart__loading">
                    <div className="loading-spinner"></div>
                    <p>Loading chart data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="chart">
            <div className="chart__header">
                <h3 className="chart__title">{symbol}</h3>
                <div className="chart__info">
                    {currentTick && (
                        <span className="chart__current-price">
                            {currentTick.quote.toFixed(5)}
                        </span>
                    )}
                </div>
            </div>
            
            <div className="chart__container">
                <canvas 
                    ref={chartRef}
                    className="chart__canvas"
                />
            </div>
        </div>
    );
};

// Helper function to convert interval to granularity
function getGranularityFromInterval(interval) {
    const intervalMap = {
        '1t': 0,    // Tick data
        '1m': 60,   // 1 minute
        '5m': 300,  // 5 minutes
        '15m': 900, // 15 minutes
        '1h': 3600, // 1 hour
        '1d': 86400 // 1 day
    };
    
    return intervalMap[interval] || 60;
}

export default Chart;