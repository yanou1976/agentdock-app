---
name: test-and-doc-update-after-feature
description: Workflow command scaffold for test-and-doc-update-after-feature in agentdock-app.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /test-and-doc-update-after-feature

Use this workflow when working on **test-and-doc-update-after-feature** in `agentdock-app`.

## Goal

Adds or updates tests and documentation following a feature or fix, often for authentication.

## Common Files

- `tests/lib/auth.test.ts`
- `jest.config.ts`
- `docs/authentication.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Add or update tests related to the new or changed feature (e.g., in tests/lib/...)
- Update or create documentation files (e.g., docs/authentication.md)
- Update configuration for testing if necessary (e.g., jest.config.ts)

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.