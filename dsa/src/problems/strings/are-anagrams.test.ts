import { describe, expect, it } from "vitest";
import { areAnagrams } from "./are-anagrams";

describe("Are Anagrams", () => {
	it("returns true for a simple anagram pair", () => {
		expect(areAnagrams("listen", "silent")).toBe(true);
	});

	it("returns true for anagrams with repeated characters", () => {
		expect(areAnagrams("aabbcc", "abcabc")).toBe(true);
	});

	it("returns false when lengths differ", () => {
		expect(areAnagrams("abcd", "abc")).toBe(false);
	});

	it("returns false when character counts differ despite same letters", () => {
		expect(areAnagrams("aabbc", "abbcc")).toBe(false);
	});

	it("is case-sensitive by design", () => {
		expect(areAnagrams("Listen", "Silent")).toBe(false);
	});
});
