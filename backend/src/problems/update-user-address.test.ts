import { describe, expect, it } from 'vitest';
import { solution as updateUserCity } from './update-user-address.js';

describe('update-user-address', () => {
  // Test data factory - creates fresh data for each test
  const createUsers = () => [
    { id: 1, name: 'Tanaka', address: { city: 'Tokyo', country: 'Japan' } },
    { id: 2, name: 'Sato', address: { city: 'Osaka', country: 'Japan' } },
  ];

  describe('basic functionality', () => {
    it('should update the city for the specified user', () => {
      const users = createUsers();
      const result = updateUserCity(users, 1, 'Kyoto');

      expect(result.find((u) => u.id === 1)?.address.city).toBe('Kyoto');
    });

    it('should not modify other users', () => {
      const users = createUsers();
      const result = updateUserCity(users, 1, 'Kyoto');

      expect(result.find((u) => u.id === 2)?.address.city).toBe('Osaka');
    });

    it('should preserve other address fields', () => {
      const users = createUsers();
      const result = updateUserCity(users, 1, 'Kyoto');

      expect(result.find((u) => u.id === 1)?.address.country).toBe('Japan');
    });

    it('should return unchanged array if user not found', () => {
      const users = createUsers();
      const result = updateUserCity(users, 999, 'Kyoto');

      expect(result).toEqual(users);
    });
  });

  describe('immutability - the critical React/Redux requirement', () => {
    it('should NOT mutate the original users array', () => {
      const users = createUsers();
      const originalUsers = JSON.stringify(users);

      updateUserCity(users, 1, 'Kyoto');

      expect(JSON.stringify(users)).toBe(originalUsers);
      expect(users[0].address.city).toBe('Tokyo'); // Original should be unchanged
    });

    it('should NOT mutate the original user object', () => {
      const users = createUsers();
      const originalUser = users[0];

      const result = updateUserCity(users, 1, 'Kyoto');

      // The original user object should still have Tokyo
      expect(originalUser.address.city).toBe('Tokyo');
      // The result should have Kyoto
      expect(result[0].address.city).toBe('Kyoto');
    });

    it('should NOT mutate the original address object (DEEP immutability)', () => {
      const users = createUsers();
      const originalAddress = users[0].address;

      const result = updateUserCity(users, 1, 'Kyoto');

      // This is the KEY test - the original nested address object must be unchanged
      expect(originalAddress.city).toBe('Tokyo');
      // Result's address should be a NEW object with the new city
      expect(result[0].address.city).toBe('Kyoto');
      // They should NOT be the same object reference
      expect(result[0].address).not.toBe(originalAddress);
    });

    it('should return a new array reference', () => {
      const users = createUsers();
      const result = updateUserCity(users, 1, 'Kyoto');

      expect(result).not.toBe(users);
    });

    it('should return new user object reference for updated user', () => {
      const users = createUsers();
      const result = updateUserCity(users, 1, 'Kyoto');

      expect(result[0]).not.toBe(users[0]);
    });

    it('should return new address object reference for updated user', () => {
      const users = createUsers();
      const result = updateUserCity(users, 1, 'Kyoto');

      expect(result[0].address).not.toBe(users[0].address);
    });
  });

  describe('React/Redux change detection simulation', () => {
    it('should allow React to detect changes via reference comparison', () => {
      const users = createUsers();
      const result = updateUserCity(users, 1, 'Kyoto');

      // React uses Object.is() or === for change detection
      const reactWouldRerender = users !== result;
      expect(reactWouldRerender).toBe(true);
    });

    it('should demonstrate the shallow copy bug (if present)', () => {
      const users = createUsers();
      const originalCity = users[0].address.city;

      // Store reference to original address BEFORE update
      const originalAddressRef = users[0].address;

      const result = updateUserCity(users, 1, 'Kyoto');

      // If shallow copy was used, this would FAIL:
      // The original address object would have been mutated
      console.log('Original city after update:', users[0].address.city);
      console.log('Result city:', result[0].address.city);
      console.log('Same address object?', users[0].address === originalAddressRef);

      // These assertions verify DEEP immutability
      expect(users[0].address.city).toBe(originalCity);
      expect(users[0].address).toBe(originalAddressRef); // Original ref unchanged
    });
  });

  describe('edge cases', () => {
    it('should handle empty users array', () => {
      const result = updateUserCity([], 1, 'Kyoto');
      expect(result).toEqual([]);
    });

    it('should handle single user array', () => {
      const users = [{ id: 1, name: 'Solo', address: { city: 'Tokyo', country: 'Japan' } }];
      const result = updateUserCity(users, 1, 'Nagoya');

      expect(result[0].address.city).toBe('Nagoya');
      expect(users[0].address.city).toBe('Tokyo'); // Original unchanged
    });

    it('should handle updating to same city value', () => {
      const users = createUsers();
      const result = updateUserCity(users, 1, 'Tokyo'); // Same as original

      expect(result[0].address.city).toBe('Tokyo');
      // Even with same value, should still be new references for immutability
      expect(result).not.toBe(users);
    });
  });
});
