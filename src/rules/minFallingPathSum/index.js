/**
 * @param {number[][]} matrix
 * @return {number}
 */

/**
 * 
 The minimum path to get to element A[i][j] is the minimum of A[i - 1][j - 1], A[i - 1][j] and A[i - 1][j + 1].
 Starting from row 1, we add the minumum path to each element. The smallest number in the last row is the miminum path sum.
 Example:
 [1, 2, 3]
 [4, 5, 6] => [5, 6, 8]
 [7, 8, 9] => [7, 8, 9] => [12, 13, 15]
 */

// https://leetcode.com/problems/minimum-falling-path-sum/discuss/186666/C%2B%2BJava-4-lines-DP

/**********************************************************************************************************
 *   Runtime: 104 ms, faster than 46.84% of JavaScript online submissions for Minimum Falling Path Sum.   *
 * Memory Usage: 40.8 MB, less than 89.04% of JavaScript online submissions for Minimum Falling Path Sum. *
 **********************************************************************************************************/

var minFallingPathSum = function(matrix) {
  for (let i = 1; i < matrix.length; ++i)
    for (let j = 0; j < matrix.length; ++j)
      matrix[i][j] += Math.min(
        matrix[i - 1][j],
        matrix[i - 1][Math.max(0, j - 1)],
        matrix[i - 1][Math.min(matrix.length - 1, j + 1)]
      );
  return Math.min(...matrix[matrix.length - 1]);
};

export default minFallingPathSum;
