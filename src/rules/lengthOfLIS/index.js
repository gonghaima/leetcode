/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/longest-increasing-subsequence/discuss/1469714/JavaScript-1-Reduce-100-or-90

/***************************************************************************************************************
 *  Runtime: 139 ms, faster than 79.58% of JavaScript online submissions for Longest Increasing Subsequence.   *
 * Memory Usage: 44.2 MB, less than 5.72% of JavaScript online submissions for Longest Increasing Subsequence. *
 ***************************************************************************************************************/

var lengthOfLIS = function(nums) {
  let sequence = [nums[0]];
  nums.forEach((num, idx) => {
    if (num > sequence[sequence.length - 1]) sequence.push(num);
    else sequence[sequence.findIndex((val) => val >= num)] = num;
  });
  return sequence.length;
};

export default lengthOfLIS;
