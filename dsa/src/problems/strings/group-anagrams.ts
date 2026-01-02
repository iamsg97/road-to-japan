/**
 * Problem: Group Anagrams
 * Difficulty: Medium
 *
 * Given an array of strings strs, group them together. You can return the answer in any order.
 *
 * Approach:
 * - Build a frequency signature for each word (count of each letter a-z)
 * - Convert frequency counts to a string key for easy comparison
 * - Use the key to group anagrams in a Map
 * - Anagrams will have identical frequency signatures
 */

/**
 * Converts a word into its frequency signature string.
 * For example: "listen" and "silent" both produce the same signature
 * because they contain the same letters with the same counts.
 *
 * The signature is built as: count of 'a' + '#' + count of 'b' + '#' + ... count of 'z'
 */
function getFrequencyString(word: string) {
	// Array of 26 slots, one for each lowercase letter (a-z)
	const alphabets = new Array(26).fill(0);
	// ASCII code for 'a' (97)
	const a: number = 97 as const;

	// Count frequency of each lowercase letter
	for (const char of word) {
		const ascii = char.charCodeAt(0);
		if (ascii >= a) {
			// Calculate position in array: 'a'->0, 'b'->1, ..., 'z'->25
			const asciiPos = ascii - a;
			// Increment the count for this letter
			alphabets[asciiPos]++;
		}
	}

	// Convert frequency array to string signature
	// Example: [1,1,0,...,0,1] becomes "1#1#0#...#0#1"
	const freqStr = alphabets?.toString().replaceAll(",", "#");
	return freqStr;
}

/**
 * Group anagrams together using frequency signatures.
 * Words with identical frequency signatures are anagrams.
 */
export function groupAnagrams(strs: Array<string>): Array<Array<string>> {
	// Map signature string -> array of words with that signature
	const record = new Map<string, Array<string>>();

	// For each word, get its frequency signature and group it
	for (const word of strs) {
		const freqStr = getFrequencyString(word);

		if (record.has(freqStr)) {
			// If this signature already exists, add to that group
			const words = record.get(freqStr);
			if (words) {
				record.set(freqStr, [...words, word]);
			}
		} else {
			// Create a new group for this signature
			record.set(freqStr, [word]);
		}
	}

	// Extract all groups and return as array of arrays
	return Array.from(record.values());
}
