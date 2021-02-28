/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

/*******************************************************************************************
 *  Runtime: 208 ms, faster than 48.43% of JavaScript online submissions for 01 Matrix.    *
 * Memory Usage: 49.2 MB, less than 53.15% of JavaScript online submissions for 01 Matrix. *
 *                                                                                         *
 *******************************************************************************************/


var updateMatrix = function (matrix) {
  const rows = matrix.length;
  if (rows == 0)
    return matrix;
  const cols = matrix[0].length;
  // vector < vector < int > > dist(rows, vector<int>(cols, INT_MAX - 100000));
  const dist = [...Array(rows)].map(_ => Array(cols).fill(Number.MAX_VALUE))

  //First pass: check for left and top
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 0)
        dist[i][j] = 0;
      else {
        if (i > 0)
          dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
        if (j > 0)
          dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
      }
    }
  }

  //Second pass: check for bottom and right
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (i < rows - 1)
        dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      if (j < cols - 1)
        dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
    }
  }

  return dist;
}

export default updateMatrix;


/**************************************************************************************************************************************************************************************************************************************************************************************************************************
 * Approach #3 DP Approach [Accepted]                                                                                                                                                                                                                                                                                     *
 * Intuition                                                                                                                                                                                                                                                                                                              *
 *                                                                                                                                                                                                                                                                                                                        *
 * The distance of a cell from 0 can be calculated if we know the nearest distance for all the neighbours, in which case the distance is minimum distance of any neightbour + 1. And, instantly, the word come to mind DP!!                                                                                               *
 * For each 1, the minimum path to 0 can be in any direction. So, we need to check all the 4 direction. In one iteration from top to bottom, we can check left and top directions, and we need another iteration from bottom to top to check for right and bottom direction.                                              *
 *                                                                                                                                                                                                                                                                                                                        *
 * Algorithm                                                                                                                                                                                                                                                                                                              *
 *                                                                                                                                                                                                                                                                                                                        *
 * Iterate the matrix from top to bottom-left to right:                                                                                                                                                                                                                                                                   *
 * Update \text{dist}[i][j]=\min(\text{dist}[i][j],\min(\text{dist}[i][j-1],\text{dist}[i-1][j])+1)dist[i][j]=min(dist[i][j],min(dist[i][j−1],dist[i−1][j])+1) i.e., minimum of the current dist and distance from top or left neighbour +1, that would have been already calculated previously in the current iteration. *
 * Now, we need to do the back iteration in the similar manner: from bottom to top-right to left:                                                                                                                                                                                                                         *
 * Update \text{dist}[i][j]=\min(\text{dist}[i][j],\min(\text{dist}[i][j+1],\text{dist}[i+1][j])+1)dist[i][j]=min(dist[i][j],min(dist[i][j+1],dist[i+1][j])+1) i.e. minimum of current dist and distances calculated from bottom and right neighbours, that would be already available in current iteration.              *
 *                                                                                                                                                                                                                                                                                                                        *
 **************************************************************************************************************************************************************************************************************************************************************************************************************************/