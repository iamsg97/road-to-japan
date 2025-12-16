import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./remove-duplicates";

describe("Remove Duplicates from Sorted Array", () => {
	it("should remove duplicates from array with 2 elements", () => {
		const nums = [1, 1, 2];
		const k = removeDuplicates(nums);

		expect(k).toBe(2);
		expect(nums.slice(0, k)).toEqual([1, 2]);
	});

	it("should remove duplicates from array with multiple duplicates", () => {
		const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
		const k = removeDuplicates(nums);

		expect(k).toBe(5);
		expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
	});

	it("should handle array with no duplicates", () => {
		const nums = [1, 2, 3, 4, 5];
		const k = removeDuplicates(nums);

		expect(k).toBe(5);
		expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
	});

	it("should handle array with single element", () => {
		const nums = [1];
		const k = removeDuplicates(nums);

		expect(k).toBe(1);
		expect(nums.slice(0, k)).toEqual([1]);
	});

	it("should handle array with all same elements", () => {
		const nums = [1, 1, 1, 1, 1];
		const k = removeDuplicates(nums);

		expect(k).toBe(1);
		expect(nums.slice(0, k)).toEqual([1]);
	});

	it("should handle array with two unique elements", () => {
		const nums = [1, 1, 2, 2];
		const k = removeDuplicates(nums);

		expect(k).toBe(2);
		expect(nums.slice(0, k)).toEqual([1, 2]);
	});

	it("should handle negative numbers", () => {
		const nums = [-3, -3, -1, 0, 0, 0, 1, 1, 2];
		const k = removeDuplicates(nums);

		expect(k).toBe(5);
		expect(nums.slice(0, k)).toEqual([-3, -1, 0, 1, 2]);
	});

	it("should handle array at minimum constraint (1 element)", () => {
		const nums = [42];
		const k = removeDuplicates(nums);

		expect(k).toBe(1);
		expect(nums[0]).toBe(42);
	});

	it("should handle array with boundary values", () => {
		const nums = [-100, -100, -50, 0, 50, 100, 100];
		const k = removeDuplicates(nums);

		expect(k).toBe(5);
		expect(nums.slice(0, k)).toEqual([-100, -50, 0, 50, 100]);
	});

	it("should handle consecutive duplicates at the end", () => {
		const nums = [1, 2, 3, 3, 3, 3];
		const k = removeDuplicates(nums);

		expect(k).toBe(3);
		expect(nums.slice(0, k)).toEqual([1, 2, 3]);
	});

	it("should handle consecutive duplicates at the beginning", () => {
		const nums = [1, 1, 1, 1, 2, 3];
		const k = removeDuplicates(nums);

		expect(k).toBe(3);
		expect(nums.slice(0, k)).toEqual([1, 2, 3]);
	});

	it("should verify the array is modified in-place", () => {
		const nums = [1, 1, 2, 3, 3];
		const originalRef = nums;
		const k = removeDuplicates(nums);

		expect(k).toBe(3);
		// Verify it's the same array reference (in-place modification)
		expect(nums).toBe(originalRef);
		expect(nums.slice(0, k)).toEqual([1, 2, 3]);
	});
});
