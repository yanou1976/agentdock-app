# Authentication

AgentDock now includes user authentication using NextAuth.js v5 (Auth.js) with credentials-based login.

## Features

- **User Registration**: New users can create accounts with email and password
- **User Login**: Existing users can authenticate with their credentials
- **Session Management**: Secure JWT-based session management
- **Protected Routes**: Optional route protection for sensitive areas
- **User Menu**: Display logged-in user info with logout functionality

## Setup

### 1. Environment Configuration

Add the following environment variables to your `.env.local` file:

```bash
# Required: Secret key for JWT signing (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET=your-secret-key-here

# Required: The canonical URL of your site
NEXTAUTH_URL=http://localhost:3000

# Optional: Authentication mode (credentials, oauth, none)
NEXTAUTH_AUTH_MODE=credentials
```

### 2. Generate a Secret Key

Generate a secure secret key for production:

```bash
openssl rand -base64 32
```

### 3. Start the Development Server

```bash
pnpm dev
```

## Usage

### Signing Up

1. Navigate to `/auth/signup`
2. Fill in your name, email, and password
3. Click "Sign Up"
4. You'll be redirected to the login page

### Signing In

1. Navigate to `/auth/signin`
2. Enter your email and password
3. Click "Sign In"
4. You'll be redirected to the home page

### Accessing User Information

The user menu is available in the top-right corner of the navigation bar:

- Shows user avatar (initials)
- Displays name and email on click
- Provides access to settings
- Includes logout option

### Signing Out

Click on your avatar in the top-right corner and select "Log out".

## Implementation Details

### User Storage

Currently, users are stored in-memory. For production use, you should replace this with a proper database:

1. Update `src/lib/auth.ts` to use a database instead of the in-memory array
2. Implement proper user model with your database ORM
3. Consider using NextAuth adapters for popular databases

### Password Security

- Passwords are hashed using bcrypt with a cost factor of 10
- Plain text passwords are never stored
- Password validation requires minimum 8 characters

### Session Management

- Sessions use JWT (JSON Web Tokens)
- Session duration: 30 days
- Sessions are automatically refreshed on activity

## API Endpoints

### Authentication

- `POST /api/auth/signin` - Sign in with credentials
- `POST /api/auth/signout` - Sign out current user
- `GET /api/auth/session` - Get current session

### User Management

- `POST /api/auth/signup` - Create new user account

## Security Considerations

1. **HTTPS Required**: Always use HTTPS in production
2. **Secret Key**: Keep `NEXTAUTH_SECRET` secure and never commit it
3. **Password Policy**: Implement stronger password requirements for production
4. **Rate Limiting**: Add rate limiting to prevent brute force attacks
5. **Database**: Replace in-memory storage with a proper database

## Customization

### Adding OAuth Providers

To add OAuth providers (Google, GitHub, etc.):

1. Install the provider package
2. Add provider configuration to `src/lib/auth.ts`
3. Update environment variables with OAuth credentials

Example for GitHub:

```typescript
import GitHubProvider from 'next-auth/providers/github';

providers: [
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
  // ... existing providers
]
```

### Protecting Routes

To protect specific routes, create a middleware:

```typescript
// middleware.ts
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/settings/:path*', '/chat/:path*']
};
```

## Troubleshooting

### "NEXTAUTH_SECRET is not set" Error

Make sure you've added `NEXTAUTH_SECRET` to your `.env.local` file.

### Session not persisting

Check that cookies are enabled in your browser and that you're accessing the site on the correct domain.

### Cannot sign in

1. Verify that you've registered an account first
2. Check that your password is correct
3. Ensure the server is running

## Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Auth.js Documentation](https://authjs.dev/)
- [bcrypt Documentation](https://github.com/kelektiv/node.bcrypt.js)
