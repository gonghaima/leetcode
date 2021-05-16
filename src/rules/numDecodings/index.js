/**
 * @param {string} s
 * @return {number}
 */

/*********************************************************************************************
 * Runtime: 100 ms, faster than 30.34% of JavaScript online submissions for Decode Ways.     *
 * Memory Usage: 38.8 MB, less than 86.72% of JavaScript online submissions for Decode Ways. *
 *********************************************************************************************/

// dp & memoization
// https://leetcode.com/problems/decode-ways/discuss/1060702/5-lines-of-code-DP-(memoiazation)-Javascript-solution
// https://www.youtube.com/watch?v=OjEHST4SXfE
//https://www.youtube.com/watch?v=qli-JCrSwuk

var numDecodings = function (s, i = 0, memo = {}) {
    if (i in memo) return memo[i];
    if (s[i] === '0') return 0;
    if (i >= s.length - 1) return 1;
    memo[i] = numDecodings(s, i + 1, memo) + (s[i] + s[i + 1] < 27 ? numDecodings(s, i + 2, memo) : 0);
    return memo[i];
};

export default numDecodings;