import { createLinkedList, linkedListToArray } from '@utils/data-structures';
import { describe, expect, it } from 'vitest';
import { reverseList, reverseListRecursive } from './reverse-linked-list';

describe('Reverse Linked List', () => {
  describe('Iterative Solution', () => {
    it('should reverse a linked list', () => {
      const head = createLinkedList([1, 2, 3, 4, 5]);
      const reversed = reverseList(head);
      expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
    });

    it('should handle single node', () => {
      const head = createLinkedList([1]);
      const reversed = reverseList(head);
      expect(linkedListToArray(reversed)).toEqual([1]);
    });

    it('should handle empty list', () => {
      const reversed = reverseList(null);
      expect(linkedListToArray(reversed)).toEqual([]);
    });

    it('should handle two nodes', () => {
      const head = createLinkedList([1, 2]);
      const reversed = reverseList(head);
      expect(linkedListToArray(reversed)).toEqual([2, 1]);
    });
  });

  describe('Recursive Solution', () => {
    it('should reverse a linked list', () => {
      const head = createLinkedList([1, 2, 3, 4, 5]);
      const reversed = reverseListRecursive(head);
      expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
    });

    it('should handle single node', () => {
      const head = createLinkedList([1]);
      const reversed = reverseListRecursive(head);
      expect(linkedListToArray(reversed)).toEqual([1]);
    });

    it('should handle empty list', () => {
      const reversed = reverseListRecursive(null);
      expect(linkedListToArray(reversed)).toEqual([]);
    });
  });
});
