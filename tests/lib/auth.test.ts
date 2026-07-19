/**
 * @fileoverview Tests for authentication functionality (password hashing only)
 * Note: Full NextAuth integration tests would require mocking next-auth
 */

import { compare, hash } from 'bcryptjs';

describe('Authentication', () => {
  describe('Password hashing', () => {
    it('should hash a password', async () => {
      const password = 'testPassword123';
      const hashed = await hash(password, 10);

      expect(hashed).not.toBe(password);
      expect(hashed.length).toBeGreaterThan(0);
    });

    it('should verify a correct password', async () => {
      const password = 'testPassword123';
      const hashed = await hash(password, 10);
      const isValid = await compare(password, hashed);

      expect(isValid).toBe(true);
    });

    it('should reject an incorrect password', async () => {
      const password = 'testPassword123';
      const wrongPassword = 'wrongPassword456';
      const hashed = await hash(password, 10);
      const isValid = await compare(wrongPassword, hashed);

      expect(isValid).toBe(false);
    });
  });
});
