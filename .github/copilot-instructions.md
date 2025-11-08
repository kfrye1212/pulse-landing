# Copilot Instructions for Pulse Landing

## Project Overview

This is a landing page for Pulse, a blockchain domain registration platform supporting both Ethereum and Solana wallets. The project is built with React, Vite, TypeScript, and includes Web3 integrations.

## Technology Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4
- **Backend**: Express.js, tRPC
- **Database**: MySQL with Drizzle ORM
- **Web3**: wagmi (Ethereum), Solana Wallet Adapter
- **Testing**: Vitest (server-side only; client-side testing not yet configured)
- **Package Manager**: pnpm (version pinned via packageManager field in package.json)

## Build & Development

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm run dev
```

### Building
```bash
pnpm run build
```

### Type Checking
```bash
pnpm run check
```

### Testing
```bash
pnpm run test
```

### Formatting
```bash
pnpm run format
```

## Code Style & Conventions

### General
- Use TypeScript for all new files
- Follow strict TypeScript rules (strict mode is enabled)
- Use ES modules (type: "module" in package.json)
- Format code with Prettier before committing
- Always run type checking before submitting changes

### Naming Conventions
- Use camelCase for variables and functions
- Use PascalCase for React components and TypeScript types/interfaces
- Use kebab-case for file names
- Use UPPER_CASE for constants

### React
- Use functional components with hooks
- Use React 19 features appropriately
- Keep components focused and single-responsibility
- Use TypeScript for prop types

### Path Aliases
- Use `@/` for client source files (`./client/src/*`)
- Use `@shared/` for shared code (`./shared/*`)

## Testing Guidelines

- Test files should be placed alongside the code they test with `.test.ts` or `.spec.ts` extension
- Tests are currently configured to run from `server/**/*.test.ts` and `server/**/*.spec.ts`
- Client-side testing infrastructure is not yet set up
- Use Vitest for all tests
- Always run tests before submitting changes

## Database

- Use Drizzle ORM for all database operations
- Run `pnpm run db:push` to generate and run migrations
- Database schema is defined in server-side code

## Web3 Integration

- Ethereum wallet integration uses wagmi
- Solana wallet integration uses Solana Wallet Adapter
- Handle wallet connection errors gracefully
- Always test wallet connections with real wallets when possible

## Security

- Never commit secrets or API keys
- Use environment variables for sensitive configuration
- Follow .env.example for required environment variables
- Validate all user inputs, especially in Web3 interactions

## Pull Request Guidelines

- Keep changes focused and minimal
- Update documentation if changing functionality
- Ensure all checks pass (type checking, tests, formatting)
- Test wallet integrations manually when making Web3 changes
- Reference related issues in PR description
