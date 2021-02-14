/****************************************************************************************************
 *  Runtime: 92 ms, faster than 93.18% of JavaScript online submissions for Number of Enclaves.     *
 * Memory Usage: 43.2 MB, less than 54.55% of JavaScript online submissions for Number of Enclaves. *
 ****************************************************************************************************/

export default (A) => {
  if (A == null || A.length == 0) return -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i][0] == 1) dfs(A, i, 0);
    if (A[i][A[0].length - 1] == 1) dfs(A, i, A[0].length - 1);
  }

  for (let i = 0; i < A[0].length; i++) {
    if (A[0][i] == 1) dfs(A, 0, i);
    if (A[A.length - 1][i] == 1) dfs(A, A.length - 1, i);
  }

  let result = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] == 1) result++;
    }
  }

  return result;
}

const dfs = (grid, row, column) => {
  if (row < 0 || row > grid.length - 1 || column < 0 || column > grid[0].length - 1 || grid[row][column] == 0 || grid[row][column] == -1) return;

  grid[row][column] = -1;
  dfs(grid, row + 1, column);
  dfs(grid, row - 1, column);
  dfs(grid, row, column + 1);
  dfs(grid, row, column - 1);
}