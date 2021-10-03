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
    const dp = Array(n + 1).fill(n + 2);
    dp[0] = 0;
    for (let i = 0; i <= n; ++i)
        for (let j = Math.max(i - ranges[i] + 1, 0); j <= Math.min(i + ranges[i], n); ++j)
            dp[j] = Math.min(dp[j], dp[Math.max(0, i - ranges[i])] + 1);
    return dp[n] < n + 2 ? dp[n] : -1;
};

export default minTaps;