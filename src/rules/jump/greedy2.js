/**
 * @param {number[]} nums
 * @return {boolean}
 */

// https://leetcode.com/problems/jump-game/discuss/273641/Javascript-Simple-O(N)-Greedy-Solution
// O(n) time    O(1) space

/*******************************************************************************************
 *   Runtime: 76 ms, faster than 97.71% of JavaScript online submissions for Jump Game.    *
 * Memory Usage: 43.2 MB, less than 42.78% of JavaScript online submissions for Jump Game. *
 *******************************************************************************************/

var canJump = function (nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while (idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);

    if (max >= target) {
      return true;
    }

    if (max <= idx && nums[idx] === 0) {
      return false;
    }

    idx++;
  }

  return false;
};

export default canJump;