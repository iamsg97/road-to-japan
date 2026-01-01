/**
 * Problem: Binary Search
 * Difficulty: Easy
 *
 * Do binary search
 */

export function binarySearch(nums: number[], target: number): boolean {
	let left = 0;
	let right = nums.length;
	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		if (mid === undefined || mid === -1) {
			return false;
		}
		if (nums[mid] === target) {
			return true;
		} else if (nums[mid] > target) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return false;
}
