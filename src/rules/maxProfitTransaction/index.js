/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

/**************************************************************************************************************************************
 * Runtime: 160 ms, faster than 15.31% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.     *
 * Memory Usage: 47.5 MB, less than 46.94% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee. *
 **************************************************************************************************************************************/

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/

var maxProfitTransaction = function (prices, fee) {

  let cash = 0, hold = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
  }
  return cash;
};

export default maxProfitTransaction;