const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from different domain folders
app.use('/defentraders', express.static(path.join(__dirname, 'defentraders.site')));
app.use('/dtrader', express.static(path.join(__dirname, 'dtrader.defentraders.site')));
app.use('/manual', express.static(path.join(__dirname, 'manual-umber.vercel.app')));
app.use('/signals', express.static(path.join(__dirname, 'signals-lilac.vercel.app')));

// Serve our reconstructed React app
app.use('/app', express.static(path.join(__dirname, 'build')));

// API routes for development
app.get('/api/config', (req, res) => {
  res.json({
    wsUrl: 'wss://ws.binaryws.com/websockets/v3',
    oauthUrl: 'https://oauth.deriv.com',
    appId: '74892'
  });
});

// Main routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'defentraders.site', 'index.html'));
});

app.get('/dtrader', (req, res) => {
  res.sendFile(path.join(__dirname, 'dtrader.defentraders.site', 'dtrader.html'));
});

// Serve our reconstructed app
app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log('- http://localhost:3000/ (Original Defen Traders app)');
  console.log('- http://localhost:3000/dtrader (Original DTrader app)');
  console.log('- http://localhost:3000/manual (Original Manual app)');
  console.log('- http://localhost:3000/signals (Original Signals app)');
  console.log('- http://localhost:3000/app (Reconstructed React app)');
});