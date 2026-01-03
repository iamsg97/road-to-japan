/**
 * Problem: Max Sum Sub Array
 * Difficulty: Medium
 *
 * Find max sum of consequetive K elements
 *
 * Approach (sliding window):
 * - Seed the first window of size k.
 * - Slide the window one step at a time: subtract the element leaving the window and add the new element entering.
 * - Track the maximum window sum seen while sliding.
 */

export function maxSumSubArray(arr: Array<number>, k: number): number {
	// Current window sum and best sum found so far
	let sum = 0;
	let maxSum = 0;

	// Initialize the first window [0, k)
	for (let i = 0; i < k; i++) {
		sum = sum + (arr[i] ?? 0);
	}
	const len = arr.length;

	// Slide the window across the array, updating sums in O(1) per step
	for (let i = k; i < len; i++) {
		const validWindowSize = i - k;
		sum = sum - (arr[validWindowSize] ?? 0) + (arr[i] ?? 0);
		maxSum = Math.max(sum, maxSum);
	}

	// Best window sum encountered
	return maxSum;
}
