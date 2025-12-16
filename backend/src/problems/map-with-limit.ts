/**
 * Problem: map-with-limit
 *
 * Description:
 * Implement a function mapWithLimit that works like Promise.all but limits the number of concurrent asynchronous operations.
 *
 * Requirements:
 * Inputs: An array of data inputs, a number limit (max concurrency), and an async function iteratee.
 * Output: A Promise that resolves to an array of results.
 * Ordering: The results array must match the order of the inputs array (index 0 input -> index 0 result), regardless of which task finishes first.
 * Error Handling: If any task fails, the entire operation should reject immediately (Fail Fast behavior, similar to Promise.all).
 * Constraints: Do NOT use external libraries like bluebird or p-limit. Use native JS/TS Promises or async/await.
 *
 * Examples:
 * TODO: Add examples
 * ```ts
 * const inputs = [1, 2, 3, 4, 5];
 * const asyncDouble = (num) => new Promise(resolve => setTimeout(() => resolve(num * 2), num * 100));
 * mapWithLimit(inputs, 2, asyncDouble).then(console.log);
 * // Output: [2, 4, 6, 8, 10]
 * // (But only 2 tasks run at a time)
 * ```
 */
export async function solution<T, R>(
  inputs: T[],
  limit: number,
  iteratee: (input: T) => Promise<R>
): Promise<R[]> {
  const n = inputs.length;
  const results: R[] = new Array(n);
  const actualLimit = Math.min(limit, n);
  const activeWorkers = [];
  let currI = 0;
  const worker = async () => {
    while (currI < n) {
      const i = currI;
      currI++;
      try {
        const result = await iteratee(inputs[i]); // execute the AF with the inputs in order
        results[i] = result; // store the result in order
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };
  for (let w = 0; w < actualLimit; w++) {
    // each time actual limit numbers of workers will run
    activeWorkers.push(worker());
  }
  return Promise.all(activeWorkers).then(() => results);
}
