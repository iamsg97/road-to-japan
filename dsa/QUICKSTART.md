# Quick Start Guide 🚀

## Getting Started in 3 Minutes

### 1. Install Dependencies (Already Done! ✅)
```bash
npm install
```

### 2. Try Running the Tests
```bash
npm test
```

You should see all example tests passing with performance benchmarks!

### 3. Create Your First Problem

```bash
npm run new
```

Answer the prompts:
- Problem name: `valid-anagram`
- Category: `strings`
- Difficulty: `easy`
- Description: `Check if two strings are anagrams`

This will generate:
- `src/problems/strings/valid-anagram.ts`
- `src/problems/strings/valid-anagram.test.ts`

### 4. Implement Your Solution

Edit `src/problems/strings/valid-anagram.ts`:

```typescript
export function validAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  
  const count = new Map<string, number>();
  
  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }
  
  for (const char of t) {
    const val = count.get(char);
    if (!val) {
      return false;
    }
    count.set(char, val - 1);
  }
  
  return true;
}
```

### 5. Write Tests

Edit `src/problems/strings/valid-anagram.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { validAnagram } from './valid-anagram';

describe('Valid Anagram', () => {
  it('should return true for valid anagrams', () => {
    expect(validAnagram('anagram', 'nagaram')).toBe(true);
    expect(validAnagram('listen', 'silent')).toBe(true);
  });
  
  it('should return false for invalid anagrams', () => {
    expect(validAnagram('rat', 'car')).toBe(false);
    expect(validAnagram('hello', 'world')).toBe(false);
  });
});
```

### 6. Run Your Tests

```bash
npm test valid-anagram
```

### 7. Debug (If Needed)

1. Open `valid-anagram.test.ts` in VS Code
2. Set a breakpoint by clicking left of line number
3. Press `F5` or go to Run & Debug panel
4. Select "Debug Current Test File"
5. Step through your code!

## Daily Practice Workflow

### Morning Routine
```bash
# Start with a fresh problem
npm run new

# Work on your solution
code src/problems/[category]/[problem].ts

# Run tests in watch mode
npm test:watch [problem]

# Benchmark different approaches
# (Add benchmark code in your test file)
```

### Evening Review
```bash
# Check all tests still pass
npm test

# Format your code
npm run format

# Review coverage
npm test:coverage
```

## Useful Commands Cheat Sheet

| Command | What It Does |
|---------|-------------|
| `npm run new` | Create new problem template |
| `npm test` | Run all tests once |
| `npm test:watch` | Run tests in watch mode (auto-rerun on changes) |
| `npm test:ui` | Open beautiful test UI in browser |
| `npm test [name]` | Run specific test file |
| `npm run format` | Auto-format all code |
| `npm run lint` | Check for code issues |
| `F5` in VS Code | Debug current test file |

## Tips for Maximum Efficiency

1. **Use Watch Mode**: `npm test:watch` auto-runs tests when you save
2. **Test UI is Amazing**: `npm test:ui` gives you a visual interface
3. **Debug Freely**: Set breakpoints and press F5 to step through code
4. **Benchmark Everything**: Compare your solutions' performance
5. **Start Simple**: Brute force first, optimize later
6. **Edge Cases Matter**: Test empty inputs, single elements, duplicates

## Example Problems to Try Next

### Easy
- Valid Palindrome
- Contains Duplicate
- Best Time to Buy and Sell Stock
- Valid Parentheses

### Medium
- Group Anagrams
- Product of Array Except Self
- 3Sum
- Container With Most Water

### Hard
- Median of Two Sorted Arrays
- Trapping Rain Water
- Merge k Sorted Lists

## Need Help?

Check the full `README.md` for detailed documentation on:
- Using test helpers
- Benchmarking utilities
- Data structure helpers
- Complete API reference

---

**Happy Coding! 頑張って！🎌**
