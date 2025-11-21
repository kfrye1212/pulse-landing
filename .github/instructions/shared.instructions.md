---
description: "Instructions for shared code between client and server"
applies_to: "shared/**"
---

# Shared Code Instructions

## Purpose

The `shared/` directory contains code that is used by both the client and server. This includes:

- Type definitions
- Validation schemas
- Utility functions
- Constants
- tRPC type definitions

## Guidelines

### Code Compatibility
- Code in this directory must be compatible with both browser and Node.js environments
- Don't use Node.js-specific APIs (fs, path, etc.)
- Don't use browser-specific APIs (window, document, etc.)
- Keep dependencies minimal and compatible with both environments

### Type Definitions
- Use TypeScript for all type definitions
- Export types and interfaces clearly
- Use Zod for runtime validation schemas
- Keep types focused and well-documented

### Validation Schemas
- Use Zod for all validation schemas
- Share validation logic between client and server
- Export schemas as const for type inference
- Document validation rules clearly

### Utility Functions
- Keep utilities pure and side-effect free
- Test all utility functions
- Document function parameters and return types
- Avoid external dependencies when possible

### Constants
- Define shared constants here
- Use TypeScript const assertions for type safety
- Group related constants together
- Document the purpose of constants

## What NOT to Include

- Server-only logic (database queries, file system operations)
- Client-only logic (DOM manipulation, browser APIs)
- Large dependencies that bloat the client bundle
- Environment-specific configuration

## Naming Conventions

- Use descriptive names for exports
- Group related exports in files
- Use index files for clean imports
- Prefix type files with `types.` if needed

## Testing

- Test shared utilities on both client and server contexts
- Ensure validation schemas work as expected
- Verify type definitions are correct
- Test edge cases and error conditions
