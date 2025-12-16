/**
 * Problem: Contains Duplicate
 * Difficulty: Easy
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

export function containsDuplicate(nums: Array<number>): boolean {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
