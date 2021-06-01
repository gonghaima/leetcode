/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

/******************************************************************************************************************
 * Runtime: 440 ms, faster than 6.25% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.    *
 * Memory Usage: 41 MB, less than 42.36% of JavaScript online submissions for Best Time to Buy and Sell Stock IV. *
 ******************************************************************************************************************/

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/discuss/1115638/JavaScript-Straightforward-DP-Table

/**
    ┌─────────┬───┬───┬───┬───┬───┬───┐
    │ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │
    ├─────────┼───┼───┼───┼───┼───┼───┤
    │    0    │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │
    │    1    │ 0 │ 0 │ 4 │ 4 │ 4 │ 4 │
    │    2    │ 0 │ 0 │ 4 │ 4 │ 4 │ 7 │
    └─────────┴───┴───┴───┴───┴───┴───┘
 */

var maxProfitIV = function (k, prices) {
  if (prices.length <= 1 || !k) return 0

  const dp = [...Array(k + 1)].map(() => Array(prices.length).fill(0));

  for (let r = 1; r < dp.length; r++) {
    for (let c = 1; c < dp[0].length; c++) {
      dp[r][c] = dp[r][c - 1];
      for (let m = 0; m < c; m++) {
        dp[r][c] = Math.max(dp[r][c], prices[c] - prices[m] + dp[r - 1][m])
      }
    }
  }
  console.table(dp);
  return dp[k][prices.length - 1]
};

export default maxProfitIV;