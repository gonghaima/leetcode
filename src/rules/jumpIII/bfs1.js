/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// bfs

// time O(n),  space O(n)

// https://leetcode.com/problems/jump-game-iii/discuss/1038479/JavaScript-Solution-Time-O(n)-Space-O(n)-Queue-implementation-with-explanation

/***********************************************************************************************
 *   Runtime: 681 ms, faster than 5.22% of JavaScript online submissions for Jump Game III.    *
 * Memory Usage: 49.7 MB, less than 50.20% of JavaScript online submissions for Jump Game III. *
 ***********************************************************************************************/

var canReach = function (arr, start) {
  const queue = [start];

  while (queue.length > 0) {
    const idx = queue.shift();
    if (arr[idx] === 0) return true;

    const newIdx1 = idx + arr[idx];
    const newIdx2 = idx - arr[idx];
    if (newIdx1 >= 0 && newIdx1 < arr.length && arr[idx] !== -1) queue.push(newIdx1)
    if (newIdx2 >= 0 && newIdx2 < arr.length && arr[idx] !== -1) queue.push(newIdx2)

    arr[idx] = -1 // mark as vistied already.
  }

  return false;
}

export default canReach;