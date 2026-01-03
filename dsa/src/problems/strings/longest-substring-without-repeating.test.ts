import { describe, expect, it } from "vitest";
import { longestSubstringWithoutRepeating } from "./longest-substring-without-repeating";

describe("Longest Substring Without Repeating", () => {
	it("handles empty string", () => {
		expect(longestSubstringWithoutRepeating("" as const)).toBe(0);
	});

	it("returns length 1 for single character", () => {
		expect(longestSubstringWithoutRepeating("a" as const)).toBe(1);
	});

	it("computes typical repeated pattern", () => {
		expect(longestSubstringWithoutRepeating("abcabcbb" as const)).toBe(3);
	});

	it("handles all identical characters", () => {
		expect(longestSubstringWithoutRepeating("bbbbb" as const)).toBe(1);
	});

	it("shrinks window only for duplicates in range (abba)", () => {
		expect(longestSubstringWithoutRepeating("abba" as const)).toBe(2);
	});

	it("captures mid-window reset case", () => {
		expect(longestSubstringWithoutRepeating("pwwkew" as const)).toBe(3);
	});

	it("handles interleaved repeats", () => {
		expect(longestSubstringWithoutRepeating("dvdf" as const)).toBe(3);
	});

	it("finds longer window near end", () => {
		expect(longestSubstringWithoutRepeating("tmmzuxt" as const)).toBe(5);
	});
});
