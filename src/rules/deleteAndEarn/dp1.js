/**
 * @param {number[]} nums
 * @return {number}
 */

/*************************************************************************************************
 *   Runtime: 76 ms, faster than 85.02% of JavaScript online submissions for Delete and Earn.    *
 * Memory Usage: 42.1 MB, less than 34.82% of JavaScript online submissions for Delete and Earn. *
 *************************************************************************************************/

// https://leetcode.com/problems/delete-and-earn/discuss/141004/Java-4-lines

var deleteAndEarn = function (nums) {
    const dp = new Array(10001).fill(0);
    for (let num of nums) dp[num] += num;
    for (let i = 2; i < dp.length; i++) dp[i] = Math.max(dp[i - 1], dp[i - 2] + dp[i]);
    return dp[dp.length - 1];
};

export default deleteAndEarn;


