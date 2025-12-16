import { describe, expect, it, vi } from 'vitest';
import { delayedFetch, retry } from './example-async.js';

describe('example-async', () => {
  describe('delayedFetch', () => {
    it('should return data after delay', async () => {
      const start = Date.now();
      const result = await delayedFetch('hello', 50);
      const elapsed = Date.now() - start;

      expect(result).toBe('hello');
      expect(elapsed).toBeGreaterThanOrEqual(45); // Allow some tolerance
    });

    it('should work with different data types', async () => {
      const obj = { key: 'value' };
      const result = await delayedFetch(obj, 10);
      expect(result).toEqual(obj);
    });

    it('should work with arrays', async () => {
      const arr = [1, 2, 3];
      const result = await delayedFetch(arr, 10);
      expect(result).toEqual(arr);
    });
  });

  describe('retry', () => {
    it('should return result on first success', async () => {
      const fn = vi.fn().mockResolvedValue('success');
      const result = await retry(fn, 3);

      expect(result).toBe('success');
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should retry on failure and succeed', async () => {
      const fn = vi
        .fn()
        .mockRejectedValueOnce(new Error('fail 1'))
        .mockRejectedValueOnce(new Error('fail 2'))
        .mockResolvedValue('success');

      const result = await retry(fn, 3, 10);

      expect(result).toBe('success');
      expect(fn).toHaveBeenCalledTimes(3);
    });

    it('should throw after max retries exceeded', async () => {
      const fn = vi.fn().mockRejectedValue(new Error('always fails'));

      await expect(retry(fn, 2, 10)).rejects.toThrow('always fails');
      expect(fn).toHaveBeenCalledTimes(3); // initial + 2 retries
    });
  });
});
