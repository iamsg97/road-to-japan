import { describe, expect, it } from 'vitest';
import { containerWithMostWater } from './container-with-most-water';

describe('Container With Most Water', () => {
  it('should return 49 for [1,8,6,2,5,4,8,3,7]', () => {
    expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('should return 1 for [1,1]', () => {
    expect(containerWithMostWater([1, 1])).toBe(1);
  });

  it('should handle two elements with different heights', () => {
    expect(containerWithMostWater([1, 2])).toBe(1);
  });

  it('should handle array with all same heights', () => {
    expect(containerWithMostWater([5, 5, 5, 5])).toBe(15); // width=3, height=5
  });

  it('should handle increasing heights', () => {
    expect(containerWithMostWater([1, 2, 3, 4, 5])).toBe(6); // indices 0-4: min(1,5)*4=4, or indices 1-4: min(2,5)*3=6
  });

  it('should handle decreasing heights', () => {
    expect(containerWithMostWater([5, 4, 3, 2, 1])).toBe(6); // indices 0-4: min(5,1)*4=4, or indices 0-3: min(5,2)*3=6
  });

  it('should handle tallest lines at the ends', () => {
    expect(containerWithMostWater([10, 1, 1, 1, 10])).toBe(40); // width=4, height=10
  });

  it('should handle tallest lines in the middle', () => {
    expect(containerWithMostWater([1, 10, 10, 1])).toBe(10); // width=1, height=10
  });

  it('should handle zero height lines', () => {
    expect(containerWithMostWater([0, 5, 0, 5])).toBe(10); // indices 1-3: width=2, height=5
  });

  it('should handle all zeros except two', () => {
    expect(containerWithMostWater([0, 0, 3, 0, 4, 0])).toBe(6); // indices 2-4: min(3,4)*2=6
  });

  it('should handle single tall line among short ones', () => {
    expect(containerWithMostWater([1, 1, 100, 1, 1])).toBe(4); // indices 0-4: min(1,1)*4=4
  });

  it('should handle symmetric array', () => {
    expect(containerWithMostWater([3, 2, 1, 2, 3])).toBe(12); // indices 0-4: min(3,3)*4=12
  });

  it('should handle large values at boundary constraint', () => {
    expect(containerWithMostWater([10000, 10000])).toBe(10000);
  });

  it('should handle three elements', () => {
    expect(containerWithMostWater([1, 8, 1])).toBe(2); // indices 0-2: min(1,1)*2=2
  });

  it('should handle performance with large array', () => {
    const largeArray = Array.from({ length: 100000 }, (_, i) => i % 10000);
    const result = containerWithMostWater(largeArray);
    expect(result).toBeGreaterThan(0);
  });
});
