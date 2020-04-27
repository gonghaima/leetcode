export default (grid) => {
  // grid.map(r => {
  //   r.map(c => console.log(c))
  // });
  console.table(grid);

  const rowsCount = grid.length;
  const columnsCount = grid[0].length;

  const visited = { "00": true };
  let toBeExplored = [[0, 0]];
  let steps = 0;
  let reachedToEnd = false;

  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, 1, -1];

  const get_neighbours = (r, c, gridData) => {
    let found = false;

    for (let i = 0; i < 4; i++) {
      const rr = r + dr[i];
      const cc = c + dc[i];

      // skip out of bounds locations
      if (rr < 0 || cc < 0) continue;
      if (rr >= rowsCount || cc < columnsCount) continue;

      // skip visited locations or blocked cells


    }
  }

  while (toBeExplored.length > 0 && !reachedToEnd) {
    let next = [];
    steps += 1;
    toBeExplored.map(item => {
      const [r, c] = item;

      // found
      if (grid[r][c] === 'E') {
        reachedToEnd = true;
      };

      // add to visited
      visited[r + "" + c] = true;

      for (let i = 0; i < 4 && !reachedToEnd; i++) {
        const rr = r + dr[i];
        const cc = c + dc[i];

        // skip out of bounds locations
        if (rr < 0 || cc < 0) continue;
        if (rr >= rowsCount || cc >= columnsCount) continue;

        // skip visited locations or blocked cells
        if (visited[rr + "" + cc]) continue;
        if (grid[rr][cc] === '#') continue;

        // add to next, toBeExplored
        next.push([rr, cc]);

        // mark as visited
        // visited[rr + "" + cc] = true;

        // found
        // if (grid[rr][cc] === 'E') continue;

      }
    });
    toBeExplored = next;
  }

  return steps;
};
