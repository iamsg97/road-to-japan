/**
 * Problem: retry-fetch
 *
 * Description:
 * TODO: Add problem description here
 *
 * Requirements:
 * TODO: Add requirements
 *
 * Examples:
 * TODO: Add examples
 */

export async function solution(url: string, max = 3) {
  // using recursion
  async function attempt(count = 0): Promise<unknown> {
    try {
      // Attempt to fetch the resource from the provided URL
      const response = await fetch(url);
      // Check if the HTTP response indicates success (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP Response status code: ${response.status}`);
      }
      // Parse and return the response body as JSON
      return await response.json();
    } catch (error) {
      // If we've exhausted all retry attempts (count starts at 0, so count >= max-1 means we've tried max times), throw the error
      if (count >= max - 1) throw error;
      // Calculate exponential backoff delay: 2^count seconds, capped at 20ms
      // Example: attempt 0 = 1s, attempt 1 = 2s, attempt 2 = 4s
      const delay = Math.min(2 ** count * 1000, 20); // exponential backoff & max delay to be 20s
      // Wait for the calculated delay before retrying
      await new Promise((resolve) => setTimeout(resolve, delay));
      // Recursively call attempt() with incremented count for the next retry
      return attempt(count + 1);
    }
  }
  return attempt();
}
