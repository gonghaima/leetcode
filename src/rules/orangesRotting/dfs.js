
var orangesRotting = function (grid) {
  const rotAdjacent = (grid, i, j, minutes) => {
    if (i < 0 || i >= grid.length /* out of bounds */
      || j < 0 || j >= grid[0].length /* out of bounds */
      || grid[i][j] == 0 /* empty cell */
      || (1 < grid[i][j] && grid[i][j] < minutes) /* this orange is already rotten by another rotten orange */
    ) return;
    else {
      grid[i][j] = minutes;
      rotAdjacent(grid, i - 1, j, minutes + 1);
      rotAdjacent(grid, i + 1, j, minutes + 1);
      rotAdjacent(grid, i, j - 1, minutes + 1);
      rotAdjacent(grid, i, j + 1, minutes + 1);
    }
  }

  if (grid == null || grid.length == 0) return -1;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) rotAdjacent(grid, i, j, 2);
    }
  }

  let minutes = 2;
  // for (let [] row: grid) {
  //   for (let cell : row) {
  //   if (cell == 1) return -1;
  //   minutes = Math.max(minutes, cell);
  // }

  for (let i = 0; minutes !== -1 && i < grid.length; i++) {
    for (let j = 0; minutes !== -1 && j < grid[0].length; j++) {
      if (grid[i][j] === 1) { minutes = -1; continue; }
      minutes = Math.max(minutes, grid[i][j]);
    }
  }

  return minutes - 2;
}

export default orangesRotting;
