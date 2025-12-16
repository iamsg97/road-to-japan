import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/problems/**/*.test.ts'],
    watch: true,
    reporters: ['verbose'],
    testTimeout: 10000,
    hookTimeout: 10000,
  },
});
