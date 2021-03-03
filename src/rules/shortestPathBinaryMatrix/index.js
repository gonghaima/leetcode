/**************************************************************************************************************
 * Runtime: 132 ms, faster than 58.16% of JavaScript online submissions for Shortest Path in Binary Matrix.   *
 * Memory Usage: 46 MB, less than 74.61% of JavaScript online submissions for Shortest Path in Binary Matrix. *
 **************************************************************************************************************/


/**
* @param {number[][]} grid
* @return {number}
*/

var shortestPathBinaryMatrix = function (grid) {
  if (grid.length === 1 && grid[0].length === 1 && grid[0][0] === 0) return 1;
  if (grid[0][0] !== 0) return -1;

  let next = [[0, 0]];

  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0], [-1, -1], [1, -1], [1, 1], [-1, 1]];

  const isValid = (r, c) => r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;

  const isEnd = (r, c) => (r === grid.length - 1) && (c === grid[0].length - 1);
  let reachedToEnd = false;

  while (next.length) {
    const tempNext = [];

    next.map(([currentR, currentC]) => {
      const counter = grid[currentR][currentC];
      if (currentR === 0 && currentC === 0) grid[currentR][currentC] = 1;
      directions.map(([r, c]) => {
        const acR = currentR + r;
        const acC = currentC + c;
        if (isValid(acR, acC) && grid[acR][acC] === 0) {
          if (isEnd(acR, acC)) reachedToEnd = true;
          grid[acR][acC] = counter + 1;
          tempNext.push([acR, acC]);
        }
      });
    })
    next = tempNext;
  }

  const result = reachedToEnd ? grid[grid.length - 1][grid[0].length - 1] + 1 : -1;

  return result;
}

export default shortestPathBinaryMatrix;
