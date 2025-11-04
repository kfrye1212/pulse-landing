---
description: "Instructions for client-side code"
applies_to: "client/**"
---

# Client-Side Instructions

## Directory Structure

- `client/src/` - React application source code
- `client/public/` - Static assets
- `client/index.html` - HTML entry point

## React Guidelines

### Component Structure
- Keep components in appropriate directories under `client/src/`
- Use functional components with hooks
- Extract reusable logic into custom hooks
- Keep component files focused and under 300 lines when possible

### State Management
- Use React Query (@tanstack/react-query) for server state
- Use React hooks (useState, useReducer) for local state
- Use tRPC client for API calls

### Styling
- Use Tailwind CSS for all styling
- Follow the existing neon cyan-magenta gradient branding
- Use the configured theme (dark mode with custom colors)
- Leverage shadcn/ui components from Radix UI
- Keep responsive design in mind (mobile-first approach)

### Fonts
- Primary: Orbitron (headings and branding)
- Secondary: Inter (body text)

## Web3 Integration

### Ethereum
- Use wagmi hooks for wallet connections
- Use Web3Modal for wallet selection
- Handle connection errors gracefully
- Test with MetaMask and other popular wallets

### Solana
- Use Solana Wallet Adapter React hooks
- Support popular Solana wallets (Phantom, Solflare, etc.)
- Handle connection states properly

## Performance

- Lazy load routes and heavy components
- Optimize images and assets
- Use React.memo for expensive components
- Avoid unnecessary re-renders

## Routing

- Use wouter for client-side routing
- Keep routes defined in a central location
- Use route parameters appropriately

## Accessibility

- Ensure keyboard navigation works
- Add appropriate ARIA labels
- Use semantic HTML
- Test with screen readers when adding new UI

## Common Issues to Avoid

- Don't import server-side code in client
- Don't expose sensitive data in client code
- Don't use Node.js APIs in client code
- Always handle loading and error states in components
