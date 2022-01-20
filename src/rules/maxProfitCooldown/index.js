/**
 * @param {number[]} prices
 * @return {number}
 */

/********************************************************************************************************************************
 * Runtime: 80 ms, faster than 91.13 % of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.      *
 * Memory Usage: 38.9 MB, less than 79.84 % of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown. *
 ********************************************************************************************************************************/

// https://www.youtube.com/watch?v=oL6mRyTn56M
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/75928/Share-my-DP-solution-(By-State-Machine-Thinking)
// state visulization
var maxProfitCooldown = function (prices) {
  let hold = -Infinity, rest = 0, sold = 0;
  prices.map(price => {
    const prev_sold = sold;
    sold = hold + price; //currently sold -  yesterday hold + price
    hold = Math.max(hold, rest - price); //currently hold - yesterday hold as well  VS.  yesterday rest and just bought today
    rest = Math.max(rest, prev_sold); //currently rest - yesterday rest  VS. yesterday sold
  });
  return Math.max(rest, sold);
};

export default maxProfitCooldown;