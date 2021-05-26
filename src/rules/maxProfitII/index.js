/********************************************************************************************************************
 * Runtime: 84 ms, faster than 54.28% of JavaScript online submissions for Best Time to Buy and Sell Stock II.      *
 * Memory Usage: 39.3 MB, less than 50.21% of JavaScript online submissions for Best Time to Buy and Sell Stock II. *
 ********************************************************************************************************************/

export default prices => {
  let mp = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      mp += prices[i] - prices[i - 1];
    }
  }
  return mp;
};
