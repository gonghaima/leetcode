/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*********************************************************************************************
 * Runtime: 118 ms, faster than 5.04% of JavaScript online submissions for Spiral Matrix.    *
 * Memory Usage: 42 MB, less than 35.71% of JavaScript online submissions for Spiral Matrix. *
 *********************************************************************************************/

// https://leetcode.com/problems/spiral-matrix/discuss/316519/Simple-JavaScript-Solution-with-pop-%2B-shift-%2B-recursion-beat-86

var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  if (matrix[0].length === 0) return [];

  let result = [];
  // ADD FIRST ROW
  result = result.concat(matrix.shift());

  // ADD LAST COL
  for (let i = 0; i < matrix.length - 1; i++) {
    result.push(matrix[i].pop());
  }

  // ADD LAST ROW
  const lastRow = matrix.pop();
  if (lastRow) result = result.concat(lastRow.reverse());

  // ADD FIRST COL
  for (let i = matrix.length - 1; i >= 0; i--) {
    if (matrix[i].length) result.push(matrix[i].shift());
  }

  return result.concat(spiralOrder(matrix));
};

export default spiralOrder;
