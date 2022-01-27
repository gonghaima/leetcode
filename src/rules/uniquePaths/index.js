/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// https://leetcode.com/problems/unique-paths/discuss/22954/C%2B%2B-DP

/*******************************************************************************************
 *  Runtime: 64 ms, faster than 98.52% of JavaScript online submissions for Unique Paths.  *
 * Memory Usage: 42 MB, less than 5.05% of JavaScript online submissions for Unique Paths. *
 *******************************************************************************************/

var uniquePaths = function(m, n) {
  const cur = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cur[j] += cur[j - 1];
    }
  }
  return cur[n - 1];
};

export default uniquePaths;
