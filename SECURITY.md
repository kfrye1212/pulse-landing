# Security Policy

## Overview

The Pulse Landing project takes security seriously. We appreciate the security community's efforts to responsibly disclose vulnerabilities and work with us to protect our users.

## Supported Versions

We provide security updates for the following versions:

| Version | Supported          | Status                 |
| ------- | ------------------ | ---------------------- |
| 1.0.x   | :white_check_mark: | Current stable release |
| < 1.0   | :x:                | Not supported          |

## Security Measures

### Smart Contract Security

- All smart contracts undergo rigorous internal testing
- Third-party security audits are planned for Q2 2026
- Domain registration contracts are deployed on Solana devnet for testing
- Program ID: `AYM5JaJ7L4E3Uycb4dwf416aMMYtjg4jYLXe8veq3ypy`

### Web Application Security

- Environment variables are used for all sensitive configuration
- JWT tokens are used for authentication with secure secret management
- HTTPS is enforced in production environments
- Content Security Policy (CSP) headers are implemented
- Regular dependency updates to patch known vulnerabilities

### Wallet Integration Security

- We use industry-standard wallet adapters (wagmi, @solana/wallet-adapter)
- We never request or store private keys
- All wallet connections use secure, verified protocols
- Web3Modal integration for multi-wallet support

### Database Security

- MySQL database with encrypted connections
- Parameterized queries to prevent SQL injection
- Regular backups and disaster recovery procedures
- Access control and principle of least privilege

## Reporting a Vulnerability

We take all security reports seriously. If you discover a security vulnerability, please follow these steps:

### 1. **Do Not** Publicly Disclose

Please do not publicly disclose the vulnerability until we have had a chance to address it.

### 2. Report via Email

Send a detailed report to: **security@pulse.example.com**

Include in your report:

- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact and severity
- Any suggested fixes or mitigations
- Your contact information for follow-up

### 3. Response Timeline

- **Initial Response**: Within 48 hours of receipt
- **Status Update**: Within 7 days with assessment and timeline
- **Resolution**: Depends on severity and complexity
  - Critical: 24-72 hours
  - High: 7-14 days
  - Medium: 14-30 days
  - Low: 30-90 days

### 4. Recognition

We believe in recognizing security researchers who help keep our platform secure:

- Security researchers will be credited in our security acknowledgments (with permission)
- We maintain a Hall of Fame for responsible disclosure
- Depending on severity, we may offer bug bounties (program details TBA)

## Security Best Practices for Users

### Wallet Security

- Never share your private keys or seed phrases
- Use hardware wallets for large amounts
- Verify all transaction details before signing
- Be cautious of phishing attempts

### Platform Usage

- Use strong, unique passwords
- Enable two-factor authentication when available
- Verify you're on the official Pulse domain
- Keep your browser and extensions up to date

### Smart Contract Interactions

- Always verify contract addresses
- Start with small test transactions
- Understand the permissions you're granting
- Review transaction details in your wallet

## Security Updates

Security patches and updates will be:

- Released as soon as possible after verification
- Announced via our official channels
- Documented in release notes with CVE references when applicable

## Scope

The following are within scope for security reports:

- Web application vulnerabilities (XSS, CSRF, injection, etc.)
- Authentication and authorization flaws
- Smart contract vulnerabilities
- API security issues
- Database security concerns
- Infrastructure security problems

The following are out of scope:

- Third-party services and dependencies (report to their maintainers)
- Social engineering attacks
- Physical security issues
- Denial of service attacks
- Issues in outdated/unsupported versions

## Contact

For security-related questions and reports:

- **Email**: security@pulse.example.com
- **PGP Key**: Available upon request
- **Response Time**: 24-48 hours

For general support:

- **Email**: support@pulse.example.com
- **Discord**: Join our community server
- **Website**: https://pulse.example.com

## Legal

We will not pursue legal action against security researchers who:

- Follow responsible disclosure practices
- Report vulnerabilities in good faith
- Do not exploit vulnerabilities beyond what's necessary for demonstration
- Do not access or modify user data without permission
- Do not cause degradation of service

Thank you for helping keep Pulse and our users secure!

---

Last Updated: November 2025
