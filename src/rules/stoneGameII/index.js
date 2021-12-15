/**
 * @param {number[]} piles
 * @return {number}
 */

// https://leetcode.com/problems/stone-game-ii/discuss/345247/C%2B%2B-DP-(Tabulation)

/***********************************************************************************************
 *   Runtime: 128 ms, faster than 50.00% of JavaScript online submissions for Stone Game II.   *
 * Memory Usage: 42.1 MB, less than 64.29% of JavaScript online submissions for Stone Game II. *
 ***********************************************************************************************/

/**********************************************************************************************************************
 *             dp[i][j] is the maximum number of stones Alex can get when starting at index i with M = j              *
 *                          sufsum[i] is the total number of stones from index i to the end                           *
 * The dp matrix for Lee is the same. And the stragegy for Alex is to choose an optimal X to minimize the number of stones Lee can get when starting at index (i + X) with M = max(X,j). Here we have the recurrence formula *
 **********************************************************************************************************************/
var stoneGameII = function(piles) {
  const length = piles.length;
  const dp = [...Array(length + 1).fill(null)].map((_) =>
    Array(length + 1).fill(0)
  );
  const sufsum = new Array(length + 1).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    sufsum[i] = sufsum[i + 1] + piles[i];
  }
  for (let i = 0; i <= length; i++) {
    dp[i][length] = sufsum[i];
  }
  for (let i = length - 1; i >= 0; i--) {
    for (let j = length - 1; j >= 1; j--) {
      for (let X = 1; X <= 2 * j && i + X <= length; X++) {
        dp[i][j] = Math.max(dp[i][j], sufsum[i] - dp[i + X][Math.max(j, X)]);
      }
    }
  }
  return dp[0][1];
};

export default stoneGameII;
