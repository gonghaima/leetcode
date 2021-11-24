/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */

// bfs

// https://leetcode.com/problems/jump-game-vii/discuss/1236272/JAVA-BFS-Detailed-Analysis-O(n)-BFS-Solution

/*********************************************************************************************
 *  Runtime: 5545 ms, faster than 8.00% of JavaScript online submissions for Jump Game VII.  *
 * Memory Usage: 48 MB, less than 88.00% of JavaScript online submissions for Jump Game VII. *
 *********************************************************************************************/

// [Time Complexity - O(N)]

var canReach = function(s, minJump, maxJump) {
  if (s[s.length - 1] != '0') return false;

  const queue = [];
  queue.push(0);

  // This variable tells us till which index we have processed
  let maxReach = 0;

  while (queue.length) {
    let idx = queue.shift();
    // If we reached the last index
    if (idx === s.length - 1) return true;

    // start the loop from max of [current maximum (idx + minJump), maximum processed index (maxReach)]
    for (
      let j = Math.max(idx + minJump, maxReach);
      j <= Math.min(idx + maxJump, s.length - 1);
      j++
    ) {
      if (s[j] == '0') queue.push(j);
    }

    // since we have processed till idx + maxJump so update maxReach to next index
    maxReach = Math.min(idx + maxJump + 1, s.length - 1);
  }

  return false;
};

export default canReach;
