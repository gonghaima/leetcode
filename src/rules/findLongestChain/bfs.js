/**
 * @param {number[][]} pairs
 * @return {number}
 */

/**************************************************************************************************************
 *   Runtime: 88 ms, faster than 92.86% of JavaScript online submissions for Maximum Length of Pair Chain.    *
 * Memory Usage: 43.3 MB, less than 40.48% of JavaScript online submissions for Maximum Length of Pair Chain. *
 **************************************************************************************************************/

// bfs

// https://leetcode.com/problems/maximum-length-of-pair-chain/discuss/1187010/JavaScript-3-Approaches-Recursion-with-Memoization-DP-Greedy

var findLongestChain = function (pairs) {
    let count = 1;
    pairs.sort((a, b) => a[1] - b[1]);
    let start = 0, end = 0;
    while (start < pairs.length && end < pairs.length) {
        let [a, b] = pairs[start];
        let [c, d] = pairs[end];
        if (c > b) {
            count++;
            start = end;
        }
        end++;
    }
    return count;
};

export default findLongestChain;