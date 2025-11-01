# PULSE Landing Page

PULSE - Next Generation Web3 Ecosystem Landing Page

## Features

- 🚀 Modern Web3 landing page
- 💼 Wallet integration (Ethereum & Solana)
- 🎨 Sleek neon cyan-magenta gradient branding
- 📱 Responsive design
- ⚡ Built with Vite + React + TypeScript

## Deployment

### GitHub Pages

This repository is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

#### Setup Instructions:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Configure Custom Domain** (Optional):
   - If you have a custom domain, create a `CNAME` file in `client/public/` with your domain name
   - Configure DNS records at your domain provider:
     - For apex domain (example.com): Add an A record pointing to GitHub Pages IPs:
       ```
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```
     - For subdomain (www.example.com): Add a CNAME record pointing to `yourusername.github.io`

3. **Push to main branch**:
   ```bash
   git push origin main
   ```

4. **Monitor deployment**:
   - Go to Actions tab in GitHub to see the deployment progress
   - Once complete, your site will be live at `https://yourusername.github.io/pulse-landing/` or your custom domain

### Environment Variables

The following environment variables are used during build:

- `VITE_APP_ID` - Application ID
- `VITE_OAUTH_PORTAL_URL` - OAuth portal URL
- `VITE_APP_TITLE` - Application title
- `VITE_APP_LOGO` - Path to logo
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint (optional)
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID (optional)

## Local Development

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Create `.env` file** (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

3. **Run development server**:
   ```bash
   pnpm run dev
   ```

4. **Build for production**:
   ```bash
   pnpm run build
   ```

5. **Preview production build**:
   ```bash
   pnpm run start
   ```

## Project Structure

```
pulse-landing/
├── client/           # Frontend React application
│   ├── public/       # Static assets
│   └── src/          # Source code
├── server/           # Backend Express server
├── shared/           # Shared types and utilities
└── dist/             # Build output
```

## DNS Configuration

If you're using a custom domain:

1. **Create CNAME file**: Add a file named `CNAME` in `client/public/` containing your domain
2. **Configure DNS at your domain provider**:
   - For root domain: Use A records pointing to GitHub Pages IPs
   - For subdomain: Use CNAME record pointing to `yourusername.github.io`
3. **Wait for DNS propagation**: Can take up to 24-48 hours

## Troubleshooting

### Site not loading
- Check GitHub Actions tab for deployment status
- Verify GitHub Pages is enabled in repository settings
- Ensure DNS records are correctly configured (if using custom domain)
- Check browser console for errors

### 404 on page refresh
- The `404.html` file handles client-side routing for GitHub Pages
- Ensure `404.html` is in the `client/public/` directory

### Custom domain not working
- Verify CNAME file exists in `client/public/`
- Check DNS records at your domain provider
- Wait for DNS propagation (24-48 hours)
- Use `dig yourdomain.com` or `nslookup yourdomain.com` to verify DNS

## License

MIT
