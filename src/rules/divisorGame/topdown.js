/**
 * @param {number} n
 * @return {boolean}
 */

/**********************************************************************************************
 *   Runtime: 117 ms, faster than 5.88% of JavaScript online submissions for Divisor Game.    *
 * Memory Usage: 38.9 MB, less than 23.18% of JavaScript online submissions for Divisor Game. *
 **********************************************************************************************/

// https://leetcode.com/problems/divisor-game/discuss/274608/Simple-DP-Java-Solution

var divisorGame = function (n) {
    const dp = new Array(Math.max(2, n + 1)).fill(null);

    const helper = n => {
        if (dp[n] !== null) return dp[n];
        dp[0] = true;
        dp[1] = false;
        for (let x = 1; x * x <= n; x++)
            if (n % x == 0)
                if (!helper(n - x) || !helper(n - (n / x))) {
                    dp[n] = true;
                    break;
                }
        return dp[n];
    };
    dp[0] = true;
    const res = helper(n);
    return res || false;
};
export default divisorGame;


