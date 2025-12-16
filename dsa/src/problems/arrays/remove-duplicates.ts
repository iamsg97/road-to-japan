/**
 * Problem: Remove Duplicates
 * Difficulty: Easy
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 */

export function removeDuplicates(nums: Array<number>): number {
	// solving using the 2 pointer method
	let left = 0;
	for (let right = 1; right < nums.length; right++) {
		if (nums[left] !== nums[right]) {
			left++;
			nums[left] = nums[right]!;
		}
	}
	return left + 1;
}
