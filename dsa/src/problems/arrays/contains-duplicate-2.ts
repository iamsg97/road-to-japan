/**
 * Problem: Contains Duplicate 2
 * Difficulty: Easy
 *
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 */

export function containsDuplicateII(nums: Array<number>, k: number): boolean {
  const window = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i]!)) {
      return true;
    }
    window.add(nums[i]!);
    if (window.size > k) {
      window.delete(nums[i - k]!);
    }
  }
  return false;
}
