/**
 * @param {number[]} nums
 * @return {string}
 */

// https://leetcode.com/problems/largest-number/discuss/1012321/javascript-with-sort-O(nlogn)

/************************************************************************************************
 * Runtime: 82 ms, faster than 65.92% of JavaScript online submissions for Largest Number.      *
 * Memory Usage: 43.4 MB, less than 93.63% of JavaScript online submissions for Largest Number. *
 ************************************************************************************************/

var largestNumber179 = function(nums) {
  if (!nums || nums.length === 0) {
    return '0';
  }

  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  if (nums[0] === 0) {
    return '0';
  }
  return nums.join('');
};

export default largestNumber179;
