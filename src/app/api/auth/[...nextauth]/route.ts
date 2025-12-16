/**
 * @fileoverview NextAuth API route handler
 * Handles all authentication-related requests
 */

import NextAuth from 'next-auth';

import { authConfig } from '@/lib/auth';

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
