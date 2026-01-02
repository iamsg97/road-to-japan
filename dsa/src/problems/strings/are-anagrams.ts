/**
 * Problem: Are Anagrams
 * Difficulty: Easy
 *
 * Given two strings, find if both of them are anagrams of each other
 *
 * Notes on the approach:
 * - Two strings are anagrams when each character appears the same number of times in both.
 * - We build a frequency map for each string and compare the counts per character.
 * - Using `Map` keeps insertion and lookup predictable and avoids accidental prototype key collisions.
 */

export function areAnagrams(str1: string, str2: string) {
	// Construct frequency tables for both inputs; bail early if either build fails.
	const freq1 = countFrequency(str1);
	const freq2 = countFrequency(str2);
	if (freq1 === undefined || freq2 === undefined) {
		return;
	}

	// Compare per-character counts; mismatch implies not anagrams.
	for (const [key] of freq1) {
		if (freq1.get(key) !== freq2.get(key)) {
			return false;
		}
	}

	// All counts match; strings are anagrams.
	return true;
}

/**
 * Build a frequency map for every character in the provided string.
 * Returns `undefined` only if an internal lookup unexpectedly fails (defensive check).
 */
function countFrequency(str: string): Map<string, number> | undefined {
	// Map<char, count> to track occurrences.
	const count = new Map<string, number>();
	for (const char of str) {
		if (count.has(char)) {
			// Safe unwrap; undefined would be unexpected but guarded.
			const currFreq = count.get(char);
			if (currFreq === undefined) {
				return;
			}
			count.set(char, currFreq + 1);
		} else {
			count.set(char, 1);
		}
	}

	// Fully populated frequency table.
	return count;
}
