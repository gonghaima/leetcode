
// Kadane's Algorithm

/*****************************************************************************************************************
 * Runtime: 100 ms, faster than 71.02% of JavaScript online submissions for Best Time to Buy and Sell Stock.     *
 * Memory Usage: 48.7 MB, less than 64.89% of JavaScript online submissions for Best Time to Buy and Sell Stock. *
 *****************************************************************************************************************/

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/39038/Kadane's-Algorithm-Since-no-one-has-mentioned-about-this-so-far-%3A)-(In-case-if-interviewer-twists-the-input)

const maxProfit = prices => {
  let maxCur = 0, maxSoFar = 0;
  for (let i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, maxCur += prices[i] - prices[i - 1]);
    maxSoFar = Math.max(maxCur, maxSoFar);
  }
  return maxSoFar;
};

export default maxProfit;
