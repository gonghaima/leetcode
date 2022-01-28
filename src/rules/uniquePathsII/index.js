/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// https://leetcode.com/problems/unique-paths-ii/discuss/23248/My-C%2B%2B-Dp-solution-very-simple!

// just use dp to find the answer , if there is a obstacle at (i,j), then dp[i][j] = 0.
// time is O(nm) , space is O(nm) .

/*************************************************************************************************
 *   Runtime: 95 ms, faster than 44.28% of JavaScript online submissions for Unique Paths II.    *
 * Memory Usage: 42.4 MB, less than 13.93% of JavaScript online submissions for Unique Paths II. *
 *************************************************************************************************/

var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  const dp = new Array(m + 1).fill(null).map((_) => new Array(n + 1).fill(0));
  dp[0][1] = 1;
  for (let i = 1; i <= m; ++i)
    for (let j = 1; j <= n; ++j)
      if (!obstacleGrid[i - 1][j - 1]) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
  return dp[m][n];
};

export default uniquePathsWithObstacles;
