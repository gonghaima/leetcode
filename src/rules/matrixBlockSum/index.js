/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */

// https://leetcode.com/problems/matrix-block-sum/discuss/477036/JavaPython-3-PrefixRange-sum-w-analysis-similar-to-LC-30478

/**************************************************************************************************
 *   Runtime: 144 ms, faster than 49.67% of JavaScript online submissions for Matrix Block Sum.   *
 * Memory Usage: 41.9 MB, less than 45.75% of JavaScript online submissions for Matrix Block Sum. *
 **************************************************************************************************/

var matrixBlockSum = function(mat, k) {
  let m = mat.length,
    n = mat[0].length;
  let rangeSum = new Array(m + 1)
    .fill(null)
    .map((_) => new Array(n + 1).fill(0));
  for (let i = 0; i < m; ++i)
    for (let j = 0; j < n; ++j)
      rangeSum[i + 1][j + 1] =
        rangeSum[i + 1][j] + rangeSum[i][j + 1] - rangeSum[i][j] + mat[i][j];
  let ans = new Array(m).fill(null).map((_) => new Array(n).fill(0));
  for (let i = 0; i < m; ++i)
    for (let j = 0; j < n; ++j) {
      let r1 = Math.max(0, i - k),
        c1 = Math.max(0, j - k),
        r2 = Math.min(m, i + k + 1),
        c2 = Math.min(n, j + k + 1);
      ans[i][j] =
        rangeSum[r2][c2] -
        rangeSum[r2][c1] -
        rangeSum[r1][c2] +
        rangeSum[r1][c1];
    }
  return ans;
};

export default matrixBlockSum;
