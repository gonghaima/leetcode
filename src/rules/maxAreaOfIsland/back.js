/**
 * @param {character[][]} grid
 * @return {number}
 */
// not working for case4
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

export default (grid) => {
  const xLimit = grid.length - 1;
  const yLimit = grid[0].length - 1;
  let visited = {};
  let max = 0;
  let count = { num: 0 };

  const markDirection = (x, y) => {
    visited[x + "" + y] = true;
    count = { num: count.num + 1 }
    directions.map(([xDirection, yDirection]) => {
      const currentX = x + xDirection;
      const currentY = y + yDirection;
      const visitedIndex = currentX + "" + currentY;
      if (currentX < 0 || currentX > xLimit || currentY < 0 || currentY > yLimit) return;
      if (visited[visitedIndex]) return;
      visited[visitedIndex] = true;
      debugger;
      if (grid[currentX][currentY] === 0) return;
      if (grid[currentX][currentY] === 1) {
        const newNo = count.num + 1;
        count = { num: newNo }
        markDirection(currentX, currentY);
      }

      // if (currentX >= 0 && currentX < xLimit && currentY >= 0 && currentY < yLimit
      //   && !visited.has(visitedIndex)
      //   && grid[currentX][currentY] === 1) {
      //   count += 1;
      //   visited.add(visitedIndex);
      //   markDirection(currentX, currentY, count);
      // } else {
      //   visited.add(visitedIndex);
      // }
    })
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visited[i + "" + j]) continue;
      visited[i + "" + j] = true;
      if (grid[i][j] === 1) {
        debugger;
        count = { num: 0 };

        markDirection(i, j);
        debugger;
        max = max > count.num ? max : count.num;
      };
    };
  };
  return max;
};
