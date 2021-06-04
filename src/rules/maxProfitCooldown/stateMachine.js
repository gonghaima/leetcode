/**
 * @param {number[]} prices
 * @return {number}
 */

/*****************************************************************************************************************************
 * Runtime: 72 ms, faster than 98.51% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.    *
 * Memory Usage: 41 MB, less than 20.90% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown. *
 *****************************************************************************************************************************/

// state machine
// https://www.youtube.com/watch?v=4wNXkhAky3s

var maxProfitCooldown = function (prices) {
  let n = prices.length;
  if (n <= 1)
    return 0;
  let noStock = new Array(prices.length);
  let inHand = new Array(prices.length);
  let sold = new Array(prices.length);

  noStock[0] = 0;
  inHand[0] = -prices[0];    //bcoz we have bought a stock and never sold it
  sold[0] = 0;

  for (let i = 1; i < n; ++i) {
    noStock[i] = Math.max(noStock[i - 1], sold[i - 1]);
    inHand[i] = Math.max(inHand[i - 1], noStock[i - 1] - prices[i]);
    sold[i] = inHand[i - 1] + prices[i];
  }
  const result = Math.max(noStock[n - 1], sold[n - 1]);
  return result;
};

export default maxProfitCooldown;