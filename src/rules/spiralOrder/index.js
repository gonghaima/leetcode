/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// https://leetcode.com/problems/spiral-matrix/discuss/1648434/Beginner-friendly-JavaJavaScriptPython-solutions

/*********************************************************************************************
 * Runtime: 86 ms, faster than 56.44% of JavaScript online submissions for Spiral Matrix.    *
 * Memory Usage: 42 MB, less than 35.82% of JavaScript online submissions for Spiral Matrix. *
 *********************************************************************************************/

var spiralOrder = function(matrix) {
  let arr = [];
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;
  let len = matrix.length * matrix[0].length;
  while (arr.length < len) {
    for (let i = left; i <= right && arr.length < len; i++)
      arr.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom && arr.length < len; i++)
      arr.push(matrix[i][right]);
    right--;
    for (let i = right; i >= left && arr.length < len; i--)
      arr.push(matrix[bottom][i]);
    bottom--;
    for (let i = bottom; i >= top && arr.length < len; i--)
      arr.push(matrix[i][left]);
    left++;
  }
  return arr;
};

export default spiralOrder;
