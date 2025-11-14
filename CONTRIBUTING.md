# Contributing to Pulse Landing

Thank you for your interest in contributing to Pulse Landing! This guide will help you get started.

## 🚀 Getting Started

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/pulse-landing.git
   cd pulse-landing
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```
   > ⚠️ **Important**: Always use `pnpm`, not npm or yarn

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your local configuration
   ```

4. **Database Setup**
   ```bash
   pnpm db:push
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```

## 📋 Before You Start

1. Check [`todo.md`](todo.md) for current priorities
2. Look for existing issues or create a new one
3. Discuss major changes in an issue first
4. Ensure your change aligns with project goals

## 🔄 Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/changes

### 2. Make Your Changes

Follow these principles:
- **Minimal changes**: Only modify what's necessary
- **Type safety**: Maintain TypeScript strictness
- **Consistency**: Follow existing code patterns
- **Testing**: Add tests for new functionality

### 3. Code Quality Checks

Before committing, run:

```bash
# Type checking
pnpm check

# Code formatting
pnpm format

# Run tests
pnpm test

# Build verification
pnpm build
```

### 4. Commit Your Changes

Use descriptive commit messages:

```bash
git add .
git commit -m "feat: add domain search functionality"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style/formatting
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📝 Coding Standards

### TypeScript

```typescript
// ✅ Good: Explicit types, descriptive names
interface DomainRegistration {
  name: string;
  tld: string;
  owner: string;
  expiresAt: Date;
}

function registerDomain(domain: DomainRegistration): Promise<string> {
  // Implementation
}

// ❌ Avoid: any types, unclear naming
function reg(d: any): any {
  // Implementation
}
```

### React Components

```typescript
// ✅ Good: Typed props, named export, clear structure
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {label}
    </button>
  );
}

// ❌ Avoid: Default exports, untyped props
export default function Btn(props) {
  return <button {...props} />;
}
```

### Styling

```typescript
// ✅ Good: Tailwind utilities, consistent theme
<div className="bg-gradient-to-r from-cyan-500 to-magenta-500 p-4 rounded-lg">
  <h1 className="font-orbitron text-2xl">Title</h1>
</div>

// ❌ Avoid: Inline styles, off-brand colors
<div style={{ background: 'blue', padding: '10px' }}>
  <h1>Title</h1>
</div>
```

### API Endpoints (tRPC)

```typescript
// ✅ Good: Input validation, typed output
export const domainRouter = router({
  search: publicProcedure
    .input(z.object({ query: z.string().min(1) }))
    .query(async ({ input }) => {
      return await searchDomains(input.query);
    }),
});

// ❌ Avoid: No validation, unclear types
export const domainRouter = router({
  search: publicProcedure.query(async ({ input }) => {
    return await search(input);
  }),
});
```

## 🧪 Testing Guidelines

### Writing Tests

```typescript
import { describe, it, expect } from 'vitest';

describe('Domain validation', () => {
  it('should validate domain names correctly', () => {
    expect(isValidDomain('example.pulse')).toBe(true);
    expect(isValidDomain('invalid')).toBe(false);
  });
  
  it('should reject invalid TLDs', () => {
    expect(isValidDomain('example.com')).toBe(false);
  });
});
```

### Test Coverage

- Test critical business logic
- Test edge cases and error handling
- Test Web3 integration points (mock wallets)
- Test form validation
- Test API endpoints

## 🎨 UI/UX Guidelines

### Design Principles

1. **Dark Theme**: Maintain consistent dark backgrounds
2. **Neon Accents**: Use cyan-magenta gradient for highlights
3. **Typography**: Orbitron for headings, Inter for body
4. **Spacing**: Use Tailwind spacing scale
5. **Accessibility**: Ensure keyboard navigation and screen reader support

### Component Patterns

- Use Radix UI primitives when possible
- Implement loading states
- Show error messages clearly
- Provide user feedback for actions
- Make components responsive

## 🔐 Security

### Important Security Rules

- ❌ Never commit secrets or API keys
- ❌ Never commit private keys or mnemonics
- ✅ Validate all user inputs
- ✅ Use parameterized queries (Drizzle ORM)
- ✅ Sanitize data before display
- ✅ Implement rate limiting
- ✅ Verify smart contract interactions

### Environment Variables

```bash
# ✅ Good: Use environment variables
const apiKey = process.env.API_KEY;

# ❌ Bad: Hardcoded secrets
const apiKey = "sk_live_abc123xyz";
```

## 🌐 Web3 Best Practices

### Wallet Integration

```typescript
// ✅ Good: Handle wallet connection states
const { publicKey, connected } = useWallet();

if (!connected) {
  return <ConnectWalletButton />;
}

// ❌ Avoid: Assuming wallet is connected
const publicKey = useWallet().publicKey!; // Unsafe
```

### Transaction Handling

```typescript
// ✅ Good: Proper error handling and user feedback
try {
  const signature = await registerDomain(domain);
  toast.success(`Domain registered! Tx: ${signature}`);
} catch (error) {
  console.error('Registration failed:', error);
  toast.error('Failed to register domain');
}
```

## 📖 Documentation

### Code Comments

```typescript
// ✅ Good: Explain why, not what
// Cache results to avoid repeated blockchain queries
const cachedDomains = useMemo(() => domains, [domains]);

// ❌ Avoid: Stating the obvious
// Create a variable
const x = 5;
```

### Update Documentation

When making changes:
- Update README.md if adding features
- Update API documentation
- Update inline code comments
- Update todo.md task status

## 🐛 Bug Reports

When reporting bugs:
1. Search existing issues first
2. Provide a clear title and description
3. Include steps to reproduce
4. Share error messages and logs
5. Specify your environment (OS, browser, Node version)

## ✨ Feature Requests

When requesting features:
1. Check todo.md and existing issues
2. Explain the use case
3. Describe expected behavior
4. Consider implementation impact

## 🔍 Code Review Process

Your PR will be reviewed for:
- Code quality and style
- Test coverage
- Documentation
- Security considerations
- Performance impact
- Breaking changes

## ❓ Questions?

- Check [`.github/copilot-instructions.md`](.github/copilot-instructions.md)
- Review existing code for patterns
- Ask in issues or discussions
- Reference official documentation

## 🎯 Priority Areas

Current focus areas (see [`todo.md`](todo.md)):
- Domain registration functionality
- Solana smart contract integration
- Wallet connection improvements
- UI/UX enhancements

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Pulse Landing! 🚀
