/**
 * Problem: Linear Search
 * Difficulty: Easy
 *
 * Do linear search
 */

export function linearSearch(nums: Array<number>, target: number): boolean {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			return true;
		}
	}
	return false;
}
