/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
      const currentVal = element[j];
      if (currentVal === 0) {
        matrix[i][j] = 'Original';
        //set row
        for (let x = 0; x < matrix[i].length; x++) {
          if (x !== j && matrix[i][x] !== 0) matrix[i][x] = 'Updated';
        }
        // set col
        for (let y = 0; y < matrix.length; y++) {
          if (y !== i && matrix[y][j] !== 0) matrix[y][j] = 'Updated';
        }
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const element = matrix[i][j];
      if (element === 'Original' || element === 'Updated') matrix[i][j] = 0;
    }
  }

  return matrix;
};

export default setZeroes;
