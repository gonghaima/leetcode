/**
 * @param {number[]} nums
 * @return {number}
 */

/********************************************************************************************************
 * Runtime: 145 ms, faster than 39.78% of JavaScript online submissions for First Missing Positive.     *
 * Memory Usage: 57.5 MB, less than 26.61% of JavaScript online submissions for First Missing Positive. *
 ********************************************************************************************************/

// https://leetcode.com/problems/first-missing-positive/discuss/2248885/Hard-Question-Solved-Easily.-Very-Basic-Apprach-O(n)

var firstMissingPositive = function(nums) {
  let set = new Set(),
    res = 1;
  for (let ele of nums) {
    if (ele > 0) {
      set.add(ele);
    }
  }
  while (set.has(res)) {
    ++res;
  }
  return res;
};

export default firstMissingPositive;
