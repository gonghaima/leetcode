/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/find-the-duplicate-number/discuss/1892921/9-Approaches%3A-Count-Hash-In-place-Marked-Sort-Binary-Search-Bit-Mask-Fast-Slow-Pointers

/***********************************************************************************************************
 * Runtime: 529 ms, faster than 8.57% of JavaScript online submissions for Find the Duplicate Number.      *
 * Memory Usage: 54.4 MB, less than 39.39% of JavaScript online submissions for Find the Duplicate Number. *
 ***********************************************************************************************************/

/******************
 * time O(log n)  *
 * space O(log n) *
 ******************/

var findDuplicate = function(nums) {
  nums.sort();
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    if (nums[i] == nums[i - 1]) {
      return nums[i];
    }
  }

  return len;
};

export default findDuplicate;
