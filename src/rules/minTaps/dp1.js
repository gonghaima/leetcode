/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */

/********************************************************************************************************************************
 *  Runtime: 88 ms, faster than 68.18% of JavaScript online submissions for Minimum Number of Taps to Open to Water a Garden.   *
 * Memory Usage: 41 MB, less than 59.09% of JavaScript online submissions for Minimum Number of Taps to Open to Water a Garden. *
 ********************************************************************************************************************************/

// https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/discuss/484235/JavaC%2B%2BPython-Similar-to-LC1024

/******************************************
 * Time O(NR), where R = ranges[i] <= 100 *
 *               Space O(N)               *
 ******************************************/

// Brute Force DP

var minTaps = function (n, ranges) {
    const len = ranges.length;
    const dp = Array(len).fill(len + 1);
    dp[0] = 0;

    for (let i = 0; i < len; i++) {
        let start = Math.max(i - ranges[i], 0);
        let end = Math.min(i + ranges[i], len - 1);
        for (let j = start; j <= end; j++) {
            dp[j] = Math.min(dp[j], dp[start] + 1);
        }
    }

    return dp[len - 1] == len + 1 ? -1 : dp[len - 1];
};

export default minTaps;