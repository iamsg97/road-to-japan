/**
 * Problem: Reverse Linked List
 * Difficulty: Easy
 *
 * Given the head of a singly linked list, reverse the list,
 * and return the reversed list.
 */

import type { ListNode } from '@utils/data-structures';

/**
 * Iterative solution
 * Time: O(n), Space: O(1)
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
}

/**
 * Recursive solution
 * Time: O(n), Space: O(n) due to call stack
 */
export function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}
