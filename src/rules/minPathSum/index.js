/**
 * @param {number[][]} grid
 * @return {number}
 */

// https://leetcode.com/problems/minimum-path-sum/discuss/23457/C%2B%2B-DP

/**************************************************************************************************
 *   Runtime: 73 ms, faster than 88.22% of JavaScript online submissions for Minimum Path Sum.    *
 * Memory Usage: 42.5 MB, less than 16.60% of JavaScript online submissions for Minimum Path Sum. *
 **************************************************************************************************/

var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const cur = new Array(m).fill(grid[0][0]);
  for (let i = 1; i < m; i++) cur[i] = cur[i - 1] + grid[i][0];
  for (let j = 1; j < n; j++) {
    cur[0] += grid[0][j];
    for (let i = 1; i < m; i++)
      cur[i] = Math.min(cur[i - 1], cur[i]) + grid[i][j];
  }
  return cur[m - 1];
};

export default minPathSum;
