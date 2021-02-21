/**********************************************************************************************************
 * Runtime: 88 ms, faster than 65.34% of JavaScript online submissions for Number of Closed Islands.      *
 * Memory Usage: 44.1 MB, less than 11.93% of JavaScript online submissions for Number of Closed Islands. *
 **********************************************************************************************************/

const closedIsland = (grid) => {
  // initiate a count
  let count = 0;
  let row = grid.length;
  let column = grid[0].length;

  let isOnEdge = (r, c) => r === 0 || r === row - 1 || c === 0 || c === column - 1;
  let checkValid = (r, c) => r >= 0 && r <= row - 1 && c >= 0 && c <= column - 1;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  //loop through all unvisited cell, bfs to mark to 1. If all of them not on a edge, count increase
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 0) {
        let shouldIncrease = true;
        grid[i][j] = 1;
        let next = [[i, j]];
        while (next.length > 0) {
          const [currentRow, currentColumn] = next.pop();
          grid[currentRow][currentColumn] = 1;
          isOnEdge(currentRow, currentColumn) && (shouldIncrease = false);
          directions.map(([r, c]) => (checkValid(currentRow + r, currentColumn + c) && grid[currentRow + r][currentColumn + c] === 0) && next.push([currentRow + r, currentColumn + c]));
        }
        if (shouldIncrease) count += 1;
      }
    }
  }

  return count;
};
export default closedIsland;