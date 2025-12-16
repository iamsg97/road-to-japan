/**
 * Performance benchmarking utilities
 */

export interface BenchmarkResult {
  name: string;
  duration: number;
  iterations: number;
  avgTime: number;
  opsPerSecond: number;
}

/**
 * Benchmark a function's performance
 */
export function benchmark<T>(name: string, fn: () => T, iterations = 1000): BenchmarkResult {
  // Warm up
  for (let i = 0; i < 10; i++) {
    fn();
  }

  // Measure
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  const end = performance.now();

  const duration = end - start;
  const avgTime = duration / iterations;
  const opsPerSecond = (iterations / duration) * 1000;

  return {
    name,
    duration,
    iterations,
    avgTime,
    opsPerSecond,
  };
}

/**
 * Compare performance of multiple functions
 */
export function compareBenchmarks<T>(
  benchmarks: Array<{ name: string; fn: () => T }>,
  iterations = 1000
): BenchmarkResult[] {
  const results = benchmarks.map((b) => benchmark(b.name, b.fn, iterations));

  // Sort by performance (fastest first)
  results.sort((a, b) => a.avgTime - b.avgTime);

  return results;
}

/**
 * Pretty print benchmark results
 */
export function printBenchmarkResults(results: BenchmarkResult[]): void {
  console.log('\n=== Benchmark Results ===\n');

  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.name}`);
    console.log(`   Average Time: ${result.avgTime.toFixed(6)} ms`);
    console.log(`   Ops/Second: ${result.opsPerSecond.toFixed(0)}`);
    console.log(
      `   Total Duration: ${result.duration.toFixed(2)} ms (${result.iterations} iterations)`
    );

    if (index === 0 && results.length > 1) {
      console.log('   ⚡ FASTEST');
    } else if (index > 0) {
      const firstResult = results[0];
      if (firstResult) {
        const slowdownFactor = result.avgTime / firstResult.avgTime;
        console.log(`   ⚠️  ${slowdownFactor.toFixed(2)}x slower than fastest`);
      }
    }
    console.log('');
  });
}

/**
 * Measure time complexity empirically
 */
export function measureComplexity<T>(
  fn: (size: number) => T,
  sizes: number[] = [100, 1000, 10000]
): void {
  console.log('\n=== Time Complexity Analysis ===\n');

  const results = sizes.map((size) => {
    const start = performance.now();
    fn(size);
    const end = performance.now();
    return { size, time: end - start };
  });

  results.forEach((result, index) => {
    console.log(`Size: ${result.size.toLocaleString()}, Time: ${result.time.toFixed(4)} ms`);

    if (index > 0) {
      const prevResult = results[index - 1];
      if (prevResult) {
        const sizeRatio = result.size / prevResult.size;
        const timeRatio = result.time / prevResult.time;

        let complexity = '';
        if (timeRatio < sizeRatio * 0.5) {
          complexity = 'Better than O(n)';
        } else if (timeRatio < sizeRatio * 1.5) {
          complexity = '≈ O(n)';
        } else if (timeRatio < sizeRatio * sizeRatio * 1.5) {
          complexity = '≈ O(n log n) or O(n^1.x)';
        } else {
          complexity = '≈ O(n²) or worse';
        }

        console.log(`  Ratio: ${sizeRatio}x size → ${timeRatio.toFixed(2)}x time (${complexity})`);
      }
    }
  });
  console.log('');
}
