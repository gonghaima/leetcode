/**
 * @param {number[]} prices
 * @return {number}
 */


// https://www.youtube.com/watch?v=4wNXkhAky3s

var maxProfitCooldown = function (prices) {
  let n = prices.size();
  if (n <= 1)
    return 0;
  let noStock = new Array(prices.length);
  // hold[i] is the max profit on day i with the state of holding stock
  // hold[i] = Math.max(hold[i-1], empty[i-1]-prices[i])
  let inHand = new Array(prices.length);
  // sold[i] is the max profit on day i with the state of having stock sold on day i
  // sold[i] = hold[i-1] + prices[i]
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