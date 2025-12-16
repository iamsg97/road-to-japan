/**
 * Common data structures for DSA problems
 */

/**
 * Linked List Node
 */
export class ListNode<T = number> {
  val: T;
  next: ListNode<T> | null;

  constructor(val: T, next: ListNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Binary Tree Node
 */
export class TreeNode<T = number> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(val: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * N-ary Tree Node
 */
export class NaryTreeNode<T = number> {
  val: T;
  children: NaryTreeNode<T>[];

  constructor(val: T, children: NaryTreeNode<T>[] = []) {
    this.val = val;
    this.children = children;
  }
}

/**
 * Graph Node
 */
export class GraphNode<T = number> {
  val: T;
  neighbors: GraphNode<T>[];

  constructor(val: T, neighbors: GraphNode<T>[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

/**
 * Helper: Create linked list from array
 */
export function createLinkedList<T>(arr: T[]): ListNode<T> | null {
  if (arr.length === 0) {
    return null;
  }

  const firstVal = arr[0];
  if (firstVal === undefined) {
    return null;
  }

  const dummy = new ListNode<T>(firstVal);
  let current = dummy;

  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    if (val !== undefined) {
      current.next = new ListNode<T>(val);
      current = current.next;
    }
  }

  return dummy;
}

/**
 * Helper: Convert linked list to array
 */
export function linkedListToArray<T>(head: ListNode<T> | null): T[] {
  const result: T[] = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

/**
 * Helper: Create binary tree from array (level-order, null for missing nodes)
 */
export function createBinaryTree<T>(arr: Array<T | null>): TreeNode<T> | null {
  if (arr.length === 0 || arr[0] === null) {
    return null;
  }

  const root = new TreeNode<T>(arr[0] as T);
  const queue: Array<TreeNode<T>> = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (!node) {
      continue;
    }

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode<T>(arr[i] as T);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode<T>(arr[i] as T);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

/**
 * Helper: Convert binary tree to array (level-order)
 */
export function binaryTreeToArray<T>(root: TreeNode<T> | null): Array<T | null> {
  if (root === null) {
    return [];
  }

  const result: Array<T | null> = [];
  const queue: Array<TreeNode<T> | null> = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!node) {
      result.push(null);
    } else {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // Remove trailing nulls
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}
