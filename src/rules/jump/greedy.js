/**
 * @param {number[]} nums
 * @return {boolean}
 */

// https://leetcode.com/problems/jump-game/discuss/20900/Simplest-O(N)-solution-with-constant-space
// O(n) time    O(1) space

/*****************************************************************************************
 *  Runtime: 104 ms, faster than 52.71% of JavaScript online submissions for Jump Game.  *
 * Memory Usage: 43 MB, less than 50.46% of JavaScript online submissions for Jump Game. *
 *****************************************************************************************/

var canJump = function (nums) {
  let maxLocation = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxLocation < i) return false; // if previous maxLocation smaller than i, meaning we cannot reach location i, thus return false.
    maxLocation = (i + nums[i]) > maxLocation ? i + nums[i] : maxLocation; // greedy:
  }
  return true;
};

export default canJump;