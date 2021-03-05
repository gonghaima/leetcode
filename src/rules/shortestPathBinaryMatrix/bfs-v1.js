
/**
* @param {number[][]} grid
* @return {number}
*/

/****************************************************************************************************************
 * Runtime: 128 ms, faster than 61.01% of JavaScript online submissions for Shortest Path in Binary Matrix.     *
 * Memory Usage: 45.5 MB, less than 88.99% of JavaScript online submissions for Shortest Path in Binary Matrix. *
 ****************************************************************************************************************/

// This solution can enhanced to A* search, by changing "attempts" type from array, to a priority queue, 
// smallest steps will put into front, get picked first


var shortestPathBinaryMatrix = function (grid) {
  const N = grid.length;

  if (grid[0][0] != 0 || grid[N - 1][N - 1] != 0) {
    return -1;
  }

  const directions = [[-1, 0], [1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

  const attempts = [];
  attempts.push([0, 0, 1]);
  while (attempts.length) {
    // here, pop cannot be used, because if the latest item used reached to the end, it will not check other options,
    // shift will ensure all the items will be check without skipping
    // however, if A* used, to use closest item, it will boost the performance, as well as avoiding worse picking
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
