/**
 * @param {number[]} nums
 * @return {boolean}
 */

// https://leetcode.com/problems/jump-game/discuss/20907/1-6-lines-O(n)-time-O(1)-space
// O(n) time    O(1) space

/*******************************************************************************************
 *   Runtime: 80 ms, faster than 93.32% of JavaScript online submissions for Jump Game.    *
 * Memory Usage: 43.2 MB, less than 43.25% of JavaScript online submissions for Jump Game. *
 *******************************************************************************************/

var canJump = function (nums) {
  let goal = nums.length - 1;
  for (let i = nums.length; i >= 0; i--) {
    if (i + nums[i] >= goal) goal = i;
  };
  return goal <= 0;
};

export default canJump;