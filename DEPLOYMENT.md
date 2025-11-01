# Deployment Setup Summary

## What Was Done

This PR configures your Pulse Landing Page for deployment to GitHub Pages with full DNS support. Here's what was added:

### 1. GitHub Actions Deployment Workflow (`.github/workflows/deploy.yml`)
- Automatically builds and deploys your site when you push to the `main` branch
- Uses pnpm to install dependencies and build the project
- Uploads the built files to GitHub Pages

### 2. Client-Side Routing Support
- **404.html**: Handles direct navigation to routes in your single-page application
- **index.html**: Updated with redirect script to restore the correct URL
- **.nojekyll**: Tells GitHub Pages not to process files with Jekyll

### 3. Custom Domain Support
- **CNAME.example**: Template file for configuring a custom domain

### 4. Documentation
- **README.md**: Comprehensive guide covering deployment, DNS setup, and troubleshooting

## What You Need to Do Next

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub: https://github.com/kfrye1212/pulse-landing
2. Click on **Settings** → **Pages**
3. Under "Build and deployment", select **GitHub Actions** as the source

### Step 2: Merge This PR to Main Branch
1. Review and approve this PR
2. Merge it into the `main` branch
3. The GitHub Actions workflow will automatically run and deploy your site

### Step 3: Access Your Site
After the workflow completes (check the Actions tab), your site will be available at:
- **Default URL**: `https://kfrye1212.github.io/pulse-landing/`

### Step 4: (Optional) Configure Custom Domain

If you have a custom domain and want to use it:

1. **Create CNAME file**:
   - Rename `client/public/CNAME.example` to `client/public/CNAME`
   - Edit the file and replace the content with your domain (e.g., `pulse.yourdomain.com`)
   - Commit and push the change

2. **Configure DNS at your domain provider**:
   
   **For apex domain (example.com):**
   - Add four A records pointing to:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   
   **For subdomain (www.example.com or pulse.example.com):**
   - Add a CNAME record pointing to: `kfrye1212.github.io`

3. **Enable custom domain in GitHub Pages settings**:
   - Go to Settings → Pages
   - Enter your custom domain
   - Check "Enforce HTTPS" (recommended)

4. **Wait for DNS propagation**: Can take 24-48 hours

## Verification Steps

1. **Check deployment status**:
   - Go to the **Actions** tab in your repository
   - Look for the "Deploy to GitHub Pages" workflow
   - Ensure it completes successfully (green checkmark)

2. **Test the site**:
   - Visit your GitHub Pages URL
   - Navigate to different pages (About, Docs, Contact, etc.)
   - Refresh the page on a non-home route to test client-side routing

3. **Verify DNS** (if using custom domain):
   ```bash
   # Check A records (for apex domain)
   dig yourdomain.com
   
   # Check CNAME record (for subdomain)
   dig www.yourdomain.com
   ```

## Troubleshooting

### Site returns 404
- Make sure GitHub Pages is enabled in repository settings
- Check that the deployment workflow completed successfully
- Verify you're using the correct URL

### Custom domain not working
- Ensure CNAME file exists in `client/public/` with your domain
- Verify DNS records are correctly configured
- Wait for DNS propagation (24-48 hours)
- Use `dig` or `nslookup` to verify DNS resolution

### Client-side routes return 404
- The 404.html and redirect scripts should handle this
- Check browser console for JavaScript errors
- Ensure both index.html and 404.html are present in the deployment

### Build fails in GitHub Actions
- Check the Actions tab for error logs
- Verify all dependencies are in package.json
- Ensure environment variables are set correctly in the workflow

## Support

For more detailed information, see the README.md file in the repository root.
