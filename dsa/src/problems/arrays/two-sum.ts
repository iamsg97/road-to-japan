 /**
 * Problem: Two Sum
 * Difficulty: Easy
 *
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 */

export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === undefined) {
      continue;
    }

    const complement = target - num;
    const complementIndex = map.get(complement);

    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }

    map.set(num, i);
  }

  return [];
}

/**
 * Alternative solution using brute force
 * Time: O(n²), Space: O(1)
 */
export function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const numI = nums[i];
      const numJ = nums[j];
      if (numI !== undefined && numJ !== undefined && numI + numJ === target) {
        return [i, j];
      }
    }
  }
  return [];
}
