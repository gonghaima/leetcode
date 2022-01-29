/**
 * @param {character[][]} matrix
 * @return {number}
 */

// https://leetcode.com/problems/maximal-square/discuss/1632145/C%2B%2BJAVAPYTHON-EASY-TO-SOLVE-oror-Detailed-Explanation-of-DP-with-Visualization-and-dry-run

/**********************************************************************************************
 *  Runtime: 92 ms, faster than 85.81% of JavaScript online submissions for Maximal Square.   *
 * Memory Usage: 48 MB, less than 12.44% of JavaScript online submissions for Maximal Square. *
 **********************************************************************************************/

var maximalSquare = function(matrix) {
  //initializing sentinal varibles
  let maxSqr = 0,
    rows = matrix.length,
    column = matrix[0].length;
  //base case
  if (rows == 0) return 0;
  //dp matrix that we will be making
  const dp = new Array(rows + 1)
    .fill(null)
    .map((_) => new Array(column + 1).fill(0));

  //Iterate over the matrix
  for (let i = 1; i <= rows; i++)
    for (let j = 1; j <= column; j++) {
      ///we found the 1 in our binary matrix
      if (matrix[i - 1][j - 1] == '0') continue;
      dp[i][j] =
        Math.min(dp[i - 1][j], Math.min(dp[i - 1][j - 1], dp[i][j - 1])) + 1;
      maxSqr = Math.max(maxSqr, dp[i][j]);
    }
  return maxSqr * maxSqr;
};

export default maximalSquare;
