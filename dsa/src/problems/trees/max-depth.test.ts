import { createBinaryTree } from '@utils/data-structures';
import { describe, expect, it } from 'vitest';
import { maxDepth, maxDepthBFS } from './max-depth';

describe('Maximum Depth of Binary Tree', () => {
  describe('Recursive DFS Solution', () => {
    it('should calculate max depth correctly', () => {
      const root = createBinaryTree([3, 9, 20, null, null, 15, 7]);
      expect(maxDepth(root)).toBe(3);
    });

    it('should handle single node', () => {
      const root = createBinaryTree([1]);
      expect(maxDepth(root)).toBe(1);
    });

    it('should handle empty tree', () => {
      expect(maxDepth(null)).toBe(0);
    });

    it('should handle skewed tree', () => {
      const root = createBinaryTree([1, 2, null, 3, null]);
      expect(maxDepth(root)).toBe(3);
    });
  });

  describe('Iterative BFS Solution', () => {
    it('should calculate max depth correctly', () => {
      const root = createBinaryTree([3, 9, 20, null, null, 15, 7]);
      expect(maxDepthBFS(root)).toBe(3);
    });

    it('should handle single node', () => {
      const root = createBinaryTree([1]);
      expect(maxDepthBFS(root)).toBe(1);
    });

    it('should handle empty tree', () => {
      expect(maxDepthBFS(null)).toBe(0);
    });

    it('should match recursive solution', () => {
      const root = createBinaryTree([1, 2, 3, 4, 5, null, 6, null, null, 7]);
      expect(maxDepthBFS(root)).toBe(maxDepth(root));
    });
  });
});
