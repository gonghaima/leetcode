/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let start = 0,
    end = matrix.length * matrix[0].length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midNum =
      matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];

    if (midNum === target) return true;
    else if (midNum < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};

export default searchMatrix;
