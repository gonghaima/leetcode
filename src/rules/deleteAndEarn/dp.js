/**
 * @param {number[]} nums
 * @return {number}
 */

/*************************************************************************************************
 *   Runtime: 72 ms, faster than 94.40% of JavaScript online submissions for Delete and Earn.    *
 * Memory Usage: 42.1 MB, less than 33.60% of JavaScript online submissions for Delete and Earn. *
 *************************************************************************************************/

// https://leetcode.com/problems/delete-and-earn/discuss/109871/Awesome-Python-4-liner-with-explanation-Reduce-to-House-Robbers-Question-U0001f31d

var deleteAndEarn = function (nums) {
    if (nums == null || nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];

    let RANGE = 10000;
    let dp = new Array(RANGE + 1).fill(0);
    for (let n of nums) dp[n] += n;

    //index 0 house is not used, -> 0
    //index 1 is just the value in dp[1]
    let max = dp[1];
    for (let i = 2; i < RANGE + 1; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i] + dp[i - 2]);
        if (dp[i] > max) max = dp[i];
    }

    return max;
};

export default deleteAndEarn;


