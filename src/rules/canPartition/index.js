/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    var sum = nums.reduce((a, b) => a + b);
    if (sum % 2 === 1) return false;
    var target = sum / 2;
    var dp = new Array(target + 1).fill(0);
    for (var i = 0; i < nums.length; i++) {
        for (var j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }
    return dp[target] === target;
};

export default canPartition;