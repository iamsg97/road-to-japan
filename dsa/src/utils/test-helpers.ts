/**
 * Test utilities for DSA problems
 */

/**
 * Interface for test case definition
 */
export interface TestCase<TInput, TOutput> {
  input: TInput;
  expected: TOutput;
  description?: string;
}

/**
 * Run multiple test cases for a function
 */
export function runTestCases<TInput, TOutput>(
  fn: (input: TInput) => TOutput,
  testCases: TestCase<TInput, TOutput>[],
  compareFn?: (actual: TOutput, expected: TOutput) => boolean
): void {
  testCases.forEach((testCase, index) => {
    const { input, expected, description } = testCase;
    const actual = fn(input);

    const isEqual = compareFn
      ? compareFn(actual, expected)
      : JSON.stringify(actual) === JSON.stringify(expected);

    if (!isEqual) {
      throw new Error(
        `Test case ${index + 1} failed${description ? `: ${description}` : ''}\n` +
          `Input: ${JSON.stringify(input)}\n` +
          `Expected: ${JSON.stringify(expected)}\n` +
          `Actual: ${JSON.stringify(actual)}`
      );
    }
  });
}

/**
 * Deep equality check for complex objects
 */
export function deepEqual<T>(a: T, b: T): boolean {
  if (a === b) {
    return true;
  }

  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!keysB.includes(key)) {
      return false;
    }

    if (!deepEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key])) {
      return false;
    }
  }

  return true;
}

/**
 * Array equality check (order matters)
 */
export function arraysEqual<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) {
    return false;
  }
  return a.every((val, index) => deepEqual(val, b[index]));
}

/**
 * Array equality check (order doesn't matter)
 */
export function arraysEqualUnordered<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) {
    return false;
  }
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return arraysEqual(sortedA, sortedB);
}
