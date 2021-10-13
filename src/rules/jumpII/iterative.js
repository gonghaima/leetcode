/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************
 *   Runtime: 76 ms, faster than 87.71% of JavaScript online submissions for Jump Game II.    *
 * Memory Usage: 40.7 MB, less than 75.93% of JavaScript online submissions for Jump Game II. *
 **********************************************************************************************/

//https://leetcode.com/problems/jump-game-ii/discuss/18023/Single-loop-simple-java-solution

// O(n)

var jump = function (nums) {
  let step_count = 0;
  let last_jump_max = 0;
  let current_jump_max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    current_jump_max = Math.max(current_jump_max, i + nums[i]);
    if (i == last_jump_max) {
      step_count++;
      last_jump_max = current_jump_max;
    }
  }
  return step_count;
};

export default jump;