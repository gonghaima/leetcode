/**
 * @param {number[]} piles
 * @return {boolean}
 */

// https://leetcode.com/problems/stone-game/discuss/154610/DP-or-Just-return-true

var stoneGame = function(piles) {
  let n = piles.length;
  const dp = [...Array(n)].map((_) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) dp[i][i] = piles[i];
  for (let d = 1; d < n; d++)
    for (let i = 0; i < n - d; i++)
      dp[i][i + d] = Math.max(
        piles[i] - dp[i + 1][i + d],
        piles[i + d] - dp[i][i + d - 1]
      );
  return dp[0][n - 1] > 0;
};

export default stoneGame;
