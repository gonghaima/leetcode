/**
 * @param {number[]} nums
 * @return {boolean}
 */

// https://leetcode.com/problems/jump-game/discuss/423228/Javascript-BFS-solution
// O(n^2) quadratic time    O(n) space

/****************************************************************************************
 * Runtime: 3640 ms, faster than 7.00% of JavaScript online submissions for Jump Game.  *
 * Memory Usage: 50 MB, less than 5.13% of JavaScript online submissions for Jump Game. *
 ****************************************************************************************/

var canJump = function (nums) {
  let rezult = false;
  let memo = new Array(nums.length + 1);
  let q = [0];

  while (q.length) {
    let currentIndex = q.shift();
    if (currentIndex === nums.length - 1) {
      rezult = true;
      break;
    }
    for (let i = 1; i <= nums[currentIndex]; i++) {
      let neibhourIndex = currentIndex + i;
      if (!memo[neibhourIndex]) {
        q.push(neibhourIndex);
        memo[neibhourIndex] = 1;
      }
    }
  }
  return rezult;
};

export default canJump;