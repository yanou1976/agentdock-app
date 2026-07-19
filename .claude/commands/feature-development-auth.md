---
name: feature-development-auth
description: Workflow command scaffold for feature-development-auth in agentdock-app.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /feature-development-auth

Use this workflow when working on **feature-development-auth** in `agentdock-app`.

## Goal

Implements a new authentication feature including configuration, UI, API routes, and integration.

## Common Files

- `package.json`
- `pnpm-lock.yaml`
- `.env.example`
- `src/app/api/auth/[...nextauth]/route.ts`
- `src/app/api/auth/signup/route.ts`
- `src/app/auth/signin/page.tsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Install or update authentication-related dependencies in package.json and pnpm-lock.yaml
- Create or update authentication API routes under src/app/api/auth/
- Implement or update authentication pages under src/app/auth/
- Add or modify authentication-related components (e.g., user menu, session provider)
- Update authentication logic in src/lib/auth.ts

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.