/****************************************************************************************************
 * Runtime: 172 ms, faster than 9.09% of JavaScript online submissions for Number of Enclaves.      *
 * Memory Usage: 48.2 MB, less than 11.36% of JavaScript online submissions for Number of Enclaves. *
 ****************************************************************************************************/

/*******************************************
 * 1. color all edge/connected land into 0 *
 * 2. count 1s in total                    *
 *******************************************/
export default (A) => {
  if (!A) { return 0; }
  let rows = A.length; if (rows == 0) { return 0; }
  let cols = A[0].length; if (cols == 0) { return 0; }
  const onEdge = (x, y) => {
    return x === 0 || y === 0 || x === A.length - 1 || y === A[0].length - 1;
  }

  const inBoundary = (x, y) => {
    return x >= 0 && x < A.length && y >= 0 && y < A[0].length;
  };
  const triverseParams = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (A[row][col] === 1 && onEdge(row, col)) {
        if (row === 0 && col === 2) debugger;
        A[row][col] = 0; // mark as visited
        let us = [], neighbors = [];
        neighbors.push([row, col]);
        while (neighbors.length > 0) {
          [us, neighbors] = [neighbors, []];
          us.map(([r, c]) => {
            triverseParams.map(([a, b]) => {
              const [x, y] = [a + r, b + c];
              if (x === 0 && y === 2) debugger;
              if (inBoundary(x, y) && A[x][y] === 1) {
                neighbors.push([x, y]); A[x][y] = 0;
              }
            })
          })
        }
      }
    }
  }

  return A.map(arr => arr.reduce((a, b) => a + b)).reduce((a, b) => a + b);
};