
/**
* @param {number[][]} grid
* @return {number}
*/

/****************************************************************************************************************
 * Runtime: 120 ms, faster than 69.82% of JavaScript online submissions for Shortest Path in Binary Matrix.     *
 * Memory Usage: 45.6 MB, less than 85.75% of JavaScript online submissions for Shortest Path in Binary Matrix. *
 ****************************************************************************************************************/

class Attempt {
  constructor(row, column, step) {
    this.row = row;
    this.column = column;
    this.step = step;
  }
}

var shortestPathBinaryMatrix = function (grid) {
  const N = grid.length;

  if (grid[0][0] != 0 || grid[N - 1][N - 1] != 0) {
    return -1;
  }

  const directions = [[-1, 0], [1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

  const attempts = [];
  attempts.push(new Attempt(0, 0, 1));
  while (attempts.length) {
    const attempt = attempts.shift();

    if (attempt.row == N - 1 && attempt.column == N - 1) {
      return attempt.step;
    }
    directions.map(direction => {
      const row = attempt.row + direction[0];
      const column = attempt.column + direction[1];
      if (row >= 0 && row < N && column >= 0 && column < N && grid[row][column] == 0) {
        attempts.push(new Attempt(row, column, attempt.step + 1));
        grid[row][column] = -1;
      }
    })
  }

  return -1;
}

export default shortestPathBinaryMatrix;
