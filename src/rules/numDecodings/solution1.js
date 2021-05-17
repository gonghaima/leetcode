/**
 * @param {string} s
 * @return {number}
 */

/*********************************************************************************************
 * Runtime: 100 ms, faster than 30.34% of JavaScript online submissions for Decode Ways.     *
 * Memory Usage: 38.8 MB, less than 86.72% of JavaScript online submissions for Decode Ways. *
 *********************************************************************************************/

// https://leetcode.com/problems/decode-ways/discuss/397369/Clean-JavaScript-solution

var numDecodings = function (s, i = 0, memo = {}) {
    if (s == null || s.length === 0) return 0;
    if (s[0] === '0') return 0;

    const dp = new Array(s.length + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= s.length; i++) {
        const a = Number(s.slice(i - 1, i));  // last one digit
        if (a >= 1 && a <= 9) {
            dp[i] += dp[i - 1];
        }

        const b = Number(s.slice(i - 2, i));  // last two digits
        if (b >= 10 && b <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[s.length];
};

export default numDecodings;