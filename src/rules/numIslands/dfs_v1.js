/**
 * @param {character[][]} grid
 * @return {number}
 */
const clearIsland = (grid, i, j) => {
  grid[i][j] = "0"
  if (i + 1 < grid.length && grid[i + 1][j] === "1") clearIsland(grid, i + 1, j)
  if (i - 1 >= 0 && grid[i - 1][j] === "1") clearIsland(grid, i - 1, j)
  if (j + 1 < grid[0].length && grid[i][j + 1] === "1") clearIsland(grid, i, j + 1)
  if (j - 1 >= 0 && grid[i][j - 1] === "1") clearIsland(grid, i, j - 1)
}

export default (grid) => {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let item = grid[i][j]
      if (item === '1') {
        count++
        clearIsland(grid, i, j)

      }
    }
  }
  return count
};
