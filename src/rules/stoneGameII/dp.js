/**
 * @param {number[]} piles
 * @return {number}
 */

/***********************************************************************************************
 *   Runtime: 88 ms, faster than 94.12% of JavaScript online submissions for Stone Game II.    *
 * Memory Usage: 40.6 MB, less than 82.35% of JavaScript online submissions for Stone Game II. *
 ***********************************************************************************************/

// https://leetcode.com/problems/stone-game-ii/discuss/345528/C%2B%2B-beats-100-DP-with-detailed-explanation

// Alex and Lee play optimally and each one takes stones only from the FIRST X
// remaining piles! So they cannot change and take for example the last x piles.
// We use DP for this problem beacuse we have many different combinations to cover!

var stoneGameII = function(piles) {
  let m = piles.length;
  if (m == 0) return 0;
  if (m == 1) return piles[0];
  if (m == 2) return piles[0] + piles[1];

  // First we calculate the sum of all piles from the end to the begging
  // in order to be able to retrieve quickly how many stones a player has
  // if for example is in position i of piles and can take 3 piles.
  // The answer is sums[i] - (the number of stones the other player will
  // take with max 6 piles (2*M))
  let sum = new Array(m).fill(0);
  sum[m - 1] = piles[m - 1];
  for (let i = m - 2; i >= 0; i--) {
    sum[i] = sum[i + 1] + piles[i];
  }
  // We create the memorization vector where dp[i][j] is the optimal choice
  // in the i position of piles with max 2*j piles.
  //memoization, dp[i][j] says that for ith piles, upto 2*j other piles can be selected
  let dp = new Array(m).fill(null).map((_) => new Array(m).fill(0));
  return helper(piles, sum, 0, dp, 1); //M=1, initially

  function helper(piles, sum, i, dp, M) {
    //we reached the end of piles
    if (i == piles.length) return 0;

    //when a player has option to select all the piles
    if (2 * M >= piles.length - i) return sum[i];

    //already processed
    if (dp[i][M] != 0) return dp[i][M];

    //Now for 1<=X<=2*M, find the point from where 2nd player will be able to select minimum stones
    let min = Number.MAX_SAFE_INTEGER;

    for (let X = 1; X <= 2 * M; X++) {
      min = Math.min(min, helper(piles, sum, i + X, dp, Math.max(M, X)));
    }

    //Now since we have selected optimal number of piles, so store it before returning
    return (dp[i][M] = sum[i] - min);
  }
};

export default stoneGameII;
