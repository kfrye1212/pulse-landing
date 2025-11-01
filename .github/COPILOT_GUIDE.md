# How to Use GitHub Copilot with Pulse Landing

This guide shows you how to use the Copilot configuration in this repository to maximize your productivity.

## ✅ Setup Complete

This repository is now configured with:

✓ **Copilot Instructions** (`.github/copilot-instructions.md`) - Complete context about the project  
✓ **Quick Reference** (`.github/COPILOT_QUICKREF.md`) - Common prompts and patterns  
✓ **Issue Templates** - Structured templates for bugs, features, and tasks  
✓ **PR Template** - Comprehensive pull request checklist  
✓ **Documentation** - README and CONTRIBUTING guides  

## 🚀 Getting Started

### 1. Enable GitHub Copilot

Make sure you have GitHub Copilot enabled in your IDE:

**VS Code:**
1. Install the "GitHub Copilot" extension
2. Sign in with your GitHub account
3. Copilot will automatically read `.github/copilot-instructions.md`

**GitHub Codespaces:**
1. Copilot is pre-installed
2. Open this repository in Codespaces
3. Copilot will automatically understand the context

**JetBrains IDEs:**
1. Install the GitHub Copilot plugin
2. Sign in with your GitHub account
3. Copilot will read the workspace configuration

### 2. Copilot Will Now Understand:

✅ **Project Structure** - How files are organized  
✅ **Tech Stack** - React, TypeScript, Tailwind, tRPC, Solana, etc.  
✅ **Coding Standards** - TypeScript patterns, naming conventions  
✅ **Common Tasks** - Creating components, API endpoints, tests  
✅ **Web3 Integration** - Solana and Ethereum wallet patterns  
✅ **Theme & Styling** - Dark theme with cyan-magenta gradients  

## 💡 How to Use Copilot

### In the Editor (Inline Suggestions)

Copilot will provide smart suggestions as you type:

```typescript
// Just start typing and Copilot will suggest based on context
const searchDomains = async (query: string) => {
  // Copilot knows this is a domain search function
  // and will suggest Solana-specific code
```

### Using Comments as Prompts

```typescript
// Create a domain card component with dark theme and neon gradient
// Copilot will generate the entire component

// Add Solana wallet connection with error handling
// Copilot will generate wallet integration code
```

### In Copilot Chat

**Ask questions:**
- "How do I add a new page to this app?"
- "Show me how to create a tRPC endpoint"
- "How do I test Solana wallet integration?"

**Request code:**
- "Create a domain search component with TypeScript"
- "Add validation for domain names using Zod"
- "Generate tests for the registration function"

**Get explanations:**
- "Explain how the wallet connection works"
- "What does this tRPC router do?"
- "How is the database configured?"

### GitHub Copilot Workspace (Coming Soon)

When GitHub Copilot Workspace is available:

1. Open an issue or create a task
2. Click "Open in Copilot Workspace"
3. Copilot will understand the full context and suggest implementation
4. Review and accept the changes

## 📝 Creating Issues and Tasks

### Using Issue Templates

When creating a new issue:

1. Go to **Issues** → **New Issue**
2. Choose a template:
   - **🐛 Bug Report** - For bugs and errors
   - **✨ Feature Request** - For new features
   - **📝 Task** - For development tasks

3. Fill in the template
4. Copilot can help implement based on the issue description

### Example: Creating a Task

```markdown
Title: [TASK] Add domain registration form

Description: Create a form for domain registration with:
- Domain name input
- TLD selector (.pulse, .verse, .cp, .pv)
- Wallet connection check
- Price display
- Registration button

Tech Stack:
- React Hook Form
- Zod validation
- Tailwind styling
- Solana wallet integration
```

When you work on this task, Copilot will understand the requirements from the issue.

## 🤖 Example Copilot Interactions

### Creating a New Component

**You type in chat:**
```
Create a DomainCard component that shows:
- Domain name with TLD badge
- Owner address (truncated)
- Expiration date with countdown
- Renew button
Use TypeScript, Tailwind dark theme, and Radix UI
```

**Copilot generates:**
```typescript
interface DomainCardProps {
  domain: string;
  tld: string;
  owner: string;
  expiresAt: Date;
  onRenew: () => void;
}

export function DomainCard({ domain, tld, owner, expiresAt, onRenew }: DomainCardProps) {
  // Copilot generates a fully styled component with all requirements
}
```

### Adding an API Endpoint

**You type:**
```typescript
// @copilot Create a tRPC endpoint to check domain availability
```

**Copilot generates:**
```typescript
export const domainRouter = router({
  checkAvailability: publicProcedure
    .input(z.object({
      name: z.string().min(1).max(63),
      tld: z.enum(['pulse', 'verse', 'cp', 'pv'])
    }))
    .query(async ({ input }) => {
      // Implementation with proper types and error handling
    })
});
```

### Writing Tests

**You ask in chat:**
```
Write Vitest tests for domain validation
```

**Copilot generates:**
```typescript
describe('Domain Validation', () => {
  it('should validate correct domain names', () => {
    expect(isValidDomain('example', 'pulse')).toBe(true);
  });
  
  it('should reject invalid characters', () => {
    expect(isValidDomain('exam!ple', 'pulse')).toBe(false);
  });
});
```

## 🎯 Best Practices

### 1. Be Specific in Prompts

❌ "Create a button"  
✅ "Create a primary button component using Radix UI with Tailwind styling and the cyan-magenta gradient on hover"

### 2. Reference the Tech Stack

❌ "Add wallet connection"  
✅ "Add Solana wallet connection using @solana/wallet-adapter-react with Phantom and Solflare support"

### 3. Request Type Safety

❌ "Create a form"  
✅ "Create a form using React Hook Form with Zod validation and TypeScript types"

### 4. Follow Project Patterns

Look at existing code first, then ask Copilot to follow similar patterns:
```
Create a new page following the pattern used in client/src/pages/Home.tsx
```

## 📚 Quick Reference

For common prompts and patterns, see:
- [`.github/COPILOT_QUICKREF.md`](.github/COPILOT_QUICKREF.md) - Copilot prompt examples
- [`.github/copilot-instructions.md`](.github/copilot-instructions.md) - Full project context
- [`CONTRIBUTING.md`](../CONTRIBUTING.md) - Contribution guidelines
- [`README.md`](../README.md) - Project overview

## 🔧 Troubleshooting

### Copilot Not Providing Good Suggestions?

1. **Check the file location** - Make sure you're in the right directory
2. **Add context in comments** - Describe what you're trying to do
3. **Reference existing code** - Point Copilot to similar code
4. **Use the chat** - Ask questions to get better suggestions

### Copilot Suggesting Wrong Patterns?

1. **Be more specific** - Mention TypeScript, React, Tailwind explicitly
2. **Reference the style guide** - "Following the patterns in this repo..."
3. **Check the instructions** - Review `.github/copilot-instructions.md`

### Need Help?

1. Check [`todo.md`](../todo.md) for current priorities
2. Review [`CONTRIBUTING.md`](../CONTRIBUTING.md) for guidelines
3. Look at existing code for patterns
4. Ask in issues or discussions

## 🎓 Learning Resources

### Understanding Copilot

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Copilot Best Practices](https://github.blog/developer-skills/github/how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/)

### Project-Specific

- **React**: Check `client/src/pages/` for page examples
- **tRPC**: Check `server/` for API patterns
- **Components**: Check `client/src/components/` for UI patterns
- **Styling**: Check existing components for Tailwind usage
- **Web3**: Check wallet integration in presale page

## ✨ Advanced Features

### Copilot Chat Commands

In VS Code, you can use:

- `/explain` - Explain code
- `/fix` - Suggest fixes
- `/tests` - Generate tests
- `/doc` - Generate documentation

### Workspace Context

Copilot automatically knows about:
- All files in the repository
- The project structure
- Dependencies in package.json
- TypeScript configuration
- The `.github/copilot-instructions.md` file

### Multi-File Edits

When using Copilot Chat, you can:
1. Ask it to make changes across multiple files
2. Review the suggested changes
3. Accept or reject each change
4. Commit all changes at once

## 🚀 Next Steps

1. **Start coding** - Copilot is ready to help!
2. **Check `todo.md`** - See current priorities
3. **Create issues** - Use the templates provided
4. **Open PRs** - Use the PR template
5. **Ask Copilot** - When in doubt, ask!

---

**Happy Coding with Copilot! 🤖✨**

Need help? Check the documentation or create an issue using the templates!
