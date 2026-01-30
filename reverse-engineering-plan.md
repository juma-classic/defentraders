# Reverse Engineering Plan for Trading Platform

## Overview
Based on the analysis, we have a multi-application trading platform with the following key components:

### Applications Identified:
1. **Defen Traders** - Main trading bot builder platform
2. **DTrader** - Deriv trading application (most complex)
3. **Manual Trading App** - Simplified trading interface
4. **Signals App** - Trading signals application

### Key Technologies:
- React + React Router
- SmartCharts (Deriv's charting library)
- Formik (form management)
- MobX (state management - inferred from analysis)
- OAuth 2.0 authentication
- WebSocket connections for real-time data
- Service Worker (PWA capabilities)

## Phase 1: Infrastructure Setup ✅
- [x] Basic Express server
- [x] Analysis tools
- [x] File structure understanding

## Phase 2: Core Component Extraction (Current)
### 2.1 Authentication System
- [ ] Extract OAuth flow
- [ ] Token management
- [ ] Session handling
- [ ] Multi-account support

### 2.2 API Layer
- [ ] WebSocket connection management
- [ ] REST API endpoints
- [ ] Real-time data handling
- [ ] Error handling and retry logic

### 2.3 State Management
- [ ] MobX stores structure
- [ ] Data flow patterns
- [ ] Cache management

## Phase 3: UI Components Reconstruction
### 3.1 Core Components
- [ ] Trading forms
- [ ] Chart integration
- [ ] Modal system
- [ ] Navigation structure

### 3.2 Trading Features
- [ ] Order placement
- [ ] Position management
- [ ] Account switching
- [ ] Risk management

## Phase 4: Business Logic
### 4.1 Trading Engine
- [ ] Order validation
- [ ] Risk calculations
- [ ] P&L calculations
- [ ] Trade execution flow

### 4.2 Bot Builder (Defen Traders)
- [ ] Visual block system
- [ ] Strategy execution
- [ ] Backtesting logic
- [ ] Bot management

## Phase 5: Integration & Testing
- [ ] API mocking
- [ ] Component testing
- [ ] Integration testing
- [ ] Performance optimization

## Key Files to Focus On:

### High Priority (Core Business Logic):
1. `dtrader.defentraders.site/js/core.chunk.trader.*.js` - Main trading logic
2. `dtrader.defentraders.site/trader/js/trader.trader-app.*.js` - Trader application
3. `defentraders.site/static/js/index.*.js` - Main Defen Traders app
4. `dtrader.defentraders.site/js/core.main*.js` - Core application logic

### Medium Priority (UI & Features):
1. Trading modals and forms
2. Chart settings and configuration
3. Account management components
4. Position drawer and management

### Low Priority (External Services):
1. Analytics and tracking
2. Customer support integration
3. External API integrations

## Reverse Engineering Strategy:

### 1. String Literal Analysis
Extract all string literals to understand:
- API endpoints
- Error messages
- UI text
- Configuration keys

### 2. Function Pattern Recognition
Identify patterns for:
- React component definitions
- Event handlers
- API calls
- State updates

### 3. Data Flow Mapping
Map the flow of:
- Authentication tokens
- Trading data
- User interactions
- WebSocket messages

### 4. Component Hierarchy Reconstruction
Rebuild the component tree:
- Main application shell
- Route definitions
- Modal system
- Trading interface

## Next Steps:
1. Start with authentication system extraction
2. Build API layer abstraction
3. Reconstruct core trading components
4. Implement state management
5. Add business logic layer