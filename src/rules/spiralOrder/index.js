/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// https://leetcode.com/problems/spiral-matrix/discuss/651503/Javascript-simple-and-clean

/***********************************************************************************************
 * Runtime: 97 ms, faster than 29.80% of JavaScript online submissions for Spiral Matrix.      *
 * Memory Usage: 41.8 MB, less than 60.65% of JavaScript online submissions for Spiral Matrix. *
 ***********************************************************************************************/

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
