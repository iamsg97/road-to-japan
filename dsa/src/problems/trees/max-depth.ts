/**
 * Problem: Maximum Depth of Binary Tree
 * Difficulty: Easy
 *
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along
 * the longest path from the root node down to the farthest leaf node.
 */

import type { TreeNode } from '@utils/data-structures';

/**
 * Recursive DFS solution
 * Time: O(n), Space: O(h) where h is height
 */
export function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

/**
 * Iterative BFS solution using level-order traversal
 * Time: O(n), Space: O(w) where w is max width
 */
export function maxDepthBFS(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let depth = 0;
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node) {
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }

    depth++;
  }

  return depth;
}
