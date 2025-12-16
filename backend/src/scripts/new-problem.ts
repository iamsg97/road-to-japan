import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const problemName = process.argv[2];

if (!problemName) {
  console.error('❌ Please provide a problem name: pnpm new <problem-name>');
  console.error('   Example: pnpm new promise-all');
  process.exit(1);
}

const problemsDir = join(import.meta.dirname, '..', 'problems');
const solutionFile = join(problemsDir, `${problemName}.ts`);
const testFile = join(problemsDir, `${problemName}.test.ts`);

const solutionTemplate = `/**
 * Problem: ${problemName}
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

export function solution() {
  // TODO: Implement your solution
  throw new Error('Not implemented');
}
`;

const testTemplate = `import { describe, it, expect } from 'vitest';
import { solution } from './${problemName}.js';

describe('${problemName}', () => {
  it('should pass basic test', () => {
    // TODO: Add your test cases
    expect(true).toBe(true);
  });

  it.todo('add more test cases');
});
`;

async function createProblem() {
  try {
    await mkdir(problemsDir, { recursive: true });

    await writeFile(solutionFile, solutionTemplate);
    await writeFile(testFile, testTemplate);

    console.log(`✅ Created new problem: ${problemName}`);
    console.log(`   📝 Solution: src/problems/${problemName}.ts`);
    console.log(`   🧪 Tests:    src/problems/${problemName}.test.ts`);
    console.log('');
    console.log('🚀 Run tests with: pnpm test');
  } catch (error) {
    console.error('❌ Error creating problem:', error);
    process.exit(1);
  }
}

void createProblem();
