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
    const dp = new Array(arr.length).fill(null);
    dp[0] = 1;
    const helper = (diff, i, min, max) => {
        if (dp[i]) return dp[i];
        if (i === 0) return 1;

        if (min - dp[i] === diff) {
            min = dp[i];
            dp[i] = helper(diff, i - 1, min, max) + 1;
        } else if (dp[i] - max > diff) {
            max = dp[i];
            dp[i] = helper(diff, i - 1, min, max) + 1;
        } else {
            dp[i] = helper(diff, i - 1, min, max);
        };
        return dp[arr.length - 1];
    };
    const result = helper(difference, arr.length - 1, arr[arr.length - 1], arr[arr.length - 1])
    console.log(dp);
    return result;
};

export default longestSubsequence;