# DSA Practice Framework 🚀

A comprehensive TypeScript framework for practicing Data Structures & Algorithms (DSA) to prepare for SDE2 interviews.

## Features ✨

- 🎯 **TypeScript First**: Full type safety and IntelliSense support
- ⚡ **Fast Testing**: Vitest for lightning-fast test execution
- 🐛 **Easy Debugging**: VS Code debug configurations included
- 📊 **Performance Benchmarking**: Built-in tools to measure and compare solutions
- 🎨 **Code Quality**: ESLint + Biome for linting and formatting
- 🏗️ **Structured Organization**: Problems organized by topic
- 🔧 **Utilities Included**: Common data structures and test helpers

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Example Tests

```bash
npm test
```

### 3. Create a New Problem

```bash
npm run new
```

Follow the interactive prompts to generate a new problem template.

## Project Structure

```
dsa/
├── src/
│   ├── problems/           # DSA problems organized by topic
│   │   ├── arrays/
│   │   ├── linked-lists/
│   │   ├── trees/
│   │   └── ...
│   └── utils/              # Helper utilities
│       ├── test-helpers.ts # Test utilities
│       ├── benchmark.ts    # Performance benchmarking
│       └── data-structures.ts # Common data structures
├── scripts/
│   └── new-problem.ts      # Problem template generator
└── ...config files
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm test:watch` | Run tests in watch mode |
| `npm test:ui` | Open Vitest UI |
| `npm test:coverage` | Generate coverage report |
| `npm run lint` | Lint all files |
| `npm run lint:fix` | Lint and auto-fix issues |
| `npm run format` | Format code with Biome |
| `npm run check` | Run Biome checks and fixes |
| `npm run typecheck` | Type check without emitting |
| `npm run new` | Create new problem template |

## Writing Solutions

### 1. Problem File Example

```typescript
/**
 * Problem: Two Sum
 * Difficulty: Easy
 * 
 * Description of the problem...
 */

export function twoSum(nums: number[], target: number): number[] {
  // Your solution here
}
```

### 2. Test File Example

```typescript
import { describe, it, expect } from 'vitest';
import { twoSum } from './two-sum';

describe('Two Sum', () => {
  it('should find two numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
```

### 3. Using Test Helpers

```typescript
import { runTestCases, arraysEqual } from '@utils/test-helpers';

runTestCases(
  twoSum,
  [
    { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
    { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
  ]
);
```

### 4. Performance Benchmarking

```typescript
import { compareBenchmarks, printBenchmarkResults } from '@utils/benchmark';

const results = compareBenchmarks([
  { name: 'Solution 1', fn: () => solution1(data) },
  { name: 'Solution 2', fn: () => solution2(data) },
], 1000);

printBenchmarkResults(results);
```

## Debugging

### VS Code Debugging

Three debug configurations are provided:

1. **Debug Current Test File**: Debug the currently open test file
2. **Debug All Tests**: Debug all tests
3. **Debug Current Problem**: Debug all tests in the current problem directory

Press `F5` or use the Debug panel to start debugging.

### Setting Breakpoints

1. Click on the left margin next to line numbers to set breakpoints
2. Open a test file
3. Press `F5` to start debugging
4. Code execution will pause at breakpoints

## Utility Modules

### Data Structures (`@utils/data-structures`)

Common data structures used in DSA:

- `ListNode` - Linked list node
- `TreeNode` - Binary tree node
- `NaryTreeNode` - N-ary tree node
- `GraphNode` - Graph node
- Helper functions: `createLinkedList`, `createBinaryTree`, etc.

### Test Helpers (`@utils/test-helpers`)

- `runTestCases` - Run multiple test cases
- `deepEqual` - Deep equality comparison
- `arraysEqual` - Array equality (order matters)
- `arraysEqualUnordered` - Array equality (order doesn't matter)

### Benchmark (`@utils/benchmark`)

- `benchmark` - Measure function performance
- `compareBenchmarks` - Compare multiple implementations
- `printBenchmarkResults` - Pretty print results
- `measureComplexity` - Empirical time complexity analysis

## Code Quality

### Linting

```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

### Formatting

```bash
npm run format      # Format all files
npm run check       # Run all Biome checks
```

### Type Checking

```bash
npm run typecheck
```

## Tips for Interview Prep

1. **Start with Easy**: Begin with easy problems to get comfortable with the framework
2. **Time Yourself**: Use benchmarking to improve solution efficiency
3. **Multiple Solutions**: Implement brute force first, then optimize
4. **Test Edge Cases**: Always test empty inputs, single elements, and large inputs
5. **Debug Often**: Use VS Code debugger to step through complex logic
6. **Review Complexity**: Document time and space complexity in comments

## Example Problems Included

- **Arrays**: Two Sum (with hash map and brute force solutions)
- **Linked Lists**: Reverse Linked List (iterative and recursive)
- **Trees**: Maximum Depth of Binary Tree (DFS and BFS)

## Configuration Files

- `tsconfig.json` - TypeScript configuration
- `vitest.config.ts` - Vitest test configuration
- `eslint.config.js` - ESLint rules
- `biome.json` - Biome formatter configuration
- `.vscode/` - VS Code settings and debug configs

## Recommended Extensions

Install these VS Code extensions for the best experience:

- Biome
- ESLint
- Vitest

## License

MIT

---

**Good luck with your SDE2 preparation! 🎯🇯🇵**
