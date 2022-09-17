/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/***********************************************************************************************
 * Runtime: 104 ms, faster than 18.16% of JavaScript online submissions for Spiral Matrix.     *
 * Memory Usage: 42.1 MB, less than 24.10% of JavaScript online submissions for Spiral Matrix. *
 ***********************************************************************************************/

// https://leetcode.com/problems/spiral-matrix/discuss/1226384/1-approach-for-your-interview

var spiralOrder = function(matrix) {
  let r = matrix.length,
    c = matrix[0].length;
  let [left, right, top, bottom] = [0, c - 1, 0, r - 1];

  let arr = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) arr.push(matrix[top][i]);
    top++;

    for (let i = top; i <= bottom; i++) arr.push(matrix[i][right]);
    right--;

    if (top <= bottom) {
      // condition 1
      for (let i = right; i >= left; i--) arr.push(matrix[bottom][i]);
      bottom--;
    }

    if (left <= right) {
      // condition 2
      for (let i = bottom; i >= top; i--) arr.push(matrix[i][left]);
      left++;
    }
  }
  return arr;
};

export default spiralOrder;
