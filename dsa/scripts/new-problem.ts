#!/usr/bin/env ts-node

/**
 * Script to generate a new problem template
 * Usage: npm run new
 */

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query: string): Promise<string> {
	return new Promise((resolve) => {
		rl.question(query, resolve);
	});
}

const CATEGORIES = [
	"arrays",
	"strings",
	"linked-lists",
	"trees",
	"graphs",
	"dynamic-programming",
	"sorting",
	"searching",
	"other",
];

const DIFFICULTIES = ["easy", "medium", "hard"];

async function main() {
	console.log("🚀 Create a new DSA problem\n");

	// Get problem name
	const problemName = await question(
		"Problem name (kebab-case, e.g., two-sum): ",
	);
	if (!problemName || !/^[a-z0-9-]+$/.test(problemName)) {
		console.error("❌ Invalid problem name. Use kebab-case (e.g., two-sum)");
		process.exit(1);
	}

	// Get category
	console.log(`\nCategories: ${CATEGORIES.join(", ")}`);
	const category = await question("Category: ");
	if (!CATEGORIES.includes(category)) {
		console.error(`❌ Invalid category. Choose from: ${CATEGORIES.join(", ")}`);
		process.exit(1);
	}

	// Get difficulty
	console.log(`\nDifficulties: ${DIFFICULTIES.join(", ")}`);
	const difficulty = await question("Difficulty: ");
	if (!DIFFICULTIES.includes(difficulty)) {
		console.error(
			`❌ Invalid difficulty. Choose from: ${DIFFICULTIES.join(", ")}`,
		);
		process.exit(1);
	}

	// Get description
	const description = await question("\nBrief description: ");

	const capitalizedDifficulty =
		difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

	// Generate file paths
	const categoryDir = path.join(__dirname, "..", "src", "problems", category);
	const problemFile = path.join(categoryDir, `${problemName}.ts`);
	const testFile = path.join(categoryDir, `${problemName}.test.ts`);

	// Create category directory if it doesn't exist
	if (!fs.existsSync(categoryDir)) {
		fs.mkdirSync(categoryDir, { recursive: true });
	}

	// Check if files already exist
	if (fs.existsSync(problemFile) || fs.existsSync(testFile)) {
		console.error(`❌ Files already exist for problem: ${problemName}`);
		process.exit(1);
	}

	// Generate problem file content
	const problemContent = `/**
 * Problem: ${problemName
		.split("-")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ")}
 * Difficulty: ${capitalizedDifficulty}
 * 
 * ${description}
 */

export function ${problemName.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}() {
  // TODO: Implement solution
}
`;

	// Generate test file content
	const testContent = `import { describe, it, expect } from 'vitest';
import { ${problemName.replace(/-([a-z])/g, (_, c) => c.toUpperCase())} } from './${problemName}';

describe('${problemName
		.split("-")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ")}', () => {
  it('should work for basic test case', () => {
    // TODO: Add test cases
    expect(true).toBe(true);
  });
});
`;

	// Write files
	fs.writeFileSync(problemFile, problemContent);
	fs.writeFileSync(testFile, testContent);

	console.log("\n✅ Files created successfully!");
	console.log(`   📄 ${problemFile}`);
	console.log(`   🧪 ${testFile}`);
	console.log("\n💡 Next steps:");
	console.log(`   1. Implement your solution in ${problemName}.ts`);
	console.log(`   2. Write test cases in ${problemName}.test.ts`);
	console.log(`   3. Run tests: npm test ${problemName}`);

	rl.close();
}

main().catch((error) => {
	console.error("❌ Error:", error);
	rl.close();
	process.exit(1);
});
