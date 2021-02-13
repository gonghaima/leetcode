/***************************************************************************************************
 * Runtime: 152 ms, faster than 20.45% of JavaScript online submissions for Number of Enclaves.    *
 * Memory Usage: 50.7 MB, less than 6.82% of JavaScript online submissions for Number of Enclaves. *
 ***************************************************************************************************/

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

  let islandcount = 0;

  let islandGroup = {};
  let edgeGroup = new Set();
  let r, c, row, col, first;
  for (row = 0; row < rows; ++row) {
    for (col = 0; col < cols; ++col) {
      if (A[row][col] === 1) {
        ++islandcount;
        islandGroup[islandcount] = 1;
        if (onEdge(row, col)) edgeGroup.add(islandcount);

        A[row][col] = 0; // mark as visited
        let us = [], neighbors = [];
        neighbors.push([row, col]);
        while (neighbors.length > 0) {
          [us, neighbors] = [neighbors, []];
          us.map(([r, c]) => {
            triverseParams.map(([a, b]) => {
              const [x, y] = [a + r, b + c];
              if (inBoundary(x, y) && A[x][y] === 1) {
                islandGroup[islandcount] += 1;
                neighbors.push([x, y]); A[x][y] = 0;
                if (onEdge(x, y)) edgeGroup.add(islandcount)
              }
            })
          })
        }
      }
    }
  }

  let total = 0;
  Object.entries(islandGroup).map(([key, val]) => {
    if (!edgeGroup.has(Number(key))) {
      total += val;
    }
  });
  return total;
};