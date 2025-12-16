import { describe, expect, it } from 'vitest';
import { solution as mapWithLimit } from './map-with-limit.js';

describe('map-with-limit', () => {
  // Helper to create a delayed async function
  const createDelayedFn = <T, R>(fn: (input: T) => R, delayMs: number) => {
    return async (input: T): Promise<R> => {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      return fn(input);
    };
  };

  describe('basic functionality', () => {
    it('should return results in correct order', async () => {
      const inputs = [1, 2, 3, 4, 5];
      const asyncDouble = createDelayedFn((n: number) => n * 2, 10);

      const results = await mapWithLimit(inputs, 2, asyncDouble);

      expect(results).toEqual([2, 4, 6, 8, 10]);
    });

    it('should handle empty array', async () => {
      const results = await mapWithLimit([], 2, async (x: number) => x * 2);
      expect(results).toEqual([]);
    });

    it('should handle single element', async () => {
      const results = await mapWithLimit([5], 2, async (x) => x * 2);
      expect(results).toEqual([10]);
    });

    it('should work when limit is greater than array length', async () => {
      const inputs = [1, 2, 3];
      const results = await mapWithLimit(inputs, 10, async (x) => x * 2);
      expect(results).toEqual([2, 4, 6]);
    });

    it('should work with limit of 1 (sequential)', async () => {
      const inputs = [1, 2, 3];
      const results = await mapWithLimit(inputs, 1, async (x) => x * 2);
      expect(results).toEqual([2, 4, 6]);
    });
  });

  describe('concurrency limiting', () => {
    it('should never exceed the concurrency limit', async () => {
      const inputs = [1, 2, 3, 4, 5, 6];
      const limit = 2;
      let currentConcurrency = 0;
      let maxConcurrency = 0;

      const trackingFn = async (input: number) => {
        currentConcurrency++;
        maxConcurrency = Math.max(maxConcurrency, currentConcurrency);
        console.log(
          `[START] Input ${input} | Current: ${currentConcurrency} | Max: ${maxConcurrency}`
        );

        await new Promise((resolve) => setTimeout(resolve, 50));

        console.log(`[END]   Input ${input} | Current: ${currentConcurrency - 1}`);
        currentConcurrency--;
        return input * 2;
      };

      const results = await mapWithLimit(inputs, limit, trackingFn);

      console.log(`\n✅ Results: [${results}]`);
      console.log(`📊 Max concurrency observed: ${maxConcurrency} (limit was ${limit})`);

      expect(results).toEqual([2, 4, 6, 8, 10, 12]);
      expect(maxConcurrency).toBeLessThanOrEqual(limit);
    });

    it('should process tasks faster with higher concurrency', async () => {
      const inputs = [1, 2, 3, 4];
      const delayMs = 50;

      const asyncFn = async (x: number) => {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        return x;
      };

      // Sequential (limit = 1)
      const startSeq = Date.now();
      await mapWithLimit(inputs, 1, asyncFn);
      const seqTime = Date.now() - startSeq;

      // Parallel (limit = 4)
      const startPar = Date.now();
      await mapWithLimit(inputs, 4, asyncFn);
      const parTime = Date.now() - startPar;

      console.log(`Sequential (limit=1): ${seqTime}ms`);
      console.log(`Parallel (limit=4): ${parTime}ms`);

      // Sequential should take ~4x longer than parallel
      expect(seqTime).toBeGreaterThan(parTime * 2);
    });
  });

  describe('order preservation with varying delays', () => {
    it('should preserve order even when later tasks finish first', async () => {
      const inputs = [1, 2, 3, 4];
      // Delays: 1->100ms, 2->10ms, 3->50ms, 4->5ms
      // Task 2 and 4 finish faster, but results should still be in order
      const delays: Record<number, number> = { 1: 100, 2: 10, 3: 50, 4: 5 };
      const completionOrder: number[] = [];

      const asyncFn = async (input: number) => {
        await new Promise((resolve) => setTimeout(resolve, delays[input]));
        completionOrder.push(input);
        console.log(`Task ${input} completed (delay was ${delays[input]}ms)`);
        return input * 10;
      };

      const results = await mapWithLimit(inputs, 4, asyncFn);

      console.log(`\nCompletion order: [${completionOrder}]`);
      console.log(`Results order:    [${results}]`);

      // Results must be in input order, not completion order
      expect(results).toEqual([10, 20, 30, 40]);
      // Completion order will be different (4, 2, 3, 1 roughly)
      expect(completionOrder).not.toEqual([1, 2, 3, 4]);
    });
  });

  describe('error handling (fail-fast)', () => {
    it('should reject immediately when a task fails', async () => {
      const inputs = [1, 2, 3, 4, 5];
      const completedTasks: number[] = [];

      const asyncFn = async (input: number) => {
        await new Promise((resolve) => setTimeout(resolve, input * 20));
        if (input === 3) {
          throw new Error(`Task ${input} failed!`);
        }
        completedTasks.push(input);
        return input * 2;
      };

      await expect(mapWithLimit(inputs, 2, asyncFn)).rejects.toThrow('Task 3 failed!');

      console.log(`Completed before failure: [${completedTasks}]`);
    });

    it('should reject with the first error encountered', async () => {
      const inputs = [1, 2, 3];

      const asyncFn = async (input: number) => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        throw new Error(`Error from task ${input}`);
      };

      await expect(mapWithLimit(inputs, 3, asyncFn)).rejects.toThrow(/Error from task/);
    });
  });

  describe('visual debugging - timeline view', () => {
    it('should show task execution timeline', async () => {
      const inputs = ['A', 'B', 'C', 'D', 'E', 'F'];
      const limit = 2;
      const startTime = Date.now();
      const timeline: string[] = [];

      const log = (msg: string) => {
        const elapsed = Date.now() - startTime;
        const entry = `[${elapsed.toString().padStart(4)}ms] ${msg}`;
        timeline.push(entry);
        console.log(entry);
      };

      const asyncFn = async (input: string) => {
        log(`▶️  START ${input}`);
        await new Promise((resolve) => setTimeout(resolve, 50));
        log(`✅ END   ${input}`);
        return input.toLowerCase();
      };

      const results = await mapWithLimit(inputs, limit, asyncFn);

      console.log('\n📊 TIMELINE SUMMARY:');
      console.log('─'.repeat(40));
      for (const entry of timeline) {
        console.log(entry);
      }
      console.log('─'.repeat(40));
      console.log(`Results: [${results}]`);

      expect(results).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });
  });
});
