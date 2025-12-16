import { describe, expect, it } from 'vitest';
import { containsDuplicate } from './contains-duplicate';

describe('Contains Duplicate', () => {
  it('should return true when array contains duplicate at different positions', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it('should return false when all elements are distinct', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it('should return true for array with multiple duplicates', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it('should return true when duplicate is at the beginning', () => {
    expect(containsDuplicate([1, 1, 2, 3, 4])).toBe(true);
  });

  it('should return true when duplicate is at the end', () => {
    expect(containsDuplicate([1, 2, 3, 4, 4])).toBe(true);
  });

  it('should return false for single element array', () => {
    expect(containsDuplicate([1])).toBe(false);
  });

  it('should return true for two identical elements', () => {
    expect(containsDuplicate([1, 1])).toBe(true);
  });

  it('should return false for two different elements', () => {
    expect(containsDuplicate([1, 2])).toBe(false);
  });

  it('should handle negative numbers with duplicates', () => {
    expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
  });

  it('should handle negative numbers without duplicates', () => {
    expect(containsDuplicate([-1, -2, -3, -4])).toBe(false);
  });

  it('should handle mix of positive and negative numbers with duplicates', () => {
    expect(containsDuplicate([1, -1, 2, -2, 1])).toBe(true);
  });

  it('should handle zero as duplicate', () => {
    expect(containsDuplicate([0, 1, 2, 0])).toBe(true);
  });

  it('should handle large numbers with duplicates', () => {
    expect(containsDuplicate([1000000000, -1000000000, 1000000000])).toBe(true);
  });

  it('should handle array with all same elements', () => {
    expect(containsDuplicate([5, 5, 5, 5, 5])).toBe(true);
  });

  it('should return false for empty-like edge case (single distinct element)', () => {
    expect(containsDuplicate([42])).toBe(false);
  });
});
