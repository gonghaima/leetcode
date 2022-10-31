/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/first-missing-positive/discuss/2329831/JavaScript-solution-in-2-line

// Time Complexity: O(nlog(n))
// Space Complexity: O(n)

/********************************************************************************************************
 * Runtime: 128 ms, faster than 60.18% of JavaScript online submissions for First Missing Positive.     *
 * Memory Usage: 48.2 MB, less than 65.92% of JavaScript online submissions for First Missing Positive. *
 ********************************************************************************************************/

var firstMissingPositive = function(nums) {
  const arr = nums.sort((a, b) => a - b);
  return arr.reduce((min, num) => (num == min ? min + 1 : min), 1);
};

export default firstMissingPositive;
