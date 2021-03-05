
/**
* @param {number[][]} grid
* @return {number}
*/

/****************************************************************************************************************
 * Runtime: 120 ms, faster than 69.82% of JavaScript online submissions for Shortest Path in Binary Matrix.     *
 * Memory Usage: 46.1 MB, less than 68.26% of JavaScript online submissions for Shortest Path in Binary Matrix. *
 ****************************************************************************************************************/

var shortestPathBinaryMatrix = function (grid) {
  const N = grid.length;

  if (grid[0][0] != 0 || grid[N - 1][N - 1] != 0) {
    return -1;
  }

  const directions = [[-1, 0], [1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

  const attempts = [];
  attempts.push([0, 0, 1]);
  while (attempts.length) {
    const [r, c, s] = attempts.shift();

    if (r == N - 1 && c == N - 1) {
      return s;
    }
    directions.map(direction => {
      const row = r + direction[0];
      const column = c + direction[1];
      if (row >= 0 && row < N && column >= 0 && column < N && grid[row][column] == 0) {
        attempts.push([row, column, s + 1]);
        grid[row][column] = -1;
      }
    })
  }

  return -1;
}

export default shortestPathBinaryMatrix;
