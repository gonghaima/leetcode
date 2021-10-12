/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************
 *   Runtime: 105 ms, faster than 56.69% of JavaScript online submissions for Jump Game II.   *
 * Memory Usage: 40.5 MB, less than 87.44% of JavaScript online submissions for Jump Game II. *
 **********************************************************************************************/

//https://leetcode.com/problems/jump-game-ii/discuss/18089/Evolve-from-brute-force-to-optimal

// bfs  - O(n) time   O91) space

// BFS O(n) Time, O(1) Space. The problem asks for shortest path and it is natrual to think of BFS. 
// Nodes are array elements. For an element, neighbors are the elements that are within its max jump length. Given nodes in current level, 
// we generate all nodes in the next level. Nodes are traversed level by level.

var jump = function (nums) {
  let steps = 0, curLevelEnd = 0, nxtLevelEnd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > curLevelEnd) {
      steps++;
      curLevelEnd = nxtLevelEnd;
    }
    nxtLevelEnd = Math.max(nxtLevelEnd, i + nums[i]);
  }
  return steps;
};

export default jump;