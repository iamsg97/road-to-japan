/**
 * Problem: Longest Palindromic Substring
 * Difficulty: Medium
 *
 * Given a string s, return the longest in s.
 * @deprecated
 */

export function longestPalindromicSubstringDeprecated(s: string): string {
  for (let length = s.length; length > 0; length--) {
    for (let start = 0; start <= s.length - length; start++) {
      const substring = s.substring(start, start + length);
      if (isValidPalindrome(substring)) {
        return substring;
      }
    }
  }
  return '';
}

export function longestPalindromicSubstring(s: string): string {
  let maxLeft = 0;
  let maxRight = 0;
  for (let i = 0; i < s.length; i++) {
    // find out the possible palindrome considering event length
    const [left1, right1] = expandAroundCenter(s, i, i);
    // find out the possible palindrome considering odd length
    const [left2, right2] = expandAroundCenter(s, i, i + 1);

    // find the maximum of the two palindromes
    const length1 = right1 - left1;
    const length2 = right2 - left2;

    const [left, right] = length2 > length1 ? [left2, right2] : [left1, right1];

    // update the max length
    if (right - left > maxRight - maxLeft) {
      maxRight = right!;
      maxLeft = left!;
    }
  }

  return s.substring(maxLeft, maxRight);
}

/**
 * Expands around the center of a potential palindrome and returns the boundaries.
 *
 * @param s - The input string to search for palindromes
 * @param start - The starting index for expansion (left boundary)
 * @param end - The ending index for expansion (right boundary)
 * @returns A tuple containing exactly 2 numbers: [leftBoundary, rightBoundary] representing the start and end indices of the palindrome
 */
function expandAroundCenter(s: string, start: number, end: number): Array<number> {
  let left = start;
  let right = end;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return [left + 1, right];
}

function isValidPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
