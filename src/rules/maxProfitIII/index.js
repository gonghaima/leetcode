/**
 * @param {number[]} prices
 * @return {number}
 */

/*********************************************************************************************************************
 * Runtime: 108 ms, faster than 75.94% of JavaScript online submissions for Best Time to Buy and Sell Stock III.     *
 * Memory Usage: 49.5 MB, less than 84.91% of JavaScript online submissions for Best Time to Buy and Sell Stock III. *
 *********************************************************************************************************************/

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/discuss/39611/Is-it-Best-Solution-with-O(n)-O(1).

// OJ: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii
// Author: github.com/lzl124631x
// Time: O(N)
// Space: O(1)
// Ref: https://discuss.leetcode.com/topic/5934/is-it-best-solution-with-o-n-o-1

var maxProfit = function (prices) {
  let oneBuyOneSell = 0;
  let twoBuyTwoSell = 0;
  let oneBuy = Number.POSITIVE_INFINITY
  let twoBuy = Number.POSITIVE_INFINITY;

  for (let i = 0; i < prices.length; i++) {
    const p = prices[i];
    oneBuy = Math.min(oneBuy, p);
    oneBuyOneSell = Math.max(oneBuyOneSell, p - oneBuy);
    twoBuy = Math.min(twoBuy, p - oneBuyOneSell);
    twoBuyTwoSell = Math.max(twoBuyTwoSell, p - twoBuy);
  }
  return twoBuyTwoSell;
};

export default maxProfit;