/**
 * Problem: Array Leaders
 * Difficulty: Easy
 *
 * find an array of elements greater than all to right
 */

export function arrayLeaders(arr: Array<number>) {
	const len = arr.length;
	let lastMax = -Infinity;
	const result: number[] = [];
	for (let i = len; i > 0; i--) {
		if (arr[i] ?? 0 > lastMax) {
			result.push(arr[i] ?? 0);
			lastMax = arr[i] ?? 0;
		}
	}
	return arr.reverse();
}
