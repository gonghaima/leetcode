/****************************************************************************************************
 * Runtime: 100 ms, faster than 81.07% of JavaScript online submissions for Max Area of Island.     *
 * Memory Usage: 43.1 MB, less than 34.89% of JavaScript online submissions for Max Area of Island. *
 ****************************************************************************************************/

export default (grid) => {
  let markIsland = function (grid, x, y, visited, currentItems) {
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
    if (grid[x][y] === 0) {
      return;
    }
    currentItems.push(1);
    markIsland(grid, x - 1, y, visited, currentItems);
    markIsland(grid, x + 1, y, visited, currentItems);
    markIsland(grid, x, y - 1, visited, currentItems);
    markIsland(grid, x, y + 1, visited, currentItems);

  };

  // initialize visited tracking array
  let visited = [];
  let currentItems = [];
  let maxLength = 0;
  for (let i = 0; i < grid.length; i++) {
    visited[i] = [];
  }
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      // if there is a land, not visited, increase counter & mark all connected as visited
      if (!visited[x][y] && grid[x][y] === 1) {
        currentItems.length = 0;
        markIsland(grid, x, y, visited, currentItems);
        debugger;
        maxLength = maxLength > currentItems.length ? maxLength : currentItems.length;
      }
    }
  }
  return maxLength;
};
