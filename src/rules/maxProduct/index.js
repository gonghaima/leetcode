/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
  const n = nums.length;
  let max = -Infinity,
    currProduct = 1;

  for (let i = 0; i < n; ++i) {
    currProduct *= nums[i];
    max = Math.max(max, currProduct);
    if (nums[i] === 0) {
      currProduct = 1;
    }
  }
  currProduct = 1;
  for (let i = n - 1; i >= 0; --i) {
    currProduct *= nums[i];
    max = Math.max(max, currProduct);
    if (nums[i] === 0) {
      currProduct = 1;
    }
  }
  return max;
};

export default maxProduct;
