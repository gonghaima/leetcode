/*************************************************************************************************
 * Runtime: 100 ms, faster than 42.94% of JavaScript online submissions for Rotting Oranges.     *
 * Memory Usage: 42.4 MB, less than 17.80% of JavaScript online submissions for Rotting Oranges. *
 *************************************************************************************************/

var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // if all 0s, return 0
  let total = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      total += grid[i][j];
    }
  };
  if (total === 0) return 0;

  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const isValid = (r, c) => r >= 0 && r < rows & c >= 0 && c < cols;
  let counter = -1;
  let next = [];

  // finding the starting node, where value === 2
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) next.push([i, j]);
    }
  }

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
          tempNext.push([newR, newC]);
        }
      })
    });
    next = tempNext;
  }

  let noFreshLeft = 0;

  //check if any 1s left in updated grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) noFreshLeft += 1;
    }
  }

  // if still 1s left, return -1,  otherwise return counter
  return noFreshLeft > 0 ? -1 : counter;
}

export default orangesRotting;
