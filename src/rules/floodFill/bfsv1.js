/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

/******************************************************************************************
 * Runtime: 96 ms, faster than 65.97% of JavaScript online submissions for Flood Fill.    *
 * Memory Usage: 41 MB, less than 54.86% of JavaScript online submissions for Flood Fill. *
 ******************************************************************************************/

const floodFill = function (image, sr, sc, newColor) {
  const color = image[sr][sc];
  if (color === newColor) return image;

  const queue = [[sr, sc]];

  for (const [r, c] of queue) {
    image[r][c] = newColor;
    // Previous row's node at index c == color? Add to the queue.
    if (image[r - 1]?.[c] === color) queue.push([r - 1, c]);
    // Next row node c.
    if (image[r + 1]?.[c] === color) queue.push([r + 1, c]);

    // Same row, previous col node.
    if (image[r]?.[c - 1] === color) queue.push([r, c - 1]);
    // Next col node.
    if (image[r]?.[c + 1] === color) queue.push([r, c + 1]);
  }
  return image;
};

export default floodFill;