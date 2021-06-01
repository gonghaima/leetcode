/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

/********************************************************************************************************************
 * Runtime: 88 ms, faster than 81.34% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.      *
 * Memory Usage: 39.2 MB, less than 85.07% of JavaScript online submissions for Best Time to Buy and Sell Stock IV. *
 ********************************************************************************************************************/

//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/discuss/54125/Very-understandable-solution-by-reusing-Problem-III-idea

var maxProfitIV = function (k, prices) {
  // When k becomes so much larger than the number of prices we can make transactions whenever.
  if (k > (prices.length / 2)) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
      }
    }
    return profit;
  }
  else {
    let dp = new Array(prices.length).fill(0);
    let size = prices.length;
    for (let t = 1; t <= k; t++) {
      let min = prices[0];
      let max = 0;
      for (let i = 0; i < size; i++) {
        min = Math.min(min, prices[i] - dp[i]);
        max = Math.max(max, prices[i] - min);
        dp[i] = max
      }
    }
    return dp.pop();
  }
};

export default maxProfitIV;