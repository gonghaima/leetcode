/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

/********************************************************************************************
 *  Runtime: 88 ms, faster than 94.68% of JavaScript online submissions for Flood Fill.     *
 * Memory Usage: 40.6 MB, less than 95.37% of JavaScript online submissions for Flood Fill. *
 ********************************************************************************************/


const floodFill = function (image, sr, sc, newColor) {
  let old = image[sr][sc]
  if (old == newColor) return image
  image[sr][sc] = newColor

  const change = function (r, c) {
    image[r][c] = newColor
    //up
    if (image[r - 1] != undefined && image[r - 1][c] == old) change(r - 1, c)
    //down
    if (image[r + 1] != undefined && image[r + 1][c] == old) change(r + 1, c)
    //left
    if (image[r][c - 1] == old) change(r, c - 1)
    //right
    if (image[r][c + 1] == old) change(r, c + 1)
  }
  //up
  if (image[sr - 1] != undefined && image[sr - 1][sc] == old) change(sr - 1, sc)
  //down
  if (image[sr + 1] !== undefined && image[sr + 1][sc] == old) change(sr + 1, sc)
  //left
  if (image[sr][sc - 1] == old) change(sr, sc - 1)
  //right
  if (image[sr][sc + 1] == old) change(sr, sc + 1)

  return image
};

export default floodFill;