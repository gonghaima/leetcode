
/********************************************************************************************************
 * Runtime: 96 ms, faster than 32.95% of JavaScript online submissions for Number of Closed Islands.    *
 * Memory Usage: 42 MB, less than 25.57% of JavaScript online submissions for Number of Closed Islands. *
 ********************************************************************************************************/

const closedIsland = (grid) => {
  // initiate a count
  let count = 0;
  let onEdge = false;
  let row = grid.length;
  let column = grid[0].length;

  let isOnEdge = (r, c) => r === 0 || r === row - 1 || c === 0 || c === column - 1;
  let checkValid = (r, c) => r >= 0 && r <= row - 1 && c >= 0 && c <= column - 1;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const dfs = (r, c) => {
    grid[r][c] = 1;
    if (isOnEdge(r, c)) onEdge = true;
    directions.map(([r1, c1]) => (checkValid(r1 + r, c1 + c) && grid[r1 + r][c1 + c] === 0) && dfs(r1 + r, c1 + c))
  }

  //loop through all unvisited cell, bfs to mark to 1. If all of them not on a edge, count increase
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 0) {
        grid[i][j] = 1;
        onEdge = false;
        dfs(i, j);
        if (onEdge === false) count += 1;
      }
    }
  }

  return count;
};
export default closedIsland;