/********************************************************************************************************************
 * Runtime: 76 ms, faster than 91.52% of JavaScript online submissions for Best Time to Buy and Sell Stock II.      *
 * Memory Usage: 39.2 MB, less than 69.07% of JavaScript online submissions for Best Time to Buy and Sell Stock II. *
 ********************************************************************************************************************/

var maxProfit = function (prices) {
  // sell immediately when it's profitable
  return prices.reduce((profit, price, i, prices) =>
    i > 0 && price > prices[i - 1] ? profit + price - prices[i - 1] : profit, 0);
};

export default maxProfit;
