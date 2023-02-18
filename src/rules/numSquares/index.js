/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode.com/problems/perfect-squares/solutions/2713405/python-js-java-c-by-dp-coin-change-demo-visualization/

var numSquares = function(n) {
  // Initialize with INT_MAX, except for dp[0] = 0 as base case
  let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

  // Base case
  dp[0] = 0;

  let root = 1;
  let square = root * root;

  // for each square 1, 4, 9, 16, 25...
  while (square <= n) {
    //  update dp value for number from square to n
    for (let i = square; i <= n; i++) {
      dp[i] = Math.min(dp[i], dp[i - square] + 1);
    }

    // go to next square number
    root++;
    square = root * root;
  }

  return dp[n];
};

export default numSquares;
