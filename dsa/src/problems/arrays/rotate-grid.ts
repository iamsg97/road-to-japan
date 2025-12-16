/**
 * Problem: Rotate Grid
 * Difficulty: Medium
 *
 * Given a MXN grid, rotate it 180 degrees
 */

export function rotateGrid(grid: Array<Array<number>>): Array<Array<number>> {
  const rows = grid.length;

  const cols = grid[0]?.length;
  if (cols === undefined) {
    return grid;
  }
  for (let i = 0; i < Math.ceil(rows / 2); i++) {
    for (let j = 0; j < cols; j++) {
      const rotI = rows - 1 - i; // rotation wala I
      const rotJ = cols - 1 - j; // rotation wala J
      if (i > rotI || (i === rotI && j > rotJ)) {
        continue; // we do not need to repeat
      }
      [grid[i][j], grid[rotI][rotJ]] = [grid[rotI][rotJ], grid[i][j]];
    }
  }
  return grid;
}

export function rotateGridNinety(grid: Array<Array<number>>): Array<Array<number>> {
  const rows = grid.length;
  const cols = grid[0]?.length;
  if (cols === undefined) {
    return grid;
  }
  for (let i = 0; i < Math.ceil(rows / 2); i++) {
    for (let j = 0; j < cols; j++) {
      const ri = rows - 1 - i;
      const rj = j;
      if (i > ri || (i === ri && j > rj)) {
        [grid[i][j], grid[ri][rj]] = [grid[ri][rj], grid[i][j]];
      }
    }
  }
  return grid;
}
