/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/first-missing-positive/discuss/927112/Three-JS-Solutions

// Time Complexity: O(nlog(n))
// Space Complexity: O(n)

/********************************************************************************************************
 * Runtime: 160 ms, faster than 23.70% of JavaScript online submissions for First Missing Positive.     *
 * Memory Usage: 58.9 MB, less than 22.66% of JavaScript online submissions for First Missing Positive. *
 ********************************************************************************************************/

var firstMissingPositive = function(nums) {
  nums = Array.from(new Set(nums)).filter((num) => num > 0);
  nums.sort((a, b) => a - b);
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    if (j == nums[i]) j++;
    else return j;
  }
  return j;
};

export default firstMissingPositive;
