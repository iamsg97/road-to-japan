/**
 * Problem: Container With Most Water
 * Difficulty: Medium
 *
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).Find two lines that together with the x-axis form a container, such that the container contains the most water.Return the maximum amount of water a container can store.
 */

export function containerWithMostWater(heights: Array<number>): number {
  let left = 0;
  let right = heights.length - 1;

  let length = 0;
  let width = 0;

  let maxArea = 0;

  while (left < right) {
    length = Math.min(heights[left], heights[right]);
    width = right - left;

    maxArea = Math.max(maxArea, length * width);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
