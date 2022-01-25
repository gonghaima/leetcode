/**
 * @param {number[][]} triangle
 * @return {number}
 */

// https://leetcode.com/problems/triangle/discuss/38724/7-lines-neat-Java-Solution

/******************************************************************************************
 *   Runtime: 111 ms, faster than 32.63% of JavaScript online submissions for Triangle.   *
 * Memory Usage: 40.3 MB, less than 56.92% of JavaScript online submissions for Triangle. *
 ******************************************************************************************/

var minimumTotal = function(triangle) {
  const A = Array(triangle.length + 1).fill(0);

  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      A[j] = Math.min(A[j], A[j + 1]) + triangle[i][j];
    }
  }
  return A[0];
};

export default minimumTotal;
