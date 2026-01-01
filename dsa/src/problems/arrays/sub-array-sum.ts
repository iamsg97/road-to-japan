/**
 * Problem: Sub Array Sum
 * Difficulty: Medium
 *
 * Find the subarray whose sum is not more than the given target
 */

export function subArraySum(arr: Array<number>, target: number) {
	const len = arr.length;
	let left = 0;
	let windowSum = 0;
	for (let right = 0; right < len; right++) {
		windowSum = windowSum + (arr[right] ?? 0);
		while (windowSum > target) {
			windowSum = windowSum - (arr[left] ?? 0);
			left++;
		}
		if (windowSum === target) {
			return arr.slice(left, right + 1);
		}
	}
	return null;
}
