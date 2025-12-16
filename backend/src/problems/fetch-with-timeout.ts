/**
 * Problem: fetch-with-timeout
 *
 * Description:
 * Build a cancellable fetch without timeout
 *
 * Requirements:
 * Start a fetch(url, { signal: controller.signal }).
 * If timeoutMs elapses before the fetch settles, abort it and reject with a TimeoutError.
 * If an external signal is provided:
 *  link it to your internal AbortController so that external abort also cancels the fetch.
 *  Make sure you never leak timers (timeouts cleared in all paths).
 * Write a usage snippet that:
 *  starts fetchWithTimeout
 *  cancels it via external AbortController before timeout
 *  logs which one “won”: timeout vs external cancel vs success.

 *
 * Examples:
 * TODO: Add examples
 */

class TimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TimeoutError';
  }
}

export async function solution(
  url: string,
  { timeoutMs = 2000, signal }: { timeoutMs?: number; signal?: AbortSignal } = {}
) {
  const controller = new AbortController();
  if (signal) {
    if (signal.aborted) {
      // the external signal is already timed out
      controller.abort(new TimeoutError('External abort'));
    } else {
      signal.addEventListener(
        'abort',
        () => {
          controller.abort(new TimeoutError('External abort'));
        },
        { once: true, signal } // auto remove event after 1st execution, auto removes when external signal aborts -> prevents leaks
      );
    }
  }
  let timeOutId: ReturnType<typeof setTimeout> | undefined;
  try {
    timeOutId = setTimeout(() => {
      controller.abort(new TimeoutError('Server timed out'));
    }, timeoutMs);
    const response = await fetch(url, { signal: controller.signal });
    const data = await response.json();
    // clear any timeout
    clearTimeout(timeOutId);
    return data;
  } catch (error_) {
    clearTimeout(timeOutId);
    if (error_ instanceof Error && error_.name === 'AbortError') {
      // if abort error, check if the reason of aborting is custom, which is the timeout error in this case then handle that separately
      const reason = controller.signal.reason;
      if (reason instanceof TimeoutError) {
        console.error('🚀 ~ Timeout Error ~ solution ~ reason:', reason);
        throw reason;
      } else throw error_;
    }
    console.error('🚀 ~ solution ~ error_:', error_);
    throw error_;
  }
}

function solutionWithRace(url: string, timeoutMs: number) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeoutMs)),
  ]);
}
