/**
 * Problem: Minimum Size Subarray Sum
 * Difficulty: Medium
 *
 * Given a positive integer array of positive numbers and a target sum,
 * return the minimal length of a subarray whose sum is >= target.
 * If no such subarray exists, return 0.
 *
 * Concept: Sliding Window (Two Pointers)
 * - Expand the window by moving `right` pointer and accumulating sum.
 * - Once sum >= target, shrink the window from left to find the minimal length
 *   that still satisfies the condition.
 * - Only shrink while the condition holds; this greedily minimizes window size.
 * - Time: O(n), Space: O(1)—each element is visited at most twice (right and left pointers).
 */

export function minimumSizeSubarraySum(arr: Array<number>, target: number) {
	const len = arr.length;
	let sum = 0; // Current window sum
	let left = 0; // Left boundary of sliding window
	let minLen = Infinity; // Track the minimum window length found

	// Expand the window with right pointer
	for (let right = 0; right < len; right++) {
		// Add the new element entering the window
		sum = sum + (arr[right] ?? 0);

		// When sum is sufficient, try shrinking from left to minimize length
		while (sum >= target && left <= right) {
			const windowSize = right - left + 1;
			// Update minimum if this window is smaller
			minLen = Math.min(minLen, windowSize);
			// Remove the leftmost element and shrink the window
			sum = sum - (arr[left] ?? 0);
			left++;
		}
	}

	// Return 0 if no valid subarray found; otherwise return the minimal length
	return minLen === Infinity ? 0 : minLen;
}
