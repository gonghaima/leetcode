/**
 * @param {number} n
 * @return {boolean}
 */

/**********************************************************************************************
 *   Runtime: 92 ms, faster than 15.75% of JavaScript online submissions for Divisor Game.    *
 * Memory Usage: 38.7 MB, less than 64.04% of JavaScript online submissions for Divisor Game. *
 **********************************************************************************************/

// https://leetcode.com/problems/divisor-game/discuss/274608/Simple-DP-Java-Solution

var divisorGame = function (n) {
    // boolean[] dp = new boolean[N+1];
    const dp = new Array(n + 1).fill(false);
    dp[0] = false;
    dp[1] = false;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                if (dp[i - j] == false) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    return dp[n];
};
export default divisorGame;


