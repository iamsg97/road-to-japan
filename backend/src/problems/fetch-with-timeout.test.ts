import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { solution as fetchWithTimeout } from './fetch-with-timeout.js';

type FetchArgs = [input: unknown, init?: { signal?: AbortSignal }];

const makeAbortError = () => Object.assign(new Error('Aborted'), { name: 'AbortError' });

describe('fetch-with-timeout', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('resolves with JSON when fetch completes before timeout', async () => {
    const data = { ok: true };
    const fetchMock = vi.fn((...args: FetchArgs) => {
      const [, init] = args;
      // Respect abort: reject on signal abort
      return new Promise((resolve, reject) => {
        init?.signal?.addEventListener('abort', () => reject(makeAbortError()), { once: true });
        setTimeout(() => {
          const response: { json: () => Promise<typeof data> } = {
            json: async () => data,
          };
          resolve(response);
        }, 50);
      });
    });
    vi.stubGlobal('fetch', fetchMock);

    const p = fetchWithTimeout('https://example.com/api', { timeoutMs: 200 });
    await vi.advanceTimersByTimeAsync(60);
    await expect(p).resolves.toEqual(data);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    // ensure a signal was passed to fetch
    const initPassed = (fetchMock.mock.calls[0] as FetchArgs)[1];
    expect(initPassed?.signal).toBeDefined();
  });

  it('rejects with TimeoutError when fetch exceeds timeout', async () => {
    const fetchMock = vi.fn((...args: FetchArgs) => {
      const [, init] = args;
      return new Promise((_resolve, reject) => {
        // Reject with AbortError when aborted by internal controller
        init?.signal?.addEventListener('abort', () => reject(makeAbortError()), { once: true });
      });
    });
    vi.stubGlobal('fetch', fetchMock);

    const p = fetchWithTimeout('https://example.com/slow', { timeoutMs: 100 });
    // Attach a handler early to avoid unhandled rejection warnings
    p.catch(() => {});
    await vi.advanceTimersByTimeAsync(100);
    await expect(p).rejects.toMatchObject({ name: 'TimeoutError', message: 'Server timed out' });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  // Note: External abort is covered by the next test (pre-aborted).

  it('handles already-aborted external signal immediately', async () => {
    const external = new AbortController();
    external.abort();

    const fetchMock = vi.fn((...args: FetchArgs) => {
      const [, init] = args;
      return new Promise((_resolve, reject) => {
        const sig = init?.signal;
        if (sig?.aborted) {
          reject(makeAbortError());
          return;
        }
        sig?.addEventListener('abort', () => reject(makeAbortError()), { once: true });
      });
    });
    vi.stubGlobal('fetch', fetchMock);

    const p = fetchWithTimeout('https://example.com/preaborted', {
      timeoutMs: 500,
      signal: external.signal,
    });
    // Attach early catch to avoid unhandled rejection warnings
    p.catch(() => {});
    await expect(p).rejects.toMatchObject({ name: 'TimeoutError', message: 'External abort' });
  });
});
