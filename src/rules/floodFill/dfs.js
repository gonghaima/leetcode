/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

/********************************************************************************************
 * Runtime: 100 ms, faster than 46.30% of JavaScript online submissions for Flood Fill.     *
 * Memory Usage: 41.7 MB, less than 14.35% of JavaScript online submissions for Flood Fill. *
 ********************************************************************************************/

const floodFill = function (image, sr, sc, newColor) {
  // 4 direction
  const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

  const targetVal = image[sr][sc];
  image[sr][sc] = newColor;
  if (targetVal === newColor) return image;


  const row = image.length;
  const column = image[0].length;
  const valid = (r, c) => r >= 0 && r < row && c >= 0 && c < column;
  const needToBeUpdate = val => val === targetVal;

  const dfs = (r, c) => {
    image[r][c] = newColor;
    directions.map(([rVal, cVal]) => {
      const newRowValue = r + rVal;
      const newColumnValue = c + cVal;
      if (valid(newRowValue, newColumnValue) && needToBeUpdate(image[newRowValue][newColumnValue])) dfs(newRowValue, newColumnValue)
    });
  }

  dfs(sr, sc);
  return image;
};

export default floodFill;