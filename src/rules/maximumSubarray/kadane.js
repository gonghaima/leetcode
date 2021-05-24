

/**************************************************************************************************
 * Runtime: 76 ms, faster than 95.60% of JavaScript online submissions for Maximum Subarray.      *
 * Memory Usage: 39.4 MB, less than 34.34% of JavaScript online submissions for Maximum Subarray. *
 **************************************************************************************************/

var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums)
};

export default maxSubArray;