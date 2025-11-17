# Pulse Landing

> The next-generation blockchain ecosystem powering decentralized finance, social platforms, and digital innovation.

Pulse Landing is a modern Web3 platform designed to provide users with access to a comprehensive blockchain ecosystem featuring cryptocurrency presales, domain registration, and decentralized services.

## Features

- 🚀 **Modern Web3 Integration**: Seamless wallet connectivity with Ethereum and Solana support
- 💎 **Token Presale Platform**: Participate in the Pulse token presale with integrated wallet support
- 🌐 **Domain Registration**: TLD (Top-Level Domain) registration for .pulse, .verse, .cp, and .pv domains
- 🎨 **Beautiful UI/UX**: Built with React 19, Tailwind CSS, and shadcn/ui components
- ⚡ **Lightning Fast**: Powered by Vite for optimal development and production performance
- 🔒 **Secure**: Enterprise-grade security with Web3Modal and wallet-adapter integration

## Tech Stack

### Frontend

- **React 19** - Modern React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling with latest features
- **Vite 7** - Next-generation frontend tooling
- **Wouter** - Minimal routing solution
- **shadcn/ui** - High-quality, accessible component library

### Blockchain Integration

- **wagmi** - React Hooks for Ethereum
- **Web3Modal** - Multi-wallet connection interface
- **@solana/wallet-adapter** - Solana wallet integration
- **@solana/web3.js** - Solana blockchain interaction

### Backend

- **Express** - Fast, minimalist web framework
- **tRPC** - End-to-end typesafe APIs
- **Drizzle ORM** - TypeScript ORM for SQL databases
- **MySQL** - Production database

## Prerequisites

- **Node.js** 18.x or higher
- **pnpm** 10.x or higher (package manager)
- **MySQL** 8.x or higher (for production)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kfrye1212/pulse-landing.git
cd pulse-landing
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Copy the example environment file and configure your variables:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Application
VITE_APP_ID=your-app-id
VITE_APP_TITLE="Pulse - Web3 Ecosystem"
VITE_APP_LOGO="https://your-logo-url.com/logo.png"

# OAuth & Auth
VITE_OAUTH_PORTAL_URL=https://your-oauth-portal.dev
OAUTH_SERVER_URL=https://your-oauth-server.dev
JWT_SECRET=your-jwt-secret-change-in-production

# Database
DATABASE_URL=mysql://user:password@localhost:3306/pulse

# Analytics (Optional)
VITE_ANALYTICS_ENDPOINT=https://your-analytics-endpoint.dev
VITE_ANALYTICS_WEBSITE_ID=your-analytics-id

# Server
PORT=3000
```

### 4. Database Setup

Initialize the database:

```bash
pnpm db:push
```

### 5. Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run test suite
- `pnpm db:push` - Push database schema changes

## Project Structure

```
pulse-landing/
├── client/               # Frontend application
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── _core/       # Core utilities and hooks
│   │   ├── components/  # React components
│   │   │   └── ui/     # UI component library
│   │   ├── contexts/    # React contexts
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utility functions
├── server/              # Backend application
│   ├── _core/          # Server core functionality
│   ├── routers.ts      # API route definitions
│   └── storage.ts      # Storage utilities
├── shared/              # Shared types and utilities
├── drizzle/            # Database migrations
└── docs/               # Documentation files
```

## Key Pages

- **Home** (`/`) - Landing page with features, tokenomics, and roadmap
- **Presale** (`/presale`) - Token presale with wallet integration
- **About** (`/about`) - Information about the Pulse ecosystem
- **Docs** (`/docs`) - Technical documentation and whitepaper
- **Contact** (`/contact`) - Contact form and support information

## Wallet Integration

### Supported Wallets

**Ethereum:**

- MetaMask
- WalletConnect
- Coinbase Wallet
- And more via Web3Modal

**Solana:**

- Phantom
- Solflare
- Ledger
- And more via wallet-adapter

## Development

### Code Style

This project uses Prettier for code formatting. Format your code before committing:

```bash
pnpm format
```

### Type Checking

Ensure type safety with TypeScript:

```bash
pnpm check
```

### Building for Production

Create an optimized production build:

```bash
pnpm build
```

The build output will be in the `dist/` directory.

## Deployment

### Environment Variables

Ensure all required environment variables are set in your production environment:

- `DATABASE_URL` - Production database connection string
- `JWT_SECRET` - Strong secret for JWT token generation
- `VITE_APP_*` - Application configuration
- `OAUTH_*` - OAuth authentication configuration

### Build & Deploy

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## Roadmap

### Q1 2026

- ✅ Platform launch
- ✅ Presale integration
- 🔄 Domain registration system
- 🔄 Multi-wallet support

### Q2 2026

- Domain marketplace
- Advanced analytics
- Mobile app development

### Q3 2026

- Cross-chain bridges
- DeFi integration
- NFT marketplace

### Q4 2026

- DAO governance
- Layer 2 scaling
- Global expansion

## Security

For security concerns and vulnerability reporting, please refer to our [Security Policy](SECURITY.md).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

- 📧 Email: support@pulse.example.com
- 🌐 Website: https://pulse.example.com
- 💬 Discord: Join our community
- 🐦 Twitter: [@PulseWeb3](https://twitter.com/PulseWeb3)

## Acknowledgments

Built with modern Web3 technologies:

- React Team for React 19
- Tailwind Labs for Tailwind CSS
- wagmi & Viem for Ethereum integration
- Solana Labs for Solana integration
- shadcn for the amazing UI components

---

Made with ❤️ by the Pulse Team
