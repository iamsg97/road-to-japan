import { describe, expect, it } from 'vitest';
import { groupAnagrams } from './group-anagrams';

describe('Group Anagrams', () => {
  it('should group anagrams together - example 1', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const result = groupAnagrams(input);

    // Sort each group and the result array for consistent comparison
    const sortedResult = result.map((group) => group.sort()).sort();
    const expected = [['ate', 'eat', 'tea'].sort(), ['bat'].sort(), ['nat', 'tan'].sort()].sort();

    expect(sortedResult).toEqual(expected);
  });

  it('should handle empty string', () => {
    const input = [''];
    const result = groupAnagrams(input);
    expect(result).toEqual([['']]);
  });

  it('should handle single character strings', () => {
    const input = ['a'];
    const result = groupAnagrams(input);
    expect(result).toEqual([['a']]);
  });

  it('should handle multiple single character strings', () => {
    const input = ['a', 'b', 'a'];
    const result = groupAnagrams(input);
    const sortedResult = result.map((group) => group.sort()).sort();
    const expected = [['a', 'a'].sort(), ['b'].sort()].sort();
    expect(sortedResult).toEqual(expected);
  });

  it('should group anagrams with different lengths', () => {
    const input = ['abc', 'bca', 'cab', 'xyz', 'zyx', 'yxz'];
    const result = groupAnagrams(input);
    const sortedResult = result.map((group) => group.sort()).sort();
    const expected = [['abc', 'bca', 'cab'].sort(), ['xyz', 'yxz', 'zyx'].sort()].sort();
    expect(sortedResult).toEqual(expected);
  });

  it('should handle strings with no anagrams', () => {
    const input = ['abc', 'def', 'ghi'];
    const result = groupAnagrams(input);
    const sortedResult = result.map((group) => group.sort()).sort();
    const expected = [['abc'], ['def'], ['ghi']].sort();
    expect(sortedResult).toEqual(expected);
  });

  it('should handle all strings being anagrams of each other', () => {
    const input = ['abc', 'bca', 'cab', 'acb'];
    const result = groupAnagrams(input);
    expect(result.length).toBe(1);
    expect(result[0].sort()).toEqual(['abc', 'acb', 'bca', 'cab'].sort());
  });

  it('should handle empty array', () => {
    const input: string[] = [];
    const result = groupAnagrams(input);
    expect(result).toEqual([]);
  });

  it('should handle strings with duplicate letters', () => {
    const input = ['aab', 'aba', 'baa', 'aaa'];
    const result = groupAnagrams(input);
    const sortedResult = result.map((group) => group.sort()).sort();
    const expected = [['aab', 'aba', 'baa'].sort(), ['aaa'].sort()].sort();
    expect(sortedResult).toEqual(expected);
  });

  it('should be case sensitive', () => {
    const input = ['Abc', 'abc', 'bca'];
    const result = groupAnagrams(input);
    // 'Abc' is not an anagram of 'abc' (case sensitive)
    expect(result.length).toBe(2);
  });

  it('should handle longer strings', () => {
    const input = ['listen', 'silent', 'enlist', 'hello', 'world'];
    const result = groupAnagrams(input);
    const sortedResult = result.map((group) => group.sort()).sort();

    // Find the group containing anagrams of 'listen'
    const listenGroup = result.find(
      (group) => group.includes('listen') || group.includes('silent') || group.includes('enlist')
    );

    expect(listenGroup?.sort()).toEqual(['enlist', 'listen', 'silent'].sort());
    expect(result.length).toBe(3); // listen/silent/enlist, hello, world
  });
});
