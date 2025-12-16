/**
 * Problem: limit-retry
 *
 * Description:
 * Return a function that retries fn up to maxAttempts times if it throws
 * If all attempts fail, throw the last error
 *
 * Requirements:
 * TODO: Add requirements
 *
 * Examples:
 * TODO: Add examples
 */

export function solution(fn: (...args: Array<unknown>) => void, attempts: number) {
  return (...args: Array<unknown>) => {
    let lastError = null;
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError;
  };
}
