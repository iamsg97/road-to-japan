import { describe, expect, it } from 'vitest';
import { longestPalindromicSubstring } from './longest-palindromic-substring';

describe('Longest Palindromic Substring', () => {
  it('should return "bab" or "aba" for "babad"', () => {
    const result = longestPalindromicSubstring('babad');
    expect(['bab', 'aba']).toContain(result);
  });

  it('should return "bb" for "cbbd"', () => {
    expect(longestPalindromicSubstring('cbbd')).toBe('bb');
  });

  it('should return single character for single character string', () => {
    expect(longestPalindromicSubstring('a')).toBe('a');
  });

  it('should return entire string if it is a palindrome', () => {
    expect(longestPalindromicSubstring('racecar')).toBe('racecar');
  });

  it('should handle even length palindrome', () => {
    expect(longestPalindromicSubstring('abba')).toBe('abba');
  });

  it('should handle odd length palindrome', () => {
    expect(longestPalindromicSubstring('racecar')).toBe('racecar');
  });

  it('should return any single character when no palindrome exists', () => {
    const result = longestPalindromicSubstring('abc');
    expect(result.length).toBe(1);
    expect(['a', 'b', 'c']).toContain(result);
  });

  it('should handle string with all same characters', () => {
    expect(longestPalindromicSubstring('aaaa')).toBe('aaaa');
  });

  it('should handle palindrome at the beginning', () => {
    expect(longestPalindromicSubstring('abaxyz')).toBe('aba');
  });

  it('should handle palindrome at the end', () => {
    expect(longestPalindromicSubstring('xyzaba')).toBe('aba');
  });

  it('should handle palindrome in the middle', () => {
    expect(longestPalindromicSubstring('xyzabacdef')).toBe('aba');
  });

  it('should handle multiple palindromes and return longest', () => {
    const result = longestPalindromicSubstring('abacabad');
    expect(['abacaba', 'bacab']).toContain(result);
  });

  it('should handle string with numbers', () => {
    expect(longestPalindromicSubstring('12321abc')).toBe('12321');
  });

  it('should handle two character palindrome', () => {
    expect(longestPalindromicSubstring('ac')).toMatch(/^[ac]$/);
  });

  it('should handle string with mixed case letters', () => {
    expect(longestPalindromicSubstring('AbA')).toBe('A'); // Case sensitive
  });

  it('should handle longer string with embedded palindrome', () => {
    expect(longestPalindromicSubstring('civilwartestingwhetherthatnationracecar')).toBe('racecar');
  });

  it('should handle string at maximum length constraint (performance)', () => {
    const longString = `${'a'.repeat(500)}b${'a'.repeat(500)}`;
    const result = longestPalindromicSubstring(longString);
    expect(result).toBe(longString);
    expect(result.length).toBe(1001);
  });
});
