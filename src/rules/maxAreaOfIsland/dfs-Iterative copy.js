/**
 * @param {character[][]} grid
 * @return {number}
 */
const bfs = (grid, x, y, m, n) => {
  let sum = 0;
  const queue = [];
  queue.push([x, y]);

  const directions = [-1, 0, 1, 0, -1];

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    sum++;

    for (let i = 0; i < directions.length - 1; i++) {
      const newX = x + directions[i];
      const newY = y + directions[i + 1];

      if (!isOutOfBound(newX, newY, m, n) && grid[newX][newY] === 1) {
        grid[newX][newY] = 0;
        queue.push([newX, newY]);
      }
    }
  }
  return sum;
}

const isOutOfBound = (x, y, m, n) => {
  return x < 0 || y < 0 || x >= m || y >= n;
}

export default (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        const sum = bfs(grid, i, j, m, n);
        max = Math.max(sum, max);
      }
    }
  }

  return max;
};
