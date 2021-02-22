
/**********************************************************************************************************
 * Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Number of Closed Islands.     *
 * Memory Usage: 39.6 MB, less than 80.11% of JavaScript online submissions for Number of Closed Islands. *
 **********************************************************************************************************/

const closedIsland = (grid) => {
  // initiate a count
  let res = 0;

  const dfs = (g, i, j) => {
    if (i < 0 || j < 0 || i >= g.length || j >= g[0].length) {
      return false;
    }
    if (g[i][j] === 1) {
      return true;
    }
    g[i][j] = 1;
    /* IMPORTANT NOTE: 
    WHY I CANNOT USE `return dfs(g, i+1, j) && dfs(g, i, j+1) && dfs(g, i-1, j) && dfs(g, i, j-1);`???
    BECAUSE IF ANY OF THE FIRST DFS() RETURNS FALSE, FOLLOWING ONES WILL NOT EXECUTE!!! THEN WE DON'T
    HAVE THE CHANCE TO MARK THOSE 0s TO 1s!!!
    */
    const d1 = dfs(g, i + 1, j);
    const d2 = dfs(g, i, j + 1);
    const d3 = dfs(g, i - 1, j);
    const d4 = dfs(g, i, j - 1);
    return d1 && d2 && d3 && d4;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        res += dfs(grid, i, j) ? 1 : 0;
      }
    }
  }
  return res;
};
export default closedIsland;