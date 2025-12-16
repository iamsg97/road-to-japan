import { describe, expect, it } from 'vitest';
import { containsDuplicateII } from './contains-duplicate-2';

describe('Contains Duplicate II', () => {
  // LeetCode Example Cases
  it('should return true when duplicates are within k distance - Example 1', () => {
    expect(containsDuplicateII([1, 2, 3, 1], 3)).toBe(true);
  });

  it('should return true when duplicates are adjacent - Example 2', () => {
    expect(containsDuplicateII([1, 0, 1, 1], 1)).toBe(true);
  });

  it('should return false when duplicates exceed k distance - Example 3', () => {
    expect(containsDuplicateII([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });

  // Edge Cases - k values
  it('should return false when k is 0 (adjacent elements are distance 1, not <= 0)', () => {
    expect(containsDuplicateII([1, 1], 0)).toBe(false);
  });

  it('should return false when k is 0 and no adjacent duplicates', () => {
    expect(containsDuplicateII([1, 2, 3], 0)).toBe(false);
  });

  it('should handle k larger than array length', () => {
    expect(containsDuplicateII([1, 2, 3, 1], 100)).toBe(true);
  });

  it('should handle k equal to array length', () => {
    expect(containsDuplicateII([1, 2, 3, 1], 4)).toBe(true);
  });

  // Edge Cases - array size
  it('should return false for single element array', () => {
    expect(containsDuplicateII([1], 1)).toBe(false);
  });

  it('should return true for two identical elements with k >= 1', () => {
    expect(containsDuplicateII([1, 1], 1)).toBe(true);
  });

  it('should return false for two different elements', () => {
    expect(containsDuplicateII([1, 2], 1)).toBe(false);
  });

  // Boundary Cases
  it('should return true when duplicates are exactly k distance apart', () => {
    expect(containsDuplicateII([1, 2, 3, 4, 1], 4)).toBe(true);
  });

  it('should return false when duplicates are k+1 distance apart', () => {
    expect(containsDuplicateII([1, 2, 3, 4, 1], 3)).toBe(false);
  });

  it('should handle duplicates at the beginning within k', () => {
    expect(containsDuplicateII([5, 5, 1, 2, 3], 2)).toBe(true);
  });

  it('should handle duplicates at the end within k', () => {
    expect(containsDuplicateII([1, 2, 3, 5, 5], 2)).toBe(true);
  });

  // Multiple duplicates
  it('should return true for multiple duplicates, some within k', () => {
    expect(containsDuplicateII([1, 2, 1, 2], 2)).toBe(true);
  });

  it('should handle array with all same elements', () => {
    expect(containsDuplicateII([5, 5, 5, 5], 1)).toBe(true);
  });

  it('should handle multiple pairs of duplicates within k', () => {
    expect(containsDuplicateII([1, 2, 3, 1, 4, 2], 3)).toBe(true);
  });

  // Negative numbers
  it('should handle negative numbers with duplicates within k', () => {
    expect(containsDuplicateII([-1, -2, -3, -1], 3)).toBe(true);
  });

  it('should handle negative numbers with duplicates outside k', () => {
    expect(containsDuplicateII([-1, -2, -3, -4, -1], 3)).toBe(false);
  });

  // Zero cases
  it('should handle zero as duplicate within k', () => {
    expect(containsDuplicateII([0, 1, 2, 0], 3)).toBe(true);
  });

  it('should handle multiple zeros within k', () => {
    expect(containsDuplicateII([1, 0, 0, 2], 2)).toBe(true);
  });

  // Large numbers
  it('should handle large numbers with duplicates within k', () => {
    expect(containsDuplicateII([1000000000, 1, 1000000000], 2)).toBe(true);
  });

  it('should handle mixed positive and negative with duplicates within k', () => {
    expect(containsDuplicateII([1, -1, 2, 1], 3)).toBe(true);
  });

  // No duplicates
  it('should return false when all elements are distinct', () => {
    expect(containsDuplicateII([1, 2, 3, 4, 5], 2)).toBe(false);
  });

  it('should return false for long array with no duplicates', () => {
    expect(containsDuplicateII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(false);
  });

  // Complex scenarios
  it('should find first duplicate pair within k when multiple exist', () => {
    expect(containsDuplicateII([99, 99, 50, 40, 30], 1)).toBe(true);
  });

  it('should handle sparse duplicates where only one pair is within k', () => {
    expect(containsDuplicateII([1, 2, 3, 4, 5, 3], 3)).toBe(true);
  });
});
