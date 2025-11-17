# Contributing to Pulse Landing

Thank you for your interest in contributing to Pulse! We welcome contributions from the community and are grateful for any help you can provide.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with the following information:

- Clear, descriptive title
- Detailed description of the issue
- Steps to reproduce the problem
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (browser, OS, Node version)

### Suggesting Enhancements

We welcome feature suggestions! Please create an issue with:

- Clear description of the feature
- Use cases and benefits
- Any relevant examples or mockups
- Potential implementation approach (optional)

### Pull Requests

1. **Fork the Repository**

   ```bash
   git clone https://github.com/kfrye1212/pulse-landing.git
   cd pulse-landing
   ```

2. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Install Dependencies**

   ```bash
   pnpm install
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation as needed

5. **Test Your Changes**

   ```bash
   # Type checking
   pnpm check

   # Format code
   pnpm format

   # Build
   pnpm build

   # Run tests (when available)
   pnpm test
   ```

6. **Commit Your Changes**
   - Write clear, descriptive commit messages
   - Use conventional commits format:
     - `feat:` for new features
     - `fix:` for bug fixes
     - `docs:` for documentation changes
     - `style:` for formatting changes
     - `refactor:` for code refactoring
     - `test:` for adding tests
     - `chore:` for maintenance tasks

   Example:

   ```bash
   git commit -m "feat: add domain search functionality"
   ```

7. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template with:
     - Description of changes
     - Related issue numbers
     - Testing performed
     - Screenshots (if UI changes)

## Development Guidelines

### Code Style

- **TypeScript**: Use TypeScript for all new code
- **Formatting**: Run `pnpm format` before committing
- **Naming Conventions**:
  - Components: PascalCase (`MyComponent.tsx`)
  - Files: kebab-case or PascalCase
  - Variables: camelCase
  - Constants: UPPER_SNAKE_CASE
  - Types/Interfaces: PascalCase

### Component Guidelines

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use TypeScript interfaces for props
- Document complex components with JSDoc comments

Example:

```typescript
interface MyComponentProps {
  title: string;
  onAction: () => void;
}

/**
 * MyComponent displays a title and handles user actions
 */
export function MyComponent({ title, onAction }: MyComponentProps) {
  // Implementation
}
```

### File Organization

```
src/
├── components/      # Reusable components
│   └── ui/         # UI library components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── contexts/       # React contexts
├── lib/            # Utility functions
└── _core/          # Core functionality
```

### State Management

- Use React hooks for local state
- Use Context API for global state
- Consider tRPC for server state management

### Styling

- Use Tailwind CSS utility classes
- Use the existing theme configuration
- Follow the design system (neon cyan-magenta gradient theme)
- Ensure responsive design for all viewports

### Testing

- Write tests for new features (when test infrastructure is available)
- Test edge cases and error conditions
- Ensure all tests pass before submitting PR

## Project Setup

### Prerequisites

- Node.js 18.x or higher
- pnpm 10.x or higher
- MySQL 8.x (for full stack development)

### Environment Setup

1. Copy `.env.example` to `.env`
2. Configure your environment variables
3. Set up the database with `pnpm db:push`

### Common Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm check        # Type checking
pnpm format       # Format code
pnpm test         # Run tests
```

## Areas for Contribution

We especially welcome contributions in these areas:

### High Priority

- Domain registration system implementation
- Domain marketplace features
- Test coverage improvements
- Performance optimizations
- Accessibility improvements

### Medium Priority

- Documentation improvements
- Code refactoring and cleanup
- UI/UX enhancements
- Mobile responsiveness
- SEO optimization

### Low Priority

- Additional wallet integrations
- Analytics integration
- Social media features
- Internationalization (i18n)

## Questions?

If you have questions about contributing:

- Open an issue for discussion
- Join our Discord community
- Contact the maintainers

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to Pulse! 🚀
