/**
 * @param {number} n
 * @return {number}
 */

/***********************************************************************************************************
 *   Runtime: 88 ms, faster than 25.00% of JavaScript online submissions for Domino and Tromino Tiling.    *
 * Memory Usage: 43.6 MB, less than 12.50% of JavaScript online submissions for Domino and Tromino Tiling. *
 ***********************************************************************************************************/

// https://www.youtube.com/watch?v=S-fUTfqrdq8

var numTilings = function (n) {
    let mod = 1e9;
    mod += 7;
    const dp = new Array(1001).fill(null).map(_ => new Array(2).fill(0));
    dp[0][0] = dp[1][0] = 1;
    for (let i = 2; i <= n; ++i) {
        dp[i][0] = (dp[i - 1][0] + dp[i - 2][0] + 2 * dp[i - 1][1]) % mod;
        dp[i][1] = (dp[i - 2][0] + dp[i - 1][1]) % mod;
    }
    return dp[n][0];
};

export default numTilings;