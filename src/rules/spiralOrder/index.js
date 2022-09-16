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
  const res = [];
  while (matrix.length) {
    const first = matrix.shift();
    res.push(...first);
    for (const m of matrix) {
      let val = m.pop();
      if (val) res.push(val);
      m.reverse();
    }
    matrix.reverse();
  }
  return res;
};

export default spiralOrder;
