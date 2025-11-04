# Pulse Landing

A modern, full-stack web application for the Pulse cryptocurrency project, featuring a sleek landing page, presale interface, and comprehensive blockchain integration.

## 🚀 Overview

Pulse Landing is a decentralized finance (DeFi) platform built on blockchain technology. The project includes a responsive landing page with information about the Pulse token, a presale interface with wallet integration, and comprehensive documentation pages.

## ✨ Features

- **Modern Landing Page**: Eye-catching hero section with neon cyan-magenta gradient branding
- **Presale Platform**: Token presale interface with wallet connectivity
- **Multi-Chain Support**: 
  - Ethereum wallet integration (via Wagmi & Web3Modal)
  - Solana wallet integration
- **Comprehensive Pages**:
  - About page with mission statement and team information
  - Documentation hub with whitepaper access
  - Contact page
  - Component showcase
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Beautiful dark mode UI with gradient accents
- **Real-time Updates**: Built with tRPC for type-safe API communication

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 with custom animations
- **UI Components**: Radix UI primitives
- **Routing**: Wouter
- **State Management**: TanStack Query (React Query)
- **Web3**: 
  - Wagmi & Viem (Ethereum)
  - Solana Web3.js & Wallet Adapter (Solana)
  - Web3Modal

### Backend
- **Runtime**: Node.js with Express
- **API**: tRPC for type-safe APIs
- **Database**: MySQL with Drizzle ORM
- **Authentication**: JWT with OAuth support
- **Storage**: AWS S3 integration

### Development Tools
- **Package Manager**: pnpm
- **Type Checking**: TypeScript 5.9.3
- **Code Quality**: Prettier
- **Testing**: Vitest

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: v18.x or higher
- **pnpm**: v10.4.1 or higher (recommended package manager)
- **MySQL**: v8.x or higher (for database)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kfrye1212/pulse-landing.git
   cd pulse-landing
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file and configure your settings:
   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration. The example file contains template values - customize them for the Pulse project:
   ```env
   # Application
   VITE_APP_ID=proj_abc123def456
   VITE_APP_TITLE="Pulse Landing"  # Replace default template title
   VITE_APP_LOGO="/digital-pulse-logo.jpg"  # Use your actual logo path
   
   # OAuth & Authentication
   VITE_OAUTH_PORTAL_URL=https://vida.butterfly-effect.dev
   OAUTH_SERVER_URL=https://vidabiz.butterfly-effect.dev
   JWT_SECRET=your-jwt-secret-change-in-production
   
   # Database
   DATABASE_URL=mysql://user:password@localhost:3306/main
   
   # OpenAI (Optional)
   OPENAI_API_URL=
   OPENAI_API_KEY=your-openai-api-key
   
   # Server
   PORT=3000
   
   # Analytics (Optional)
   VITE_ANALYTICS_ENDPOINT=https://umami.dev.ops.butterfly-effect.dev
   VITE_ANALYTICS_WEBSITE_ID=analytics_proj_abc123def456
   ```

4. **Set up the database**
   
   Run database migrations:
   ```bash
   pnpm db:push
   ```

### Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Building for Production

1. **Build the application**
   ```bash
   pnpm build
   ```

2. **Start the production server**
   ```bash
   pnpm start
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the development server with hot reload |
| `pnpm build` | Build for production (client + server) |
| `pnpm start` | Start the production server |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |
| `pnpm test` | Run tests with Vitest |
| `pnpm db:push` | Generate and run database migrations |

## 📁 Project Structure

```
pulse-landing/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── contexts/      # React contexts
│   │   ├── lib/           # Utility libraries
│   │   └── main.tsx       # Application entry point
│   └── index.html         # HTML template
├── server/                # Backend application
│   ├── _core/             # Core server functionality
│   │   ├── trpc.ts       # tRPC setup
│   │   ├── context.ts    # Request context
│   │   ├── env.ts        # Environment config
│   │   └── index.ts      # Server entry point
│   ├── db.ts             # Database schema
│   ├── routers.ts        # API routers
│   └── storage.ts        # Storage utilities
├── shared/               # Shared code between client and server
├── drizzle/              # Database migrations
├── patches/              # Package patches
├── .env.example          # Environment variables template
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── vitest.config.ts      # Vitest configuration
```

## 🎨 Key Features

### Landing Page
- Hero section with animated gradients
- Features showcase (6 key features)
- Tokenomics breakdown
- Roadmap timeline
- Responsive navigation

### Presale Interface
- Wallet connection (Ethereum & Solana)
- Token contribution interface
- Real-time balance display
- Chain-specific interactions

### Documentation
- Comprehensive whitepaper
- Security policy documentation
- Developer documentation
- API reference

## 🔧 Configuration

### Wallet Integration

**Ethereum (via Wagmi)**:
- Configured in `client/src/hooks/useWallet.ts`
- Supports multiple wallet providers through Web3Modal
- Add your WalletConnect Project ID for production

**Solana**:
- Configured using Solana Wallet Adapter
- Supports popular Solana wallets
- Program ID: `AYM5JaJ7L4E3Uycb4dwf416aMMYtjg4jYLXe8veq3ypy`

### Customization

- **Branding**: Update logo and colors in `client/src/index.css`
- **Theme**: Tailwind CSS configured via Vite plugin (`@tailwindcss/vite`) and `client/src/index.css`
- **Fonts**: Custom fonts (Orbitron + Inter) configured in CSS

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

For development with watch mode:

```bash
pnpm test -- --watch
```

## 🤝 Contributing

We welcome contributions to the Pulse Landing project! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code:
- Follows the existing code style (run `pnpm format`)
- Passes TypeScript type checking (`pnpm check`)
- Includes appropriate tests

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Website**: [Coming Soon]
- **Documentation**: Available in the `/docs` page
- **Whitepaper**: Available for download in the app

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Blockchain integration via [Wagmi](https://wagmi.sh/) and [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/)

## 📞 Support

For support, please reach out through the Contact page in the application or open an issue on GitHub.

---

Built with ❤️ by the Pulse Team
