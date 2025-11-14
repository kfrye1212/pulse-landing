# GitHub Copilot Quick Reference

This document provides quick reference prompts and patterns for using GitHub Copilot effectively with the Pulse Landing repository.

## 🎯 Common Tasks for Copilot

### Creating New Components

**Prompt Examples:**
```
Create a React component for domain search with TypeScript and Tailwind CSS using the cyan-magenta gradient theme

Add a new Radix UI dialog component for confirming domain registration with proper TypeScript types

Create a loading spinner component using Framer Motion with the neon theme
```

### API Development

**Prompt Examples:**
```
Create a tRPC endpoint for searching available domains with Zod validation

Add a tRPC mutation for domain registration that accepts domain name, TLD, and wallet address

Create a database query using Drizzle ORM to fetch user's registered domains
```

### Web3 Integration

**Prompt Examples:**
```
Add Solana wallet connection logic using @solana/wallet-adapter-react

Create a function to call the domain registration smart contract on Solana

Add error handling for wallet connection failures with user-friendly messages
```

### Styling and UI

**Prompt Examples:**
```
Style this component with Tailwind using the dark theme and cyan-magenta gradient accents

Create a responsive navigation bar with mobile menu using Radix UI and Tailwind

Add hover effects and transitions using Tailwind classes
```

### Testing

**Prompt Examples:**
```
Write Vitest tests for the domain validation function

Create mock tests for the Solana wallet integration

Add integration tests for the domain search API endpoint
```

## 📋 Copilot Commands to Try

### In the Editor

- `// Create a function to validate domain names for .pulse, .verse, .cp, .pv TLDs`
- `// Add form validation using React Hook Form and Zod`
- `// Generate TypeScript interface for domain registration data`

### In Chat

- "How do I integrate this component with the Solana smart contract?"
- "Show me how to add error handling for this API endpoint"
- "Create tests for this utility function"
- "Explain this Web3 integration code"

## 🔧 Code Generation Patterns

### Component Pattern
```typescript
// @copilot Create a domain card component that displays:
// - Domain name with TLD
// - Owner wallet address (truncated)
// - Expiration date
// - Renew button
// Use TypeScript, Tailwind with dark theme, and Radix UI button
```

### API Pattern
```typescript
// @copilot Create a tRPC router for domain operations with:
// - searchAvailable(query: string) -> Domain[]
// - register(name: string, tld: string) -> TransactionSignature
// - getUserDomains(walletAddress: string) -> Domain[]
// Use Zod for validation
```

### Hook Pattern
```typescript
// @copilot Create a custom React hook useDomainSearch that:
// - Accepts a search query
// - Debounces the input
// - Uses tRPC to search domains
// - Returns results, loading state, and error
```

## 🎨 Styling Prompts

### Theme Application
```
Apply the neon gradient theme (cyan to magenta) to this button
Create a glassmorphism effect for this card using Tailwind
Add a subtle glow effect to this input field
```

### Responsive Design
```
Make this component responsive with mobile-first approach
Add tablet and desktop breakpoints using Tailwind
Create a responsive grid layout for domain cards
```

## 🧪 Testing Prompts

```
Generate unit tests for this validation function using Vitest
Create mock data for testing domain registration
Write integration tests for the wallet connection flow
Add test coverage for error cases
```

## 🔍 Code Review Prompts

```
Review this code for security vulnerabilities
Check this component for accessibility issues
Suggest performance optimizations for this component
Identify potential TypeScript type issues
```

## 💡 Refactoring Prompts

```
Refactor this component to use a custom hook
Extract this logic into a reusable utility function
Simplify this nested ternary into a cleaner pattern
Convert this callback to use async/await
```

## 🌐 Web3 Specific Prompts

```
Add Solana transaction signing with error handling
Create a function to estimate transaction fees
Add wallet disconnection handling
Implement transaction status polling
```

## 📚 Documentation Prompts

```
Generate JSDoc comments for this function
Create a README section for this feature
Add inline comments explaining this complex logic
Document the API endpoints in this router
```

## ⚡ Quick Fixes

```
Fix TypeScript errors in this file
Add proper error handling to this async function
Update this component to follow React best practices
Optimize this database query
```

## 🎯 Context-Aware Prompts

When working with specific files, Copilot understands the context:

- **In `client/src/pages/`**: "Create a new page component"
- **In `server/`**: "Add a new tRPC endpoint"
- **In `drizzle/`**: "Define a new database table"
- **In `shared/`**: "Create shared TypeScript types"

## 📖 Best Practices

1. **Be Specific**: Include technology stack in prompts (TypeScript, React, Tailwind)
2. **Reference Theme**: Mention "dark theme" and "cyan-magenta gradient"
3. **Type Safety**: Request TypeScript types and Zod validation
4. **Follow Patterns**: Reference existing code patterns in the repo
5. **Test Coverage**: Ask for tests along with implementation
6. **Documentation**: Request comments for complex logic

## 🚫 What to Avoid

- Don't ask for default exports (use named exports)
- Don't request inline styles (use Tailwind)
- Don't skip TypeScript types
- Don't ignore error handling
- Don't forget accessibility
- Don't hardcode secrets

## 🔗 Related Resources

- Main instructions: `.github/copilot-instructions.md`
- Contributing guide: `CONTRIBUTING.md`
- Current tasks: `todo.md`
- Project setup: `README.md`

---

**Pro Tip**: Copilot learns from your codebase. The more you follow existing patterns, the better its suggestions become!
