/**
 * @param {number[]} prices
 * @return {number}
 */

/********************************************************************************************************************
 * Runtime: 1800 ms, faster than 7.57% of JavaScript online submissions for Best Time to Buy and Sell Stock III.    *
 * Memory Usage: 99.9 MB, less than 5.05% of JavaScript online submissions for Best Time to Buy and Sell Stock III. *
 ********************************************************************************************************************/

const maxPUtil = (prices, i, buyOrSell, k, dp) => {
  if (i >= prices.length || k == 0)
    return 0;

  if (dp[i][buyOrSell][k] !== -1) return dp[i][buyOrSell][k];
  let res = 0;
  if (buyOrSell == 0) {
    let buy = maxPUtil(prices, i + 1, 1, k, dp) - prices[i];
    let noBuy = maxPUtil(prices, i + 1, 0, k, dp);
    res += Math.max(buy, noBuy);
  } else {
    let sell = maxPUtil(prices, i + 1, 0, k - 1, dp) + prices[i];
    let noSell = maxPUtil(prices, i + 1, 1, k, dp);
    res += Math.max(sell, noSell);
  }
  dp[i][buyOrSell][k] = res;
  return res;
}

var maxProfit = function (prices) {
  const dp = [...Array(prices.length)].map(_ => new Array(2).fill().map(__ => new Array(3).fill(-1)));
  return maxPUtil(prices, 0, 0, 2, dp);
};

export default maxProfit;