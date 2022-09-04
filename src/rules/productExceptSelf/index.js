/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**************************************************************************************************************
 * Runtime: 149 ms, faster than 62.94% of JavaScript online submissions for Product of Array Except Self.     *
 * Memory Usage: 54.9 MB, less than 47.63% of JavaScript online submissions for Product of Array Except Self. *
 **************************************************************************************************************/

// https://leetcode.com/problems/product-of-array-except-self/discuss/1179835/JavaScript-Solution-O(1)-Space

var productExceptSelf = function(nums) {
  const n = nums.length;
  const res = Array(n).fill(1);

  let left = (right = 1);
  for (let i = 0; i < n; i++) {
    res[i] *= left;
    res[n - 1 - i] *= right;
    left *= nums[i];
    right *= nums[n - 1 - i];
  }
  return res;
};
export default productExceptSelf;
