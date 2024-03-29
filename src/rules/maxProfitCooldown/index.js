/**
 * @param {number[]} prices
 * @return {number}
 */

/********************************************************************************************************************************
 * Runtime: 80 ms, faster than 91.13 % of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.      *
 * Memory Usage: 38.9 MB, less than 79.84 % of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown. *
 ********************************************************************************************************************************/

// https://www.youtube.com/watch?v=oL6mRyTn56M
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/75928/Share-my-DP-solution-(By-State-Machine-Thinking)
// state visulization - solution-index.png
var maxProfitCooldown = function(prices) {
  const dp = Array.from({ length: prices.length }, _ => Array(2));
  
  function dfs(i, canBuy) {
      if (i >= prices.length) {
          return 0;
      }

      if (dp[i][canBuy] !== undefined) {
          return dp[i][canBuy];
      }

      const noAction = dfs(i + 1, canBuy);

      let action = 0;
      if (canBuy) {
          action = -prices[i] + dfs(i + 1, 0);
      } else {
          action = prices[i] + dfs(i + 2, 1);
      }

      return dp[i][canBuy] = Math.max(action, noAction);
  }

  return dfs(0, 1);
};

export default maxProfitCooldown;