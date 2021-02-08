/**
 * @param {character[][]} grid
 * @return {number}
 */
// not working for case4
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

export default (grid) => {
  const xLimit = grid.length;
  const yLimit = grid[0].length;
  let visited = new Set();
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1 && !visited.has(i + "" + j)) {
        visited.add(i + "" + j);
        debugger;
        let count = 1;
        const markDirection = (x, y) => {
          visited.add(x + "" + y);
          directions.map(([xDirection, yDirection]) => {
            const currentX = x + xDirection;
            const currentY = y + yDirection;
            const visitedIndex = currentX + "" + currentY;
            if (currentX >= 0 && currentX < xLimit && currentY >= 0 && currentY < yLimit
              && !visited.has(visitedIndex)
              && grid[currentX][currentY] === 1) {
              count += 1;
              visited.add(visitedIndex);
              markDirection(currentX, currentY, count);
            } else {
              visited.add(visitedIndex);
            }
          })
        };
        markDirection(i, j, count);
        debugger;
        max = max > count ? max : count;
      } else {
        visited.add(i + "" + j);
      }
    }

  }
  return max;
};
