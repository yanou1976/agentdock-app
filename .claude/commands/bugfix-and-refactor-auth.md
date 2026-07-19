---
name: bugfix-and-refactor-auth
description: Workflow command scaffold for bugfix-and-refactor-auth in agentdock-app.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /bugfix-and-refactor-auth

Use this workflow when working on **bugfix-and-refactor-auth** in `agentdock-app`.

## Goal

Fixes bugs or refactors authentication logic, often updating API routes, UI, and documentation.

## Common Files

- `src/app/api/auth/[...nextauth]/route.ts`
- `src/app/api/auth/signup/route.ts`
- `src/app/auth/signin/page.tsx`
- `src/components/user-menu.tsx`
- `src/lib/auth.ts`
- `docs/authentication.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update authentication API route handlers (e.g., src/app/api/auth/...)
- Update authentication UI components or pages
- Update authentication logic in src/lib/auth.ts
- Update or add documentation regarding the fix or change

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.