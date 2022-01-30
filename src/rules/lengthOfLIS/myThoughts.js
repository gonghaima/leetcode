/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * if nums[i]>nums[i-1]
 * dp[i] = dp[i - 1] + 1
 * 
 * otherwise
 * dp[i] = dp[i - 1] 
 * 
 * not passing [4,10,4,3,8,9] , output 4, but it should be 3
 */

var lengthOfLIS = function(nums) {
  const dp = new Array(nums.length - 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[nums.length - 1];
};

export default lengthOfLIS;
