/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************
 *   Runtime: 105 ms, faster than 56.69% of JavaScript online submissions for Jump Game II.   *
 * Memory Usage: 40.5 MB, less than 87.44% of JavaScript online submissions for Jump Game II. *
 **********************************************************************************************/

//https://leetcode.com/problems/jump-game-ii/discuss/18089/Evolve-from-brute-force-to-optimal

// bfs  - O(n) time   O(1) space

// based on my understanding of bfs

// BFS O(n) Time, O(1) Space. The problem asks for shortest path and it is natrual to think of BFS. 
// Nodes are array elements. For an element, neighbors are the elements that are within its max jump length. Given nodes in current level, 
// we generate all nodes in the next level. Nodes are traversed level by level.

var jump = function (nums) {
  if (nums == null || nums.length < 2) {
    return 0;
  }
  let steps = 0, startPoint = 0;

  while (startPoint < nums.length) {
    steps++;
    let tmpMax = Number.MIN_VALUE;
    let maxIndex = startPoint;
    for (let i = 0; i <= nums[startPoint]; i++) {
      if (nums[i] > tmpMax) {
        tmpMax = nums[i];
        maxIndex = i;
      };
    };
    startPoint = startPoint + maxIndex + tmpMax;
  }

  return steps;
};

export default jump;