/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotateImage = function(matrix) {
  let length = matrix.length;

  matrix.reverse();

  // transpose
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  return matrix;
};

export default rotateImage;
