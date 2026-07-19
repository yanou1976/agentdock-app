```markdown
# agentdock-app Development Patterns

> Auto-generated skill from repository analysis

## Overview

This skill teaches the core development patterns, coding conventions, and common workflows for contributing to the `agentdock-app` repository. The codebase is a Next.js application written in TypeScript, with a strong focus on authentication features. It uses conventional commits, maintains a consistent code style, and follows structured workflows for feature development, testing, bugfixing, and code formatting.

## Coding Conventions

### File Naming

- Use **camelCase** for file and directory names.
  - Example: `userMenu.tsx`, `sessionProvider.tsx`, `auth.test.ts`

### Import Style

- Use **alias-based imports** for internal modules.
  ```typescript
  import { signIn } from '@/lib/auth';
  import SessionProvider from '@/components/providers/session-provider';
  ```

### Export Style

- **Mixed exports**: Both default and named exports are used.
  ```typescript
  // Named export
  export function signInUser() { ... }

  // Default export
  export default SessionProvider;
  ```

### Commit Messages

- Follow **conventional commit** format.
  - Prefixes: `fix`, `feat`, `test`, `style`
  - Example: `feat(auth): add signup page UI`

## Workflows

### Feature Development: Authentication

**Trigger:** When adding or significantly updating an authentication-related feature  
**Command:** `/new-auth-feature`

1. Install or update authentication dependencies in `package.json` and `pnpm-lock.yaml`.
2. Create or update authentication API routes under `src/app/api/auth/`.
   - Example: `src/app/api/auth/[...nextauth]/route.ts`
3. Implement or update authentication pages under `src/app/auth/`.
   - Example: `src/app/auth/signin/page.tsx`
4. Add or modify authentication-related components.
   - Example: `src/components/user-menu.tsx`, `src/components/providers/session-provider.tsx`
5. Update authentication logic in `src/lib/auth.ts`.
6. Update types in `src/types/next-auth.d.ts` if needed.
7. Update `.env.example` for any new environment variables.

#### Example: Adding a new sign-in page

```tsx
// src/app/auth/signin/page.tsx
import { signIn } from '@/lib/auth';

export default function SignInPage() {
  return (
    <button onClick={() => signIn()}>Sign In</button>
  );
}
```

---

### Test and Documentation Update After Feature

**Trigger:** After adding a new feature or fix to ensure test coverage and documentation  
**Command:** `/add-tests-and-docs`

1. Add or update relevant tests (e.g., `tests/lib/auth.test.ts`).
2. Update or create documentation files (e.g., `docs/authentication.md`).
3. Update testing configuration if necessary (e.g., `jest.config.ts`).

#### Example: Adding a test

```typescript
// tests/lib/auth.test.ts
import { signInUser } from '@/lib/auth';

test('signInUser authenticates valid user', () => {
  expect(signInUser('user', 'pass')).toBe(true);
});
```

---

### Bugfix and Refactor: Authentication

**Trigger:** When fixing bugs or refactoring authentication logic  
**Command:** `/fix-auth-bug`

1. Update authentication API route handlers (e.g., `src/app/api/auth/[...nextauth]/route.ts`).
2. Update authentication UI components or pages.
3. Update authentication logic in `src/lib/auth.ts`.
4. Update or add documentation regarding the fix or change.

#### Example: Fixing a bug in auth logic

```typescript
// src/lib/auth.ts
export function signInUser(username: string, password: string) {
  if (!username || !password) return false; // Fix: handle empty input
  // ...rest of logic
}
```

---

### Code Formatting: Authentication Files

**Trigger:** To ensure code style consistency in authentication-related files  
**Command:** `/format-auth-files`

1. Run code formatter (e.g., Prettier) on authentication pages, components, and tests.
2. Commit all formatting changes.

#### Example: Formatting a component

Before:
```tsx
export default function UserMenu( ) {return (<div>User</div>);}
```

After formatting:
```tsx
export default function UserMenu() {
  return <div>User</div>;
}
```

---

## Testing Patterns

- Test files follow the `*.test.*` pattern, typically located under `tests/`.
- The testing framework is not explicitly specified, but patterns suggest Jest or a similar framework.
- Example test file: `tests/lib/auth.test.ts`
- Test configuration may be found in `jest.config.ts`.

## Commands

| Command             | Purpose                                                        |
|---------------------|----------------------------------------------------------------|
| /new-auth-feature   | Start a new authentication feature development workflow        |
| /add-tests-and-docs | Add or update tests and documentation after a feature or fix   |
| /fix-auth-bug       | Fix or refactor authentication-related bugs or logic           |
| /format-auth-files  | Format authentication-related files for code style consistency |
```