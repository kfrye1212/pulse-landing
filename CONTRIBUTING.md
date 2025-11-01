# Contributing to Pulse Landing

Thank you for considering contributing to Pulse Landing! We welcome contributions from the community.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm (v10.4.1 or higher)

### Installation

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/pulse-landing.git
   cd pulse-landing
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Copy the environment variables:
   ```bash
   cp .env.example .env
   ```

## Development Workflow

### Running the Development Server
```bash
pnpm dev
```

### Building the Project
```bash
pnpm build
```

### Running Tests
```bash
pnpm test
```

### Code Quality
```bash
# Type checking
pnpm check

# Format code
pnpm format
```

## Making Changes

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   or
   ```bash
   git checkout -b fix/your-bug-fix
   ```

2. Make your changes and commit them with clear, descriptive messages:
   ```bash
   git commit -m "Add feature: description of your change"
   ```

3. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request against the `main` branch

## Pull Request Guidelines

- Fill out the pull request template completely
- Ensure all tests pass
- Follow the existing code style
- Keep changes focused and atomic
- Write clear commit messages
- Update documentation as needed
- Add tests for new features

## Code Style

This project uses:
- **TypeScript** for type safety
- **Prettier** for code formatting
- **React** for UI components
- **Tailwind CSS** for styling

Please run `pnpm format` before committing to ensure consistent formatting.

## Project Structure

```
pulse-landing/
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared code between client and server
├── drizzle/         # Database migrations
└── patches/         # Package patches
```

## Database Changes

If you make changes to the database schema:
```bash
pnpm db:push
```

## Need Help?

- Open an issue for bug reports or feature requests
- Check existing issues before creating a new one
- Be respectful and constructive in all interactions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
