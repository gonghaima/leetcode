/**
 * @param {number} n
 * @return {number}
 */

/************************************************************************************************************
 * Runtime: 68 ms, faster than 95.98% of JavaScript online submissions for Unique Binary Search Trees.      *
 * Memory Usage: 38.6 MB, less than 26.91% of JavaScript online submissions for Unique Binary Search Trees. *
 ************************************************************************************************************/

//https://leetcode.com/problems/unique-binary-search-trees/discuss/488024/JavaScript-Solution-DP-w-Explanation

// find number of trees at each position, return the last one

var numTrees = function (n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};

export default numTrees;