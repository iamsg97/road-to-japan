/**
 * Problem: fetch-batch
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

export async function solution(urls: Array<URL>, concurrency = 5) {
  const results: string[] = [];
  const executing = new Set();
  for (let i = 0; i < urls.length; i++) {
    const promise = fetch(urls[i])
      .then((response) => response.json())
      .then((data) => {
        results[i] = data as string;
        executing.delete(promise);
      })
      .catch((error_) => {
        console.error('🚀 ~ solution ~ error_:', error_);
      });
    executing.add(promise);
    if (executing.size >= concurrency) await Promise.race(executing);
  }
  await Promise.all(executing);
  return results;
}
