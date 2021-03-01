/**
 * @param {number[][]} grid
 * @return {number}
 */

/*************************************************************************************************
 *  Runtime: 84 ms, faster than 96.33% of JavaScript online submissions for Rotting Oranges.     *
 * Memory Usage: 41.3 MB, less than 37.72% of JavaScript online submissions for Rotting Oranges. *
 *************************************************************************************************/


var orangesRotting = function (grid) {
  let nFresh = 0;
  let rottenQueue = [];
  let iterations = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        nFresh++;
      } else if (grid[i][j] === 2) {
        rottenQueue.push([i, j]);
      }
    }
  }

  function rotOrange(i, j) {
    if (i < 0 || i > grid.length - 1) return;
    if (j < 0 || j > grid[0].length - 1) return;
    if (grid[i][j] === 1) {
      grid[i][j] = 2;
      nFresh--;
      rottenQueue.push([i, j]);
    }
  }

  while (rottenQueue.length > 0) {
    let levelLen = rottenQueue.length;
    while (levelLen > 0) {
      let [i, j] = rottenQueue.shift();
      rotOrange(i - 1, j);
      rotOrange(i, j + 1);
      rotOrange(i + 1, j);
      rotOrange(i, j - 1);
      levelLen--;
    }
    if (rottenQueue.length > 0) iterations++;
  }

  return nFresh > 0 ? -1 : iterations;
};


export default orangesRotting;
