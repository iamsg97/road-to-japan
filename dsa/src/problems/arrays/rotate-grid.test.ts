import { describe, expect, it } from 'vitest';
import { rotateGrid } from './rotate-grid';

describe('Rotate Grid', () => {
  it('should rotate a 1x1 grid', () => {
    const grid = [[42]];
    const result = rotateGrid(grid);
    expect(result).toEqual([[42]]);
  });

  it('should rotate a 2x2 grid by 180°', () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const result = rotateGrid(grid);
    const expected = [
      [4, 3],
      [2, 1],
    ];
    expect(result).toEqual(expected);
  });

  it('should rotate a 3x3 grid by 180°', () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = rotateGrid(grid);
    const expected = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ];
    expect(result).toEqual(expected);
  });

  it('should rotate a 2x3 rectangular grid by 180°', () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const result = rotateGrid(grid);
    const expected = [
      [6, 5, 4],
      [3, 2, 1],
    ];
    expect(result).toEqual(expected);
  });

  it('should rotate a 3x2 rectangular grid by 180°', () => {
    const grid = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const result = rotateGrid(grid);
    const expected = [
      [6, 5],
      [4, 3],
      [2, 1],
    ];
    expect(result).toEqual(expected);
  });

  it('should handle negative numbers and zeros', () => {
    const grid = [
      [0, -1, -2],
      [-3, -4, -5],
    ];
    const result = rotateGrid(grid);
    const expected = [
      [-5, -4, -3],
      [-2, -1, 0],
    ];
    expect(result).toEqual(expected);
  });

  it('should mutate the input grid in place (contract)', () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const sameRef = rotateGrid(grid);
    expect(sameRef).toBe(grid); // function returns the same array reference
  });
});
