
/******************************************************************************************************************
 * Runtime: 104 ms, faster than 52.54 % of JavaScript online submissions for Best Time to Buy and Sell Stock.     *
 * Memory Usage: 48.3 MB, less than 96.45 % of JavaScript online submissions for Best Time to Buy and Sell Stock. *
 ******************************************************************************************************************/

// Kadane's Algorithm

var maxProfit = function (prices) {
  let lowestPrice = prices[0];
  return prices.reduce((acc, curr, idx) => {
    if (curr < lowestPrice) {
      lowestPrice = curr;
    } else if (curr - lowestPrice > acc) {
      return curr - lowestPrice;
    }
    return acc;
  }, 0)
};

export default maxProfit;
