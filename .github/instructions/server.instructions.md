---
description: "Instructions for server-side code"
applies_to: "server/**"
---

# Server-Side Instructions

## Directory Structure

- `server/_core/` - Core server setup and configuration
- `server/routers.ts` - tRPC router definitions
- `server/db.ts` - Database configuration
- `server/storage.ts` - File storage configuration (AWS S3)

## Express Server

### General Guidelines
- Use Express.js for HTTP server
- Keep middleware focused and composable
- Handle errors properly with error middleware
- Use async/await for asynchronous operations

### API Routes
- Use tRPC for API endpoints
- Define routers in `server/routers.ts`
- Use Zod for input validation
- Keep procedures focused and single-purpose

## Database

### Drizzle ORM
- Define schema using Drizzle ORM
- Use migrations for schema changes
- Use transactions for multi-step operations
- Always validate data before database operations

### Queries
- Use prepared statements to prevent SQL injection
- Optimize queries for performance
- Use appropriate indexes
- Handle database errors gracefully

## File Storage

### AWS S3
- Use @aws-sdk/client-s3 for S3 operations
- Generate presigned URLs for secure file uploads
- Validate file types and sizes
- Handle upload errors appropriately

## Authentication & Security

### General
- Validate all inputs with Zod schemas
- Use environment variables for secrets
- Implement rate limiting where appropriate
- Sanitize user inputs

### JWT/Auth
- Use jose library for JWT operations
- Validate tokens on protected routes
- Use secure cookie settings
- Implement proper session management

## Testing

- Write tests for all tRPC procedures
- Test database operations with a test database
- Mock external services (S3, etc.)
- Test error cases and edge conditions

## Environment Variables

- Never commit secrets to git
- Use `.env.example` as template
- Validate required environment variables on startup
- Use type-safe environment variable access

## Error Handling

- Use tRPC error codes appropriately
- Log errors with sufficient context
- Return user-friendly error messages
- Never expose internal errors to clients

## Performance

- Use database connection pooling
- Cache frequently accessed data when appropriate
- Optimize database queries
- Monitor server performance

## Common Issues to Avoid

- Don't import client-side code in server
- Don't expose sensitive data in API responses
- Don't trust client input without validation
- Always handle async errors with try-catch or .catch()
- Don't use synchronous file system operations in routes
