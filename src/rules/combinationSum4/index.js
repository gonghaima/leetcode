/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// https://leetcode.com/problems/combination-sum-iv/discuss/85036/1ms-Java-DP-Solution-with-Detailed-Explanation

/*************************************************************************************************
 * Runtime: 86 ms, faster than 56.20% of JavaScript online submissions for Combination Sum IV.   *
 * Memory Usage: 42 MB, less than 9.30% of JavaScript online submissions for Combination Sum IV. *
 *************************************************************************************************/

var combinationSum4 = function(nums, target) {
  const comb = new Array(target + 1).fill(0);
  comb[0] = 1;
  for (let i = 1; i < comb.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        comb[i] += comb[i - nums[j]];
      }
    }
  }
  return comb[target];
};

export default combinationSum4;
