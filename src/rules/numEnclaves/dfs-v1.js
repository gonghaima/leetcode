/****************************************************************************************************
 * Runtime: 108 ms, faster than 56.82% of JavaScript online submissions for Number of Enclaves.     *
 * Memory Usage: 45.7 MB, less than 40.91% of JavaScript online submissions for Number of Enclaves. *
 ****************************************************************************************************/

export default (A) => {
  let m = A.length, n = A[0].length, directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  const inBounds = cell => cell[0] > -1 && cell[0] < m && cell[1] > -1 && cell[1] < n;

  const dfs = cell => {
    A[cell[0]][cell[1]] = 0;
    for (const dir of directions) {
      const next = [cell[0] + dir[0], cell[1] + dir[1]];
      if (inBounds(next) && A[next[0]][next[1]])
        dfs(next);
    }
  }
  for (let i = 0; i < m; i++) {
    if (A[i][0]) dfs([i, 0]);
    if (A[i][n - 1]) dfs([i, n - 1]);
  }

  for (let i = 0; i < n; i++) {
    if (A[0][i]) dfs([0, i]);
    if (A[m - 1][i]) dfs([m - 1, i]);
  }

  let result = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (A[i][j]) result++;

  return result;
}