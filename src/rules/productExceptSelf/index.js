/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**************************************************************************************************************
 * Runtime: 183 ms, faster than 30.64% of JavaScript online submissions for Product of Array Except Self.     *
 * Memory Usage: 53.1 MB, less than 87.57% of JavaScript online submissions for Product of Array Except Self. *
 **************************************************************************************************************/

// https://leetcode.com/problems/product-of-array-except-self/discuss/65663/Javascript-solution-if-anyone-is-interested

var productExceptSelf = function(nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;
  for (var i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }
  for (var j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }
  return output;
};
export default productExceptSelf;
