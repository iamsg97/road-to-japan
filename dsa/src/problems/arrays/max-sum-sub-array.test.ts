import { describe, expect, it } from "vitest";
import { maxSumSubArray } from "./max-sum-sub-array";

describe("Max Sum Sub Array", () => {
	it("finds max sum in a simple increasing array", () => {
		expect(maxSumSubArray([1, 2, 3, 4], 2)).toBe(7);
	});

	it("handles windows when negatives are present", () => {
		expect(maxSumSubArray([4, -1, 2, 1], 2)).toBe(3);
	});

	it("works for window size of 1 (max single element)", () => {
		expect(maxSumSubArray([5, -2, 7, 1], 1)).toBe(7);
	});

	it("captures max window in the middle", () => {
		expect(maxSumSubArray([2, 1, 5, 1, 3, 2], 3)).toBe(9);
	});

	it("finds max when best window is at the end", () => {
		expect(maxSumSubArray([0, 0, 0, 5], 2)).toBe(5);
	});
});
