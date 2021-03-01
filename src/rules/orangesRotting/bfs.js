/*************************************************************************************************
 * Runtime: 96 ms, faster than 57.83% of JavaScript online submissions for Rotting Oranges.      *
 * Memory Usage: 42.5 MB, less than 16.83% of JavaScript online submissions for Rotting Oranges. *
 *************************************************************************************************/

var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let next = [];
  let fresh = 0;

  // if all 0s, return 0
  let total = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      total += grid[i][j];
      //add all 1s into set
      if (grid[i][j] === 1) fresh++;
      // finding the starting node, where value === 2
      if (grid[i][j] === 2) next.push([i, j]);
    }
  };
  // if all 0s, return 0
  if (total === 0) return 0;

  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const isValid = (r, c) => r >= 0 && r < rows & c >= 0 && c < cols;
  let counter = -1;

  // update to rotten, track the step count
  while (next.length) {
    counter += 1;
    let tempNext = [];
    next.map(([cR, cC]) => {
      directions.map(([r, c]) => {
        const newR = cR + r;
        const newC = cC + c;
        if (isValid(newR, newC) && grid[newR][newC] === 1) {
          grid[newR][newC] = 2;
          fresh--;
          tempNext.push([newR, newC]);
        }
      })
    });
    next = tempNext;
  }

  // if still 1s left in fresh, return -1,  otherwise return counter
  return fresh !== 0 ? -1 : counter;
}

export default orangesRotting;
