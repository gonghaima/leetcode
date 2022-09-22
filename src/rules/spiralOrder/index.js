/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// https://leetcode.com/problems/spiral-matrix/discuss/20631/Concise-JavaScript-O(n)-using-directions

// https://leetcode.com/problems/spiral-matrix/discuss/1468151/Python-Smart-Simulate-by-marking-as-Visited-Clean-and-Concise

/***********************************************************************************************
 * Runtime: 62 ms, faster than 93.45% of JavaScript online submissions for Spiral Matrix.      *
 * Memory Usage: 41.7 MB, less than 72.45% of JavaScript online submissions for Spiral Matrix. *
 ***********************************************************************************************/

var spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  const res = [];
  let dir,
    dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
  const walls = [-1, matrix[0].length, matrix.length, -1];
  for (
    let i = 0, d = 0, r = 0, c = 0, len = matrix.length * matrix[0].length;
    i < len;
    i++, r += dir[0], c += dir[1]
  ) {
    res.push(matrix[r][c]);
    dir = dirs[d % 4];
    let w = [0, 1, 2, 3].find(
      (j) =>
        (j % 2 === 0 && r + dir[0] === walls[j]) ||
        (j % 2 && c + dir[1] === walls[j])
    );
    if (w !== undefined) {
      walls[(w + 3) % 4] += w < 2 ? 1 : -1;
      dir = dirs[++d % 4];
    }
  }
  return res;
};

export default spiralOrder;
