/**
 * @fileoverview Authentication configuration using NextAuth.js v5
 * Implements credentials-based authentication with bcrypt password hashing
 */

import { compare, hash } from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Simple in-memory user store (replace with database in production)
// WARNING: In-memory storage will lose all data on server restart
// and does not scale beyond a single instance. For production:
// 1. Replace with a database (PostgreSQL, MongoDB, etc.)
// 2. Use NextAuth database adapters for session/user management
// 3. Implement proper user model with your ORM
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

// In-memory user storage (this would be a database in production)
const users: User[] = [];

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  return hash(password, 10);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return compare(password, hashedPassword);
}

/**
 * Create a new user
 */
export async function createUser(
  email: string,
  password: string,
  name: string
): Promise<User> {
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await hashPassword(password);

  // Use crypto.randomUUID() for cryptographically secure ID generation
  const user: User = {
    id: crypto.randomUUID(),
    email,
    password: hashedPassword,
    name
  };

  users.push(user);
  return user;
}

/**
 * Find user by email
 */
export async function getUserByEmail(email: string): Promise<User | undefined> {
  return users.find((u) => u.email === email);
}

/**
 * NextAuth configuration
 */
export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        const user = await getUserByEmail(credentials.email as string);

        if (!user) {
          throw new Error('No user found with this email');
        }

        const isValid = await verifyPassword(
          credentials.password as string,
          user.password
        );

        if (!isValid) {
          throw new Error('Invalid password');
        }

        // Return user object without password
        return {
          id: user.id,
          email: user.email,
          name: user.name
        };
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error'
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    }
  },
  trustHost: true
};
