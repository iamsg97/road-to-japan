/**
 * Problem: Longest Substring Without Repeating
 * Difficulty: Medium
 *
 * Find the longest substring without repeating characters
 *
 * Sliding window notes:
 * - Window expands with `right` on each iteration.
 * - When a duplicate character is found that lies inside the current window
 *   (`seen index >= left`), shift `left` just past the previous occurrence
 *   to shrink the window minimally.
 * - Only shrink for duplicates inside the active window (not anywhere in the
 *   array), otherwise unique characters stay and window keeps expanding.
 * - Track the maximum window size as we go.
 */

export function longestSubstringWithoutRepeating(input: string) {
	const len = input.length;
	let left = 0;
	const seen = new Map<string, number>();
	let windowSize = 0;

	for (let right = 0; right < len; right++) {
		// Character entering the window as it expands
		const char = input[right];
		if (char === undefined) {
			return;
		}

		if (seen.has(char)) {
			const rIndex = seen.get(char) ?? 0;
			// Duplicate only matters if it is still inside the current window
			if (rIndex >= left) {
				// Shrink window start just past the previous occurrence
				left = rIndex + 1;
			}
			// Note: moving `right` back to the duplicate index causes a re-walk of
			// already-seen characters; kept as-is to preserve original logic.
			right = rIndex;
		} else {
			// First time seeing this character; record its position
			seen.set(char, right);
		}

		// Update best window length after handling potential shrink
		windowSize = Math.max(windowSize, right - left + 1);
	}

	return windowSize;
}
