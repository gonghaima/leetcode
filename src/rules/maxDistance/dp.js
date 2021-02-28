// DP

/**************************************************************************************************************
 * Runtime: 100 ms, faster than 97.14% of JavaScript online submissions for As Far from Land as Possible.     *
 * Memory Usage: 41.4 MB, less than 97.14% of JavaScript online submissions for As Far from Land as Possible. *
 **************************************************************************************************************/


var maxDistance = function (grid) {
  const n = grid.length, m = grid[0].length; let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) continue;
      grid[i][j] = 201; //201 here cuz as the despription, the size won't exceed 100.
      if (i > 0) grid[i][j] = Math.min(grid[i][j], grid[i - 1][j] + 1);
      if (j > 0) grid[i][j] = Math.min(grid[i][j], grid[i][j - 1] + 1);
    }
  }

  for (let i = n - 1; i > -1; i--) {
    for (let j = m - 1; j > -1; j--) {
      if (grid[i][j] == 1) continue;
      if (i < n - 1) grid[i][j] = Math.min(grid[i][j], grid[i + 1][j] + 1);
      if (j < m - 1) grid[i][j] = Math.min(grid[i][j], grid[i][j + 1] + 1);
      res = Math.max(res, grid[i][j]); //update the maximum
    }
  }

  return res == 201 ? -1 : res - 1;
};

export default maxDistance;


/***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
 * The idea is completly the same as 542. 01 Matrix.                                                                                                                                                                                                                                                                                                                                                       *
 * We maintain a dp table, the entries in the dp table represent the distance to the nearest '1' + 1, why +1? Will explain this in a second.                                                                                                                                                                                                                                                               *
 * We traverse the grid 2 times, first from left up -> bottom right, second bottom right -> left up.                                                                                                                                                                                                                                                                                                       *
 * In the first loop, we update the minimum distance to reach a '1' from the current position either keep going left or going upward. Here's a small trick, i pick 201 as the max value, cuz per the problem description, the # of rows won't exceed 100, so the length of longest path in the matrix will not exceed 200.                                                                                 *
 * Say, a matrix A, after the first loop, it will become                                                                                                                                                                                                                                                                                                                                                   *
 *                                                                                                                                                                                                                                                                                                                                                                                                         *
 * [1, 0, 0]      [1, 2, 3]                                                                                                                                                                                                                                                                                                                                                                                *
 * [0, 0, 0]  ->  [2, 3, 4]                                                                                                                                                                                                                                                                                                                                                                                *
 * [0, 0, 1]      [3, 4, 1]                                                                                                                                                                                                                                                                                                                                                                                *
 * please note that this is not the real distance                                                                                                                                                                                                                                                                                                                                                          *
 *                                                                                                                                                                                                                                                                                                                                                                                                         *
 * In the second loop, we go from bottom right to up left to update the min distance from another side. At the end, please not that res is not the value we want, if there's no '1's in the matrix, all the entry will be set to 201 in such a case, we should return -1 instead of 201; if there are '1's in the matrix, as mentioned at the begining, res is the maximum distance + 1, so we need res-1. *
 *                                                                                                                                                                                                                                                                                                                                                                                                         *
 * [1, 2, 3]    [1, 2, 3]  real distance [0, 1, 2]                                                                                                                                                                                                                                                                                                                                                         *
 * [2, 3, 4] -> [2, 3, 2]        ->      [1, 2, 1]                                                                                                                                                                                                                                                                                                                                                         *
 * [3, 4, 1]    [3, 2, 1]        -1      [2, 1, 0]                                                                                                                                                                                                                                                                                                                                                         *
 * the maximum value in the table is 3, this means the answer is 3 - 1 = 2.                                                                                                                                                                                                                                                                                                                                *
 * time/space: O(nm)/O(1)                                                                                                                                                                                                                                                                                                                                                                                  *
 ***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/