# Pair Programming Practice Framework

A TypeScript + Node.js framework for practicing coding interview problems.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run tests in watch mode (auto-reruns on save)
pnpm test

# Run tests once
pnpm test:run

# Create a new problem
pnpm new <problem-name>
```

## Workflow

### 1. Create a new problem
```bash
pnpm new promise-chain
```

This creates two files:
- `src/problems/promise-chain.ts` - Your solution file
- `src/problems/promise-chain.test.ts` - Test file

### 2. Start watch mode
```bash
pnpm test
```

Tests auto-rerun when you save any file.

### 3. Solve the problem
Edit your solution file, save, and watch tests run automatically.

### 4. Run a single file directly
```bash
pnpm run src/problems/example-async.ts
```

## Project Structure

```
src/
  problems/           # All your practice problems
    example-async.ts      # Example solution
    example-async.test.ts # Example tests
    your-problem.ts       # Your solutions
    your-problem.test.ts  # Your tests
  scripts/
    new-problem.ts    # Problem generator script
```

## Test Utilities

Vitest provides useful test utilities:

```typescript
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mocking
const mockFn = vi.fn();
vi.spyOn(object, 'method');

// Async testing
await expect(asyncFn()).resolves.toBe(value);
await expect(asyncFn()).rejects.toThrow('error');

// Timers (for testing setTimeout, setInterval)
vi.useFakeTimers();
vi.advanceTimersByTime(1000);
vi.useRealTimers();

// Skip/focus tests
it.skip('skipped test', () => {});
it.only('focused test', () => {});
it.todo('not implemented yet');
```

## Tips

- Focus on one problem at a time
- Write tests first (TDD style) or use provided tests
- Use `it.todo()` to plan test cases
- Use `it.only()` to focus on a single test
- The example problem demonstrates async/await and retry patterns

Happy coding! 🚀
