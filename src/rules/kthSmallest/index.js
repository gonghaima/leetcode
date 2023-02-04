/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(matrix, k) {
  return matrix.flat().sort((a, b) => a - b)[k - 1];
};

var countLEQ = function(matrix, x) {
  var n = matrix.length;
  var count = 0;
  var j;

  matrix.forEach(function(row) {
    for (j = 0; j < n && row[j] <= x; j++) {}
    count += j;
  });
  return count;
};

export default kthSmallest;
