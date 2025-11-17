# GitHub Copilot Instructions for Pulse Landing

## Project Overview

Pulse Landing is a Web3 domain registration platform built with React, TypeScript, and modern web technologies. The project enables users to register custom TLD domains (.pulse, .verse, .cp, .pv) on the Solana blockchain.

## Technology Stack

### Frontend
- **Framework**: React 19 with Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI primitives
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Fonts**: Orbitron (headings) + Inter (body)

### Backend
- **Runtime**: Node.js with Express
- **API**: tRPC for type-safe API calls
- **Database**: MySQL with Drizzle ORM
- **Authentication**: JWT via Jose library

### Web3 Integration
- **Ethereum**: Wagmi + Viem + Web3Modal
- **Solana**: @solana/web3.js + Wallet Adapter
- **Smart Contract**: Solana TLD Program (Program ID: AYM5JaJ7L4E3Uycb4dwf416aMMYtjg4jYLXe8veq3ypy)

### Development Tools
- **Type Checking**: TypeScript 5.9
- **Testing**: Vitest
- **Linting**: Prettier
- **Package Manager**: pnpm (required)

## Project Structure

```
pulse-landing/
├── client/              # Frontend React application
│   ├── public/         # Static assets
│   └── src/            # React components and pages
├── server/             # Backend Express + tRPC server
│   └── _core/          # Core server logic
├── shared/             # Shared types and utilities
├── drizzle/            # Database migrations
├── patches/            # pnpm patches
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── vitest.config.ts    # Vitest configuration
├── tsconfig.json       # TypeScript configuration
└── drizzle.config.ts   # Database configuration
```

## Coding Standards

### TypeScript
- Use strict mode (enabled in tsconfig.json)
- Prefer interfaces over types for object shapes
- Use explicit return types for functions
- Avoid `any` type - use `unknown` if needed

### React
- Use functional components with hooks
- Prefer named exports over default exports
- Use TypeScript for prop types
- Follow hooks rules (no hooks in conditionals/loops)

### Styling
- Use Tailwind CSS utility classes
- Follow the cyan-magenta neon gradient theme
- Maintain dark theme consistency
- Use CSS variables for colors when appropriate

### Code Organization
- Keep components small and focused
- Extract reusable logic into custom hooks
- Group related functionality together
- Use barrel exports (index.ts) for clean imports

## Common Tasks

### Development Workflow

```bash
# Install dependencies (always use pnpm)
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start

# Type checking
pnpm check

# Format code
pnpm format

# Run tests
pnpm test

# Database migrations
pnpm db:push
```

### Creating New Features

1. **New Page/Route**
   - Add component in `client/src/pages/`
   - Register route in main routing configuration
   - Add navigation link if needed
   - Follow existing page structure patterns

2. **New API Endpoint**
   - Add procedure to tRPC router in `server/`
   - Define types in `shared/`
   - Use Zod for input validation
   - Follow RESTful naming conventions

3. **New Database Table**
   - Define schema in `drizzle/schema.ts`
   - Run `pnpm db:push` to migrate
   - Create corresponding types
   - Add queries/mutations as needed

4. **New UI Component**
   - Create in `client/src/components/`
   - Use Radix UI primitives when possible
   - Apply Tailwind styling
   - Export from index.ts barrel file

### Web3 Integration

- **Ethereum Wallet Connection**: Use wagmi hooks
- **Solana Wallet Connection**: Use @solana/wallet-adapter hooks
- **Smart Contract Calls**: Use web3.js for Solana interactions
- **Program ID**: AYM5JaJ7L4E3Uycb4dwf416aMMYtjg4jYLXe8veq3ypy

### Issue Handling

When working on issues:
1. Check `todo.md` for context and current tasks
2. Follow minimal change principle
3. Test changes locally before committing
4. Update `todo.md` to mark completed tasks
5. Ensure type safety and proper error handling
6. Follow existing patterns in the codebase

### Testing

- Write tests in `.test.ts` or `.spec.ts` files
- Use Vitest framework
- Test critical business logic
- Test Web3 integration points
- Mock external dependencies

### Common Patterns

**Fetching Data with tRPC:**
```typescript
const { data, isLoading } = trpc.myEndpoint.useQuery(input);
```

**Form Handling:**
```typescript
const form = useForm({
  resolver: zodResolver(schema),
});
```

**Wallet Integration (Solana):**
```typescript
const { publicKey, connected } = useWallet();
```

**Wallet Integration (Ethereum):**
```typescript
const { address, isConnected } = useAccount();
```

## Environment Variables

Create `.env` file based on `.env.example`:
- Database connection strings
- API keys
- Wallet connect project IDs
- AWS S3 credentials (if needed)

## Git Workflow

- Create feature branches from main
- Use descriptive commit messages
- Keep commits atomic and focused
- Reference issue numbers in commits
- Squash commits before merging

## Domain-Specific Knowledge

### TLD Registration Flow
1. User searches for domain availability
2. Connect Solana wallet
3. Submit registration transaction
4. Store domain ownership in smart contract
5. Update database with domain metadata

### Supported TLDs
- `.pulse` - Primary TLD
- `.verse` - Metaverse domains
- `.cp` - CyberPunk themed
- `.pv` - Pulse Verse

### Smart Contract Integration
- Use Solana web3.js for transactions
- Handle wallet signatures properly
- Implement proper error handling
- Show transaction status to users

## Performance Considerations

- Lazy load routes and heavy components
- Optimize images and assets
- Use React.memo for expensive renders
- Implement proper loading states
- Cache API responses with React Query

## Security Best Practices

- Never commit secrets or private keys
- Validate all user inputs
- Sanitize database queries (use Drizzle ORM)
- Implement rate limiting on APIs
- Use HTTPS in production
- Verify smart contract interactions

## Accessibility

- Use semantic HTML
- Add proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Test with screen readers

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## Helpful Commands

```bash
# Check for TypeScript errors
pnpm check

# Format all files
pnpm format

# Run tests in watch mode
pnpm test --watch

# Build and start production
pnpm build && pnpm start
```

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/)
- [Wagmi](https://wagmi.sh)
- [Drizzle ORM](https://orm.drizzle.team)

## Notes for AI Assistants

When helping with this project:
- Always use `pnpm` instead of npm or yarn
- Follow the existing code structure and patterns
- Maintain type safety - TypeScript is required
- Test Web3 functionality carefully
- Keep the neon cyan-magenta theme consistent
- Reference `todo.md` for current priorities
- Make minimal, focused changes
- Ensure changes work with both Ethereum and Solana wallets
