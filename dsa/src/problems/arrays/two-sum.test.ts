import { compareBenchmarks, printBenchmarkResults } from '@utils/benchmark';
import { describe, expect, it } from 'vitest';
import { twoSum, twoSumBruteForce } from './two-sum';

describe('Two Sum', () => {
  it('should find two numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should handle negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it('should handle zero', () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  it('brute force solution should work correctly', () => {
    expect(twoSumBruteForce([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSumBruteForce([3, 2, 4], 6)).toEqual([1, 2]);
  });
});

describe('Two Sum - Performance', () => {
  it('should compare hash map vs brute force performance', () => {
    const testArray = Array.from({ length: 1000 }, (_, i) => i);
    const target = 1998; // Last two elements

    const results = compareBenchmarks(
      [
        {
          name: 'Hash Map Solution',
          fn: () => twoSum(testArray, target),
        },
        {
          name: 'Brute Force Solution',
          fn: () => twoSumBruteForce(testArray, target),
        },
      ],
      100
    );

    printBenchmarkResults(results);

    // Hash map should be significantly faster
    expect(results[0]?.name).toBe('Hash Map Solution');
  });
});
