/**
 * @param {number[]} piles
 * @return {boolean}
 */

// https://leetcode.com/problems/stone-game/discuss/154610/DP-or-Just-return-true

var stoneGame = function(piles) {
  let dp = Array.from(piles);
        for (let d = 1; d < p.length; d++)
            for (let i = 0; i < p.length - d; i++)
                dp[i] = Math.max(p[i] - dp[i + 1], p[i + d] - dp[i]);
        return dp[0] > 0;
};

export default stoneGame;
