/**
 * Problem: Big Jump
 * Difficulty: Easy
 *
 * Find the minimum number of jumps the user need to attain a given height provided user makes at least K big jumps
 */

export function bigJump(maxHeight: number, bigJump: number): number {
  const bigJumpCount = Math.floor(maxHeight / bigJump);
  const smallJumpCount = maxHeight % bigJump;
  return bigJumpCount + smallJumpCount;
}
