/**
 * @param {character[][]} grid
 * @return {number}
 */
export default (grid) => {
  if (!grid) { return 0; }
  let rows = grid.length; if (rows == 0) { return 0; }
  let cols = grid[0].length; if (cols == 0) { return 0; }
  let islandcount = 0;
  let r, c, row, col, first;
  for (row = 0; row < rows; ++row) {
    for (col = 0; col < cols; ++col) {
      if (grid[row][col] == '1') {
        ++islandcount;
        grid[row][col] = '0'; // mark as visited
        let us = [], neighbors = [];
        neighbors.push([row, col]);
        while (neighbors.length > 0) {
          [us, neighbors] = [neighbors, []];
          first = 0;
          while (first < us.length) {
            [r, c] = us[first++];
            if (r - 1 >= 0 && grid[r - 1][c] == '1') {
              neighbors.push([r - 1, c]); grid[r - 1][c] = '0';
            }
            if (r + 1 < rows && grid[r + 1][c] == '1') {
              neighbors.push([r + 1, c]); grid[r + 1][c] = '0';
            }
            if (c - 1 >= 0 && grid[r][c - 1] == '1') {
              neighbors.push([r, c - 1]); grid[r][c - 1] = '0';
            }
            if (c + 1 < cols && grid[r][c + 1] == '1') {
              neighbors.push([r, c + 1]); grid[r][c + 1] = '0';
            }
          }
        }
      }
    }
  }
  return islandcount;
};
