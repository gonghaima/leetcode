export default (A) => {
  if (!A) { return 0; }
  let rows = A.length; if (rows == 0) { return 0; }
  let cols = A[0].length; if (cols == 0) { return 0; }
  const onEdge = (x, y) => {
    return x === 0 || y === 0 || x === A[0].length - 1 || y === A.length - 1;
  }

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
          first = 0;
          while (first < us.length) {
            [r, c] = us[first++];
            if (r - 1 >= 0 && A[r - 1][c] === 1) {
              islandGroup[islandcount] += 1;
              neighbors.push([r - 1, c]); A[r - 1][c] = 0;
              if (onEdge(r - 1, c)) edgeGroup.add(islandcount);
            }
            if (r + 1 < rows && A[r + 1][c] === 1) {
              islandGroup[islandcount] += 1;
              neighbors.push([r + 1, c]); A[r + 1][c] = 0;
              if (onEdge(r + 1, c)) edgeGroup.add(islandcount)
            }
            if (c - 1 >= 0 && A[r][c - 1] === 1) {
              islandGroup[islandcount] += 1;
              neighbors.push([r, c - 1]); A[r][c - 1] = 0;
              if (onEdge(r, c - 1)) edgeGroup.add(islandcount)
            }
            if (c + 1 < cols && A[r][c + 1] === 1) {
              islandGroup[islandcount] += 1;
              neighbors.push([r, c + 1]); A[r][c + 1] = 0;
              if (onEdge(r, c + 1)) edgeGroup.add(islandcount)
            }
          }
        }
      }
    }
  }
  debugger;
  let total = 0;
  Object.entries(islandGroup).map(([key, val]) => {
    if (!edgeGroup.has(Number(key))) {
      total += val;
    }
  });
  debugger;
  return total;
};
