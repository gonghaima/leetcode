/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

/********************************************************************************************
 *  Runtime: 96 ms, faster than 65.97% of JavaScript online submissions for Flood Fill.     *
 * Memory Usage: 41.4 MB, less than 26.39% of JavaScript online submissions for Flood Fill. *
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

  let next = [];
  next.push([sr, sc]);
  // if 0 or or 2 return
  while (next.length > 0) {
    const [r, c] = next.pop();
    directions.map(([rVal, cVal]) => {
      const newRowValue = r + rVal;
      const newColumnValue = c + cVal;
      if (valid(newRowValue, newColumnValue) && needToBeUpdate(image[newRowValue][newColumnValue])) {
        image[newRowValue][newColumnValue] = newColor;
        next.push([newRowValue, newColumnValue])
      }
    })
  }
  return image;
};

export default floodFill;