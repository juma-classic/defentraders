# 🚀 Deployment Guide

## Vercel Deployment (Recommended)

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/juma-classic/defentraders.git)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables
No environment variables are required for basic deployment.

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/juma-classic/defentraders.git
   cd defentraders
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the app**
   ```bash
   npm run build
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Access the applications**
   - Main app: http://localhost:3000/
   - DTrader: http://localhost:3000/dtrader
   - Reconstructed app: http://localhost:3000/app

## Troubleshooting

### MIME Type Errors
If you see MIME type errors, ensure:
- Static files are served with correct headers
- Vercel routing is configured properly
- File extensions match content types

### 404 Errors
- Check `vercel.json` routing configuration
- Ensure file paths match the directory structure
- Verify static file serving is working

### Build Issues
- Run `npm run build` before deployment
- Check Node.js version compatibility (>=18.0.0)
- Ensure all dependencies are installed

## File Structure for Deployment

```
├── vercel.json          # Vercel configuration
├── server.js            # Express server (Vercel function)
├── package.json         # Dependencies and scripts
├── build/               # Built React app
├── defentraders.site/   # Original scraped files
├── dtrader.defentraders.site/
├── manual-umber.vercel.app/
└── signals-lilac.vercel.app/
```

## Performance Optimization

### For Production
- Enable gzip compression
- Add CDN for static assets
- Implement caching headers
- Minify CSS and JS files

### Vercel Specific
- Use Edge Functions for better performance
- Enable Analytics
- Set up custom domains
- Configure redirects in vercel.json