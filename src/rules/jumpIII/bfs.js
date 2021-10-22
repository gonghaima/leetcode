/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// bfs

// time O(n),  space O(n)

// https://leetcode.com/problems/jump-game-iii/discuss/463872/Simple-one-using-queue-and-visited-paths-JAVA

/***********************************************************************************************
 *   Runtime: 94 ms, faster than 54.51% of JavaScript online submissions for Jump Game III.    *
 * Memory Usage: 45.3 MB, less than 85.66% of JavaScript online submissions for Jump Game III. *
 ***********************************************************************************************/

var canReach = function (arr, start) {
  let n = arr.length;
  const visited = new Set(); // visited set
  const q = [];
  q.push(start);
  while (q.length) {
    let i = q.pop();
    if (arr[i] == 0) return true; // found then return it
    if (visited.has(i)) continue; // already visited than continue
    visited.add(i);
    if (i + arr[i] < n)
      q.push(i + arr[i]);
    if (i - arr[i] >= 0)
      q.push(i - arr[i]);
  }
  return false;// not found
}

export default canReach;