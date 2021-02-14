/****************************************************************************************************
 *  Runtime: 92 ms, faster than 93.18% of JavaScript online submissions for Number of Enclaves.     *
 * Memory Usage: 43.2 MB, less than 54.55% of JavaScript online submissions for Number of Enclaves. *
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