# Pulse Landing 🌐

A Web3 domain registration platform for custom TLD domains on the Solana blockchain.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (required)
- MySQL database

### Installation

```bash
# Clone the repository
git clone https://github.com/kfrye1212/pulse-landing.git
cd pulse-landing

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
pnpm db:push

# Start development server
pnpm dev
```

The application will be available at `http://localhost:5173` (or the port shown in terminal).

## 📦 Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **Backend**: Express, tRPC, Drizzle ORM
- **Web3**: Solana Web3.js, Wagmi, Web3Modal
- **Database**: MySQL
- **Testing**: Vitest
- **Package Manager**: pnpm

## 🎨 Features

- ✅ Modern Web3 landing page
- ✅ Multi-wallet support (Ethereum + Solana)
- ✅ TLD domain registration (.pulse, .verse, .cp, .pv)
- ✅ Type-safe API with tRPC
- ✅ Responsive dark theme design
- ✅ Presale functionality

## 📝 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Run production server
pnpm check        # TypeScript type checking
pnpm format       # Format code with Prettier
pnpm test         # Run tests
pnpm db:push      # Run database migrations
```

## 🏗️ Project Structure

```
pulse-landing/
├── client/              # Frontend React app
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   └── lib/        # Utilities
│   └── public/         # Static assets
├── server/             # Backend Express + tRPC
│   └── _core/          # Server core logic
├── shared/             # Shared types
├── drizzle/            # Database schema & migrations
└── patches/            # Package patches
```

## 🔧 Development

### Adding a New Page

1. Create component in `client/src/pages/`
2. Add route to router configuration
3. Update navigation if needed

### Creating an API Endpoint

1. Define procedure in tRPC router (`server/`)
2. Add types in `shared/`
3. Use Zod for validation

### Database Changes

1. Update schema in `drizzle/schema.ts`
2. Run `pnpm db:push`

## 🌐 Web3 Integration

### Solana Contract
- **Program ID**: `AYM5JaJ7L4E3Uycb4dwf416aMMYtjg4jYLXe8veq3ypy`
- **Network**: Devnet (for testing)

### Supported TLDs
- `.pulse` - Primary TLD
- `.verse` - Metaverse domains
- `.cp` - CyberPunk themed
- `.pv` - Pulse Verse

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch
```

## 🎨 Branding

- **Theme**: Neon cyan-magenta gradient
- **Fonts**: Orbitron (headings), Inter (body)
- **Style**: Dark theme, futuristic Web3 aesthetic

## 📚 Documentation

For detailed documentation and Copilot integration instructions, see [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

## 🔐 Environment Variables

Required environment variables (see `.env.example`):

- Database connection
- AWS S3 credentials (optional)
- Web3Modal Project ID
- API keys

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and type checking
4. Format code with Prettier
5. Submit a pull request

## 📋 Current Tasks

See [`todo.md`](todo.md) for the current task list and roadmap.

## 📄 License

MIT

## 🔗 Links

- [GitHub Repository](https://github.com/kfrye1212/pulse-landing)
- [Solana Documentation](https://docs.solana.com)
- [React Documentation](https://react.dev)

---

Built with ❤️ for the Web3 community
