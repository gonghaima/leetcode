/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */

// https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/discuss/398188/5-lines.-OMG-can't-believe!!!
// https://www.youtube.com/watch?v=1THU4Aa9akQ

/***********************************************************************************************************************************
 *  Runtime: 256 ms, faster than 10.53% of JavaScript online submissions for Longest Arithmetic Subsequence of Given Difference.   *
 * Memory Usage: 61.5 MB, less than 7.89% of JavaScript online submissions for Longest Arithmetic Subsequence of Given Difference. *
 ***********************************************************************************************************************************/

var longestSubsequence = function (arr, difference) {
    const dp = {};
    let longest = 0;
    for (const item of arr) {
        dp[item] = (dp[item - difference] || 0) + 1;
        longest = Math.max(longest, dp[item]);
    }
    return longest;
};

export default longestSubsequence;