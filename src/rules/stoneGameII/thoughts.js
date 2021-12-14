/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  return NaN;
};

/**
 * bottom up
 * for each step
 * alice's score
 * Math.max(piles[i]-dp[i-1], ..., pile[i-m]-dp[i-m])
 *
 * return dp[0]
 */

export default stoneGameII;
