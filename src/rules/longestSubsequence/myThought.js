/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
/**
 * 1. sliding window
 *      find the longest subarray, meeting the requirement of diff
 * 2. dp
 *      dp[i] = in diff range? dp[i-1]+1 : dp[i-1];
 */
var longestSubsequence = function (arr, difference) {
    return Infinity;
};

export default longestSubsequence;