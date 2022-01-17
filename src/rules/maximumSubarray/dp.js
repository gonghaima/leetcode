/**************************************************************************************************
 * Runtime: 76 ms, faster than 95.60% of JavaScript online submissions for Maximum Subarray.      *
 * Memory Usage: 39.4 MB, less than 34.34% of JavaScript online submissions for Maximum Subarray. *
 **************************************************************************************************/

var maxSubArray = function(nums) {
  const n = nums.length;
  // int[] dp = new int[n];//dp[i] means the maximum subarray ending with A[i];
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  let max = dp[0];

  for (let i = 1; i < n; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(max, dp[i]);
  }

  return max;
};

export default maxSubArray;
