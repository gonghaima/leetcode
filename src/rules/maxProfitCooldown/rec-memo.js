/**
 * @param {number[]} prices
 * @return {number}
 */

/*****************************************************************************************************************************
 * Runtime: 256 ms, faster than 11.94% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.   *
 * Memory Usage: 39 MB, less than 76.12% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown. *
 *****************************************************************************************************************************/

// https://www.youtube.com/watch?v=4wNXkhAky3s

var maxProfitCooldown = function (prices) {
  const n = prices.length;
  const mem = [...Array(n + 1)].map(_ => -1);
  const findMax = (prices, curr, n) => {
    if (curr >= n)
      return 0;
    if (mem[curr] != -1)
      return mem[curr];

    //Now find all the positions where we can sell the stock
    let maxVal = 0;
    for (let i = curr + 1; i < n; ++i)
      if (prices[curr] < prices[i])  //We can try to sell on ith day
        //We have 2 choices
        //1.We can sell the stock at ith day and findMax from (i+2)th day
        //2.We don't sell the stock on ith day
        maxVal = Math.max(maxVal, prices[i] - prices[curr] + findMax(prices, i + 2, n));

    maxVal = Math.max(maxVal, findMax(prices, curr + 1, n)); //Exclude current element
    mem[curr] = maxVal;
    return maxVal;
  };
  return findMax(prices, 0, n);
};

export default maxProfitCooldown;