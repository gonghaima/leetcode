/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */

// https://www.youtube.com/watch?v=NpQ-ZKBNCa8

/**********************************************************************************************************************************
 *  Runtime: 247 ms, faster than 10.53% of JavaScript online submissions for Longest Arithmetic Subsequence of Given Difference.  *
 * Memory Usage: 50 MB, less than 50.00% of JavaScript online submissions for Longest Arithmetic Subsequence of Given Difference. *
 **********************************************************************************************************************************/

var longestSubsequence = function (arr, difference) {
    const dp = {};
    let answer = 0;

    for (const item of arr) {
        const target = item - difference;
        if (!dp[target]) dp[item] = 1;
        else dp[item] = 1 + dp[target];
        answer = Math.max(answer, dp[item]);
    }
    return answer;
};

export default longestSubsequence;