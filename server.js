const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve static files from different domain folders with proper MIME types
app.use('/static', express.static(path.join(__dirname, 'defentraders.site/static'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Serve public files (for new landing page)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/defentraders', express.static(path.join(__dirname, 'defentraders.site')));
app.use('/dtrader', express.static(path.join(__dirname, 'dtrader.defentraders.site')));
app.use('/manual', express.static(path.join(__dirname, 'manual-umber.vercel.app')));
app.use('/signals', express.static(path.join(__dirname, 'signals-lilac.vercel.app')));

// Serve our reconstructed React app
app.use('/app', express.static(path.join(__dirname, 'build')));

// Serve icon from defentraders.site
app.get('/icon.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'defentraders.site', 'icon.png'));
});

// API routes for development
app.get('/api/config', (req, res) => {
  res.json({
    wsUrl: 'wss://ws.binaryws.com/websockets/v3',
    oauthUrl: 'https://oauth.deriv.com',
    appId: '74892'
  });
});

// Health check for Vercel
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Main routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'defentraders.site', 'index.html'));
});

app.get('/landing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/dtrader', (req, res) => {
  res.sendFile(path.join(__dirname, 'dtrader.defentraders.site', 'dtrader.html'));
});

// Serve our reconstructed app
app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Handle 404s
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found', 
    path: req.path,
    message: 'The requested resource was not found on this server.'
  });
});

// For Vercel, export the app
if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Available routes:');
    console.log('- http://localhost:3000/ (Original Defen Traders app)');
    console.log('- http://localhost:3000/dtrader (Original DTrader app)');
    console.log('- http://localhost:3000/manual (Original Manual app)');
    console.log('- http://localhost:3000/signals (Original Signals app)');
    console.log('- http://localhost:3000/app (Reconstructed React app)');
  });
}