/**
 * @param {string} s
 * @return {number}
 */

/*********************************************************************************************
 * Runtime: 84 ms, faster than 81.36% of JavaScript online submissions for Decode Ways.      *
 * Memory Usage: 38.8 MB, less than 86.31% of JavaScript online submissions for Decode Ways. *
 *********************************************************************************************/

// https://leetcode.com/problems/decode-ways/discuss/667526/JavaScript-Clean-DP-Bottom-Up-Tabulation

var numDecodings = function (s, i = 0, memo = {}) {
    const dp = Array(s.length + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= s.length; i++) {
        const oneChar = +s.slice(i - 1, i);
        const twoChar = +s.slice(i - 2, i);

        if (oneChar > 0) dp[i] = dp[i - 1];
        if (twoChar >= 10 && twoChar <= 26) dp[i] += dp[i - 2]
    }
    return dp[s.length];
};

export default numDecodings;