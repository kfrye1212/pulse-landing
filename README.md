# PULSE Landing Page

> Next Generation Web3 Ecosystem Landing Page

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)

Visit the live site: [chainpulse.info](http://chainpulse.info/)

## Overview

PULSE is a Web3 landing page for a next-generation blockchain ecosystem featuring domain registration, tokenomics, and presale functionality. Built with modern web technologies and integrated with both Ethereum and Solana blockchains.

## Features

- 🎨 Modern UI with neon cyan-magenta gradient branding
- 🌙 Dark theme optimized design
- 🔐 Multi-chain wallet integration (Ethereum + Solana)
- 💎 Token presale page
- 📄 Comprehensive documentation and whitepaper
- 🛡️ Security-focused architecture
- ⚡ Fast and responsive

## Tech Stack

- **Frontend**: React 19, TypeScript 5.9, Vite 7
- **Styling**: Tailwind CSS 4
- **Backend**: Node.js, Express, tRPC
- **Database**: MySQL with Drizzle ORM
- **Web3**: wagmi (Ethereum), @solana/web3.js (Solana)
- **UI Components**: Radix UI
- **Fonts**: Orbitron (headings), Inter (body)

## Quick Start

### Prerequisites

- Node.js 18+ and pnpm
- MySQL database (for full stack features)

### Installation

```bash
# Clone the repository
git clone https://github.com/kfrye1212/pulse-landing.git
cd pulse-landing

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
pnpm db:push

# Start development server
pnpm dev
```

Visit `http://localhost:5173` to see the application.

### Build for Production

```bash
# Build the application
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
pulse-landing/
├── client/          # React frontend
│   ├── src/        # Source files
│   ├── public/     # Static assets
│   └── index.html  # Entry HTML
├── server/         # Express backend
│   ├── _core/      # Core server setup
│   └── routes/     # API routes
├── shared/         # Shared types and utilities
├── drizzle/        # Database migrations
└── .github/        # GitHub workflows and templates
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests
- `pnpm db:push` - Push database schema changes
- `pnpm db:studio` - Open Drizzle Studio

## Development

### Pull Requests

See [Pull Request Guidelines](.github/PULL_REQUEST_GUIDELINES.md) for detailed information on how to create and review pull requests.

### Code Style

- Use TypeScript for all new code
- Follow existing code formatting (Prettier configured)
- Write meaningful commit messages
- Keep PRs focused and small

## Roadmap

- [x] Initial landing page design
- [x] Wallet integration (Ethereum + Solana)
- [x] Presale page
- [x] Documentation pages
- [ ] Domain registration functionality (.pulse, .verse, .cp, .pv)
- [ ] "My Domains" dashboard
- [ ] Domain marketplace
- [ ] Smart contract integration

See [todo.md](todo.md) for the complete task list.

## Security

Security is a top priority. If you discover a security vulnerability, please email the maintainers directly. See [SECURITY.md](SECURITY.md) for more details.

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting a PR.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Project Owner: [@kfrye1212](https://github.com/kfrye1212)
- Website: [chainpulse.info](http://chainpulse.info/)

## Acknowledgments

- Built with GitHub Copilot
- UI components from Radix UI
- Icons from Lucide React
