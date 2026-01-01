import { describe, expect, it } from "vitest";
import { fibonacci } from "./fibonacci";

describe("Fibonacci", () => {
	it("returns correct values for small n", () => {
		const cases: Array<[number, number]> = [
			[0, 0],
			[1, 1],
			[2, 1],
			[3, 2],
			[4, 3],
			[5, 5],
		];

		for (const [n, expected] of cases) {
			expect(fibonacci(n)).toBe(expected);
		}
	});

	it("handles larger n using memoized recursion", () => {
		expect(fibonacci(10)).toBe(55);
		expect(fibonacci(20)).toBe(6765);
		expect(fibonacci(30)).toBe(832040);
	});
});
