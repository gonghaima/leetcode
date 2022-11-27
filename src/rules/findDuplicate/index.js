/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/find-the-duplicate-number/discuss/1892921/9-Approaches%3A-Count-Hash-In-place-Marked-Sort-Binary-Search-Bit-Mask-Fast-Slow-Pointers

/***********************************************************************************************************
 * Runtime: 86 ms, faster than 96.67% of JavaScript online submissions for Find the Duplicate Number.      *
 * Memory Usage: 50.9 MB, less than 53.18% of JavaScript online submissions for Find the Duplicate Number. *
 ***********************************************************************************************************/

var findDuplicate = function(nums) {
  const len = nums.length;
  for (let num of nums) {
    const idx = Math.abs(num);
    if (nums[idx] < 0) {
      return idx;
    }
    nums[idx] = -nums[idx];
  }

  return len;
};

export default findDuplicate;
