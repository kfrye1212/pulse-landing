# Repository Security Configuration Guide

This document provides step-by-step instructions to configure GitHub repository settings for maximum security and protection.

## Overview

This repository requires strict access control to ensure only authorized users can modify branches, merge pull requests, and commit changes.

## Required GitHub Repository Settings

### 1. General Settings

Navigate to: `Settings > General`

**Access:**

- Set repository visibility to `Private` (recommended) or `Public` based on needs
- Disable: "Allow forking" (if repository should remain private to team only)

**Pull Requests:**

- ✅ Enable: "Allow merge commits"
- ✅ Enable: "Allow squash merging"
- ✅ Enable: "Allow rebase merging"
- ✅ Enable: "Always suggest updating pull request branches"
- ✅ Enable: "Allow auto-merge"
- ✅ Enable: "Automatically delete head branches"

**Archives:**

- ❌ Disable: "Include Git LFS objects in archives"

### 2. Branch Protection Rules

Navigate to: `Settings > Branches > Add branch protection rule`

#### Main Branch Protection

**Branch name pattern:** `main` (or your default branch)

**Protect matching branches:**

- ✅ Require a pull request before merging
  - ✅ Require approvals: `1` (minimum)
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from Code Owners
  - ✅ Restrict who can dismiss pull request reviews
  - ✅ Require approval of the most recent reviewable push
  - ❌ Allow specified actors to bypass required pull requests (keep this disabled)

- ✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date before merging
  - Add status checks: (e.g., tests, linting, build)

- ✅ Require conversation resolution before merging

- ✅ Require signed commits

- ✅ Require linear history

- ✅ Require deployments to succeed before merging (optional)

- ✅ Lock branch (prevents all pushes to the branch)

- ✅ Do not allow bypassing the above settings
  - ❌ Do NOT add any users to bypass list (including administrators)

- ✅ Restrict who can push to matching branches
  - Add only: `@kfrye1212` and other trusted administrators
  - This ensures only specific users can push to protected branches

- ✅ Allow force pushes
  - Specify who can force push: Only repository administrators (if needed)
  - Recommended: Leave disabled for maximum protection

- ✅ Allow deletions: Disabled (prevents branch deletion)

#### Development Branch Protection (Optional)

For `develop` or other important branches, apply similar rules with potentially relaxed requirements:

**Branch name pattern:** `develop`

- ✅ Require a pull request before merging
  - ✅ Require approvals: `1`
  - ✅ Require review from Code Owners

- ✅ Require status checks to pass before merging

- ✅ Require conversation resolution before merging

### 3. Collaborators and Teams

Navigate to: `Settings > Collaborators and teams`

**Manage access:**

- Repository owner: `@kfrye1212` (Admin access)
- Add only trusted collaborators
- Use teams for organization-level repositories
- Recommended roles:
  - Admin: Full access (owner only)
  - Write: Can push to non-protected branches, open PRs
  - Read: Can view and clone repository.

**Best practice:** Limit admin access to repository owner only.

### 4. Code Security and Analysis

Navigate to: `Settings > Code security and analysis`

**Dependency graph:**

- ✅ Enable dependency graph

**Dependabot alerts:**

- ✅ Enable Dependabot alerts
- Configure alert notifications

**Dependabot security updates:**

- ✅ Enable Dependabot security updates
- Automatically creates PRs for security vulnerabilities

**Dependabot version updates (Optional):**

- Configure `.github/dependabot.yml` for automated dependency updates

**Code scanning:**

- ✅ Set up code scanning with CodeQL
- Configure automated scanning on pull requests and push events

**Secret scanning:**

- ✅ Enable secret scanning
- ✅ Enable push protection (prevents secrets from being pushed)

### 5. Webhooks and Notifications

Navigate to: `Settings > Webhooks`

**Optional:** Set up webhooks for:

- Pull request events
- Push events
- Security alerts
- CI/CD integration

### 6. GitHub Actions

Navigate to: `Settings > Actions > General`

**Actions permissions:**

- Choose appropriate setting based on workflow needs
- Recommended: "Allow [owner], and select non-[owner], actions and reusable workflows"

**Workflow permissions:**

- ✅ Select: "Read repository contents and packages permissions"
- ❌ Disable: "Allow GitHub Actions to create and approve pull requests"
  - This prevents workflows from bypassing review requirements

**Fork pull request workflows:**

- Recommended: "Require approval for all outside collaborators"

### 7. Required Status Checks

Create GitHub Actions workflows for:

- Linting (`.github/workflows/lint.yml`)
- Testing (`.github/workflows/test.yml`)
- Building (`.github/workflows/build.yml`)
- Security scanning (`.github/workflows/security.yml`)

These should be marked as required in branch protection rules.

## Implementing CODEOWNERS

The `.github/CODEOWNERS` file has been created to specify code ownership:

- All files require approval from `@kfrye1212`
- Critical files explicitly listed for extra visibility
- Changes to security configurations require owner approval

**To activate CODEOWNERS:**

1. Ensure file exists at `.github/CODEOWNERS`
2. Enable "Require review from Code Owners" in branch protection settings
3. All pull requests will require approval from specified owners

## Commit Signing Setup

### For Repository Owner:

1. **Generate GPG key:**

   ```bash
   gpg --full-generate-key
   ```

2. **List GPG keys:**

   ```bash
   gpg --list-secret-keys --keyid-format=long
   ```

3. **Export public key:**

   ```bash
   gpg --armor --export YOUR_KEY_ID
   ```

4. **Add to GitHub:**
   - Navigate to: `Settings > SSH and GPG keys > New GPG key`
   - Paste the public key

5. **Configure Git:**
   ```bash
   git config --global user.signingkey YOUR_KEY_ID
   git config --global commit.gpgsign true
   ```

## Two-Factor Authentication (2FA)

**CRITICAL:** All users with write access must enable 2FA:

1. Navigate to: GitHub `Settings > Password and authentication`
2. Enable two-factor authentication
3. Use authenticator app (recommended) or SMS
4. Save recovery codes securely

## Regular Security Maintenance

### Weekly:

- Review open pull requests
- Check for dependency alerts

### Monthly:

- Audit repository access
- Review and update dependencies
- Check security scanning results

### Quarterly:

- Review and update security policies
- Audit branch protection rules
- Review CODEOWNERS file

## Emergency Access

In case of emergency:

1. Repository owner has full admin access
2. Can temporarily modify branch protection if needed
3. Should document any emergency changes
4. Restore protection rules immediately after emergency

## Verification Checklist

After configuring, verify:

- [ ] Branch protection rules active on `main` branch
- [ ] CODEOWNERS file in place and recognized
- [ ] Code scanning enabled
- [ ] Secret scanning enabled
- [ ] Dependabot alerts enabled
- [ ] Required status checks configured
- [ ] Only authorized users have admin access
- [ ] 2FA enabled for all users with write access
- [ ] Commit signing required
- [ ] Pull request reviews required
- [ ] Force push disabled (or restricted)
- [ ] Branch deletion disabled

## Additional Resources

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [GitHub CODEOWNERS Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security/getting-started/securing-your-repository)
- [Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification)

## Support

For questions about security configuration, contact:

- Repository Owner: @kfrye1212

---

**Note:** This configuration ensures that only authorized users (repository owner and explicitly granted collaborators) can make changes to branches, merge pull requests, and commit to protected branches. The settings must be configured through the GitHub web interface as they cannot be committed to the repository itself.
