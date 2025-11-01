# Pulse Landing

A secure, modern web application built with React, TypeScript, and Express.

## 🔒 Security

This repository implements comprehensive security measures to protect code and ensure only authorized changes are made.

### Key Security Features:
- ✅ **Branch Protection**: Main branch requires pull request reviews and status checks
- ✅ **Code Ownership**: All changes require approval from repository owner
- ✅ **Automated Security Scanning**: CodeQL, secret scanning, dependency reviews
- ✅ **Continuous Integration**: Automated linting, testing, and building
- ✅ **Dependency Management**: Automated security updates via Dependabot
- ✅ **Signed Commits**: GPG signature verification required

**📖 Security Documentation:**
- **[Quick Start Guide](.github/QUICK_START.md)** - Essential steps to activate security
- **[Security Policy](SECURITY.md)** - Vulnerability reporting and best practices
- **[Full Setup Guide](.github/REPOSITORY_SECURITY_SETUP.md)** - Detailed configuration instructions

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm dev
```

### Development

```bash
# Run development server
pnpm dev

# Run tests
pnpm test

# Run type checking
pnpm check

# Format code
pnpm format

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🏗️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, Vite
- **Backend**: Express, tRPC
- **Database**: MySQL with Drizzle ORM
- **Web3**: Solana, Wagmi, Web3Modal
- **UI Components**: Radix UI, shadcn/ui

## 📁 Project Structure

```
pulse-landing/
├── .github/              # GitHub configuration and workflows
│   ├── workflows/        # CI/CD workflows
│   ├── CODEOWNERS       # Code ownership rules
│   ├── QUICK_START.md   # Security setup guide
│   └── ...
├── client/              # Frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and helpers
│   └── index.html
├── server/              # Backend application
│   ├── _core/           # Core server functionality
│   └── routers.ts       # tRPC routers
├── shared/              # Shared types and utilities
├── drizzle/             # Database schema and migrations
└── SECURITY.md          # Security policy
```

## 🤝 Contributing

We welcome contributions! However, due to security requirements:

1. **All changes require pull requests** - Direct pushes to `main` are blocked
2. **Code owner approval required** - PRs must be approved by `@kfrye1212`
3. **Status checks must pass** - All CI checks, tests, and security scans
4. **Signed commits recommended** - GPG signatures verify author identity

### Contribution Workflow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add amazing feature'`)
5. Push to your fork (`git push origin feature/amazing-feature`)
6. Open a Pull Request
7. Address review feedback
8. Wait for approval and merge

### Pull Request Requirements:
- ✅ All tests passing
- ✅ No linting errors
- ✅ Security scans clean
- ✅ Documentation updated (if needed)
- ✅ Code owner approval

See [PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md) for the full checklist.

## 🔐 Security Reporting

If you discover a security vulnerability:

1. **DO NOT** open a public issue
2. Review our [Security Policy](SECURITY.md)
3. Use GitHub's private security advisory feature
4. Or contact the repository owner directly

We take security seriously and will respond promptly to valid reports.

## 📜 License

MIT License - see LICENSE file for details

## 👥 Maintainers

- **@kfrye1212** - Repository Owner & Maintainer

## 📞 Support

For questions or issues:
- Open an issue (for non-security bugs/features)
- Review existing documentation
- Contact repository owner for security concerns

---

**Note:** Before making changes, ensure you understand the security requirements outlined in `.github/QUICK_START.md` and `SECURITY.md`.
