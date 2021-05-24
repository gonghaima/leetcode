/***************************************************************************************************
 * Runtime: 88 ms, faster than 53.09 % of JavaScript online submissions for Maximum Subarray.      *
 * Memory Usage: 39.4 MB, less than 25.63 % of JavaScript online submissions for Maximum Subarray. *
 ***************************************************************************************************/

const maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let subArrSum = nums[0], maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    subArrSum = Math.max(nums[i], subArrSum + nums[i])
    maxSum = Math.max(maxSum, subArrSum);
  }
  return maxSum;
};

export default maxSubArray;