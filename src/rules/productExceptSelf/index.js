/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**************************************************************************************************************
 * Runtime: 181 ms, faster than 32.24% of JavaScript online submissions for Product of Array Except Self.     *
 * Memory Usage: 54.9 MB, less than 45.81% of JavaScript online submissions for Product of Array Except Self. *
 **************************************************************************************************************/

// https://leetcode.com/problems/product-of-array-except-self/discuss/65663/Javascript-solution-if-anyone-is-interested

var productExceptSelf = function(nums) {
  let result = Array(nums.length).fill(1);

  let prodOfNumsBehindLeftPointer = 1;
  let prodOfNumsBehindRigthtPointer = 1;

  for (let l = 0, r = nums.length - 1; l < nums.length; l++, r--) {
    result[l] *= prodOfNumsBehindLeftPointer;
    result[r] *= prodOfNumsBehindRigthtPointer;

    prodOfNumsBehindLeftPointer *= nums[l];
    prodOfNumsBehindRigthtPointer *= nums[r];
  }

  return result;
};
export default productExceptSelf;
