import { describe, expect, it } from "vitest";
import { minimumSizeSubarraySum } from "./minimum-size-subarray-sum";

describe("Minimum Size Subarray Sum", () => {
	it("returns 0 when no subarray meets the target", () => {
		expect(minimumSizeSubarraySum([1, 1, 1], 10)).toBe(0);
	});

	it("returns array length when only full array reaches target", () => {
		expect(minimumSizeSubarraySum([1, 2, 3, 4], 10)).toBe(4);
	});

	it("finds minimal subarray at the start", () => {
		expect(minimumSizeSubarraySum([2, 3, 1, 2, 4, 3], 7)).toBe(2);
	});

	it("finds minimal subarray in the middle", () => {
		expect(minimumSizeSubarraySum([1, 4, 4], 4)).toBe(1);
	});

	it("returns 1 when single element meets target", () => {
		expect(minimumSizeSubarraySum([5, 1, 1, 1], 5)).toBe(1);
	});

	it("handles multiple valid windows and picks minimum length", () => {
		expect(minimumSizeSubarraySum([1, 1, 1, 2, 2, 2], 5)).toBe(2);
	});

	it("finds minimal subarray near the end", () => {
		expect(minimumSizeSubarraySum([1, 1, 1, 1, 1, 1, 6], 8)).toBe(2);
	});
});
