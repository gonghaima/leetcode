/**
 * @param {number[][]} pairs
 * @return {number}
 */

/**************************************************************************************************************
 *   Runtime: 124 ms, faster than 53.57% of JavaScript online submissions for Maximum Length of Pair Chain.   *
 * Memory Usage: 43.5 MB, less than 30.95% of JavaScript online submissions for Maximum Length of Pair Chain. *
 **************************************************************************************************************/

//sliding window

// https://leetcode.com/problems/maximum-length-of-pair-chain/discuss/1326859/javascript

var findLongestChain = function (pairs) {
    pairs = pairs.sort((a, b) => a[0] - b[0]);
    let dp = [...Array(pairs.length)].fill(1);
    for (let i = 0; i < dp.length; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) max = Math.max(max, dp[j]);
        }
        dp[i] = max + 1;
    };
    return Math.max(...dp);
};

export default findLongestChain;