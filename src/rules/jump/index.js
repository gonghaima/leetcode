/**
 * @param {number[]} nums
 * @return {boolean}
 */

// https://leetcode.com/problems/jump-game/discuss/20900/Simplest-O(N)-solution-with-constant-space
// O(n) time    O(1) space

/*****************************************************************************************
 *  Runtime: 88 ms, faster than 75.36% of JavaScript online submissions for Jump Game.   *
 * Memory Usage: 43 MB, less than 59.33% of JavaScript online submissions for Jump Game. *
 *****************************************************************************************/

var canJump = function (nums) {
  const n = nums.length;
  let last = n - 1;
  for (let i = n - 2; i >= 0; i--) {
    if (i + nums[i] >= last) last = i;
  }
  return last <= 0;
};
export default canJump;