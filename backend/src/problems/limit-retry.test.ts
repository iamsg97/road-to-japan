import { describe, expect, it } from 'vitest';
import { solution as retry } from './limit-retry.js';

describe('limit-retry', () => {
  it('succeeds on third attempt after two failures', () => {
    let attempts = 0;
    const unreliable = retry(() => {
      attempts += 1;
      if (attempts < 3) throw new Error('Failed');
      return 'Success';
    }, 3);

    expect(unreliable()).toBe('Success');
    expect(attempts).toBe(3);
  });

  it('succeeds immediately without extra retries', () => {
    let attempts = 0;
    const fn = retry(() => {
      attempts += 1;
      return 'OK';
    }, 5);

    expect(fn()).toBe('OK');
    expect(attempts).toBe(1);
  });

  it('throws the last error after exhausting attempts', () => {
    let attempts = 0;
    const fn = retry(() => {
      attempts += 1;
      throw new Error(`fail-${attempts}`);
    }, 3);

    expect(fn).toThrowError('fail-3');
    expect(attempts).toBe(3);
  });

  it('propagates non-Error throwables (e.g., string)', () => {
    let attempts = 0;
    const fn = retry(() => {
      attempts += 1;
      throw 'boom';
    }, 2);

    expect(fn).toThrow('boom');
    expect(attempts).toBe(2);
  });

  it('passes arguments through to the wrapped function', () => {
    const fn = retry((a: number, b: number) => a + b, 2);
    expect(fn(2, 3)).toBe(5);
  });
});
