/**
 * @fileoverview NextAuth API route handler
 * Handles all authentication-related requests
 */

import NextAuth from 'next-auth';

import { authConfig } from '@/lib/auth';

const { handlers } = NextAuth(authConfig);

export const { GET, POST } = handlers;
