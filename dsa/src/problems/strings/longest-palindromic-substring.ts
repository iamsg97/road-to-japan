
/**
 * Returns the longest palindromic substring using "expand around center".
 * Concept:
 * - Every palindrome can be defined by a center and equal mirror expansion on both sides.
 * - For each index, try both odd-length (center at i) and even-length (center between i and i+1) palindromes.
 * - Expand outward while characters match, track the longest window seen.
 *
 * Time: O(n^2) worst case (e.g., "aaaa…a"), Space: O(1).
 */
export function longestPalindromicSubstring(s: string): string {
	let windowSize = 0; // Current palindrome length from latest expansion
	let maxWindowSize = 0; // Best palindrome length found
	let start = 0; // Start index of best palindrome

	for (let i = 0; i < s.length; i++) {
		// Odd-length palindrome with center at i
		let [left, right] = expand(s, i, i);
		windowSize = right - left + 1;
		if (windowSize > maxWindowSize) {
			maxWindowSize = windowSize;
			start = left;
		}

		// Even-length palindrome with center between i and i+1
		[left, right] = expand(s, i, i + 1);
		windowSize = right - left + 1;
		if (windowSize > maxWindowSize) {
			maxWindowSize = windowSize;
			start = left;
		}
	}

	// Slice out the longest palindrome found
	return s.slice(start, start + maxWindowSize);
}

/**
 * Expand around the given center while characters match.
 * Returns the inclusive [left, right] bounds of the palindrome after expansion.
 */
function expand(s: string, left: number, right: number): [number, number] {
	while (left > 0 && right < s.length && s[left] === s[right]) {
		left++;
		right--;
	}
	return [left + 1, right - 1];
}
