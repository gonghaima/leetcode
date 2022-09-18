/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/***********************************************************************************************
 * Runtime: 114 ms, faster than 7.18% of JavaScript online submissions for Spiral Matrix.      *
 * Memory Usage: 42.1 MB, less than 23.94% of JavaScript online submissions for Spiral Matrix. *
 ***********************************************************************************************/

// https://leetcode.com/problems/spiral-matrix/discuss/658453/Two-JavaScript-O(n)-solutions-that-beats-100-of-Memory-usage

var spiralOrder = function(matrix) {
  let res = [];
  while (matrix.length > 0) {
    // cut the top->right->bottom->left sides until matrix is empty
    let top = matrix.shift();
    let bottom = (matrix.pop() || []).reverse();
    let left = [],
      right = [];
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length > 0) right.push(matrix[i].pop());
      if (matrix[i].length > 0) left.unshift(matrix[i].shift());
    }
    res.push(...top, ...right, ...bottom, ...left);
  }
  return res;
};

export default spiralOrder;
