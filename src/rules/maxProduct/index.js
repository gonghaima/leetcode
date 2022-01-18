/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************************
 *   Runtime: 189 ms, faster than 7.49% of JavaScript online submissions for Maximum Product Subarray.    *
 * Memory Usage: 40.2 MB, less than 69.93% of JavaScript online submissions for Maximum Product Subarray. *
 **********************************************************************************************************/

// https://leetcode.com/problems/maximum-product-subarray/discuss/48252/Sharing-my-solution%3A-O(1)-space-O(n)-running-time

var maxProduct = function(nums) {
  if (nums.length == 0) {
    return 0;
  }

  let maxherepre = nums[0];
  let minherepre = nums[0];
  let maxsofar = nums[0];
  let maxhere, minhere;

  for (let i = 1; i < nums.length; i++) {
    maxhere = Math.max(
      Math.max(maxherepre * nums[i], minherepre * nums[i]),
      nums[i]
    );
    minhere = Math.min(
      Math.min(maxherepre * nums[i], minherepre * nums[i]),
      nums[i]
    );
    maxsofar = Math.max(maxhere, maxsofar);
    maxherepre = maxhere;
    minherepre = minhere;
  }
  return maxsofar;
};

export default maxProduct;
