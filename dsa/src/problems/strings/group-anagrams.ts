/**
 * Problem: Group Anagrams
 * Difficulty: Medium
 *
 * Given an array of strings strs, group the together. You can return the answer in any order.
 */

/**
 *
 * @param word the word for which we want to know the counts of characters
 * @returns a string like 1#0#0#1#.. that represents character frequencies
 * @description Some learnings
 * We can create a new array of length 26 and initialize all places with : `new Array<number>(26).fill(0)`
 * We can use `charCodeAt` on a string to get the unicode ASCII value of that. It normally accepts a parameter, which is the zero based index of the character, here we have only one character so we can use 0
 * Then `char.charCodeAt(0) - 97` to get the ASCII value of the current character since all the chars under consideration are lowercase english alphabets, once we get the ASCII in int we can increment it for frequency calculation
 */
function createFrequencyString(word: string): string {
  // let ans = '';
  // const alphabets = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));
  const alphabets = new Array<number>(26).fill(0);
  // const freq = new Map<string, number>(alphabets.map(alphabet => [alphabet, 0]));
  for (const char of word) {
    alphabets[char.charCodeAt(0) - 97]++;
  }
  // for (const value of freq.values()) {
  //     ans += values + '#'
  // }
  return alphabets.join('#');
}

export function groupAnagrams(strs: Array<string>): Array<Array<string>> {
  const record = new Map<string, Array<string>>();
  for (const word of strs) {
    const freqStr = createFrequencyString(word);
    record.set(freqStr, record.has(freqStr) ? [...(record.get(freqStr) ?? ''), word] : [word]);
  }
  const group = new Array<Array<string>>();
  for (const v of record.values()) {
    group.push(v);
  }
  return group;
}
