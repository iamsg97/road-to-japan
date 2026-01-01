/**
 * Problem: Fibonacci
 * Difficulty: Easy
 *
 * Count the number of ways
 * In the memo we are storing for the nth fibo to be calculated, what's the result
 */

export function fibonacci(
	n: number,
	memo: Record<number, number> = {},
): number {
	if (n in memo) {
		// biome-ignore lint/style/noNonNullAssertion: this code is just for practice
		return memo[n]!;
	}
	if (n <= 1) {
		return n;
	}
	memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
	console.log("🚀 ~ fibonacci ~ memo:", memo);
	return memo[n];
}
