/*********************************************************************************************************************
 * Runtime: 164 ms, faster than 21.72% of JavaScript online submissions for Best Time to Buy and Sell Stock III.     *
 * Memory Usage: 60.8 MB, less than 14.64% of JavaScript online submissions for Best Time to Buy and Sell Stock III. *
 *********************************************************************************************************************/

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/discuss/724292/JS-divide-and-conquer-solution
// https://www.youtube.com/watch?v=37s1_xBiqH0

var maxProfit = function (prices) {
  let left;
  let right;

  const n = prices.length;

  // the max we can get with one transaction
  let max1Tx = 0;

  // util function to update the current max in each loop
  const updateMax1Tx = val => max1Tx = Math.max(
    Math.max(val, 0),
    max1Tx
  );

  // get left profits
  let curr = prices[0];
  left = [0];

  for (let i = 1; i < n; i++) {
    updateMax1Tx(prices[i] - curr);
    if (prices[i] < curr) curr = prices[i];
    left.push(max1Tx);
  }

  // get right profits
  max1Tx = 0;
  curr = prices[n - 1];
  right = [0];

  for (let i = n - 2; i >= 0; i--) {
    updateMax1Tx(curr - prices[i]);
    if (prices[i] > curr) curr = prices[i];
    right.push(max1Tx);
  }
  right = right.reverse();


  // find maximum combined left and right
  // this gives the max we can get with 2 transactions
  let max2Tx = 0;
  const updateMax2Tx = val => max2Tx = Math.max(Math.max(0, val), max2Tx);

  for (let i = 0; i < n; i++) {
    updateMax2Tx(left[i] + right[i]);
  }

  return max2Tx;
};

export default maxProfit;