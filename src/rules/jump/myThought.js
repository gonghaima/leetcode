/**
 * @param {number[]} nums
 * @return {number}
 */

// not working, as follows minTap solution

var jump = function (nums) {
  const dp = Array(nums.length).fill(null);
  dp[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    const left = Math.max(0, i - nums[i]);
    const right = Math.min(nums.length - 1, i + nums[i]);
    for (let j = left; j <= right; j++) {
      dp[i] = Math.min(dp[i], dp[left] + 1);
    };
  }
  return dp[nums.length - 1];
};

export default jump;