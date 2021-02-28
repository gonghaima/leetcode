

var orangesRotting = function (grid) {
  if (grid[0][0] === 0) return -1;



  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const isValid = (r, c) => r >= 0 && r < rows & c >= 0 && c < cols;
  let counter = 0;
  let next = [];
  next.push([0, 0]);

  while (next.length) {
    counter += 1;
    let tempNext = [];
    next.map(([cR, cC]) => {
      directions.map(([r, c]) => {
        const newR = cR + r;
        const newC = cC + c;
        if (isValid(newR, newC) && grid[newR][newC] === 1) {
          grid[newR, newC] = 2;
          tempNext.push([newR, newC]);
        }
      })
    });
    next = tempNext;
  }

  const noFreshLeft = 0;
  grid.map(c => c.map(([r, c]) => {
    if (grid[r][c] === 1) noFreshLeft += 1;
  }));
  return noFreshLeft > 0 ? -1 : counter;
}

export default orangesRotting;
