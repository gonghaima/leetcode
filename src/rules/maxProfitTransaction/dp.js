/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

/**************************************************************************************************************************************
 * Runtime: 84 ms, faster than 98.97% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.      *
 * Memory Usage: 46.8 MB, less than 93.81% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee. *
 **************************************************************************************************************************************/
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/1113037/JavaScript-One-Pass-DP-O(1)-Space

var maxProfitTransaction = function (prices, fee) {

  let noStock = 0, stock = -Infinity;

  for (let price of prices) {
    let tempNoStock = Math.max(noStock, stock + price);
    let tempStock = Math.max(stock, (noStock - price - fee));
    noStock = tempNoStock;
    stock = tempStock
  }
  return noStock;
};

export default maxProfitTransaction;