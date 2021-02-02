/**
 * @param {character[][]} grid
 * @return {number}
 */
export default (grid) => {
  let markIsland = function (grid, x, y, visited) {
    //not valid, out boundary
    if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) {
      return;
    }
    // return if visited
    if (visited[x][y] === true) {
      return;
    }
    //mark as visited
    visited[x][y] = true;
    if (grid[x][y] === '0') {
      return;
    }
    markIsland(grid, x - 1, y, visited);
    markIsland(grid, x + 1, y, visited);
    markIsland(grid, x, y - 1, visited);
    markIsland(grid, x, y + 1, visited);
  };

  // initialize visited tracking array
  let visited = [];
  for (let i = 0; i < grid.length; i++) {
    visited[i] = [];
  }
  let count = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      // if there is a land, not visited, increase counter & mark all connected as visited
      if (!visited[x][y] && grid[x][y] === '1') {
        count++;
        markIsland(grid, x, y, visited);
      }
    }
  }
  return count;
};
