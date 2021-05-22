
/*****************************************************************************************************************
 * Runtime: 104 ms, faster than 52.29% of JavaScript online submissions for Best Time to Buy and Sell Stock.     *
 * Memory Usage: 48.9 MB, less than 38.71% of JavaScript online submissions for Best Time to Buy and Sell Stock. *
 *****************************************************************************************************************/

/**
 my solution. two pointers
 current item - lowest in current range.  Track the max diff.
 */
const maxProfit = prices => {
  let maxP = 0;
  let lowest = prices[0];
  for (let i = 0; i < prices.length; i++) {
    lowest = Math.min(lowest, prices[i]);
    maxP = Math.max(maxP, prices[i] - lowest);
  }
  return maxP;
};

export default maxProfit;
