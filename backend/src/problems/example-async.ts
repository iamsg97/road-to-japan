/**
 * Problem: example-async
 *
 * Description:
 * This is an example problem to demonstrate the framework.
 * Implement a function that fetches data with a delay.
 *
 * Requirements:
 * - Function should return a promise that resolves after the given delay
 * - The resolved value should be the data passed in
 *
 * Examples:
 * await delayedFetch('hello', 100) // returns 'hello' after 100ms
 */

export async function delayedFetch<T>(data: T, delayMs: number): Promise<T> {
  // TODO: Implement your solution
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delayMs);
  });
}

/**
 * Bonus: Implement a function that retries a failing async operation
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxRetries: number,
  _delayMs: number = 100
): Promise<T> {
  // TODO: Implement retry logic
  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, _delayMs));
      }
    }
  }

  throw lastError;
}
