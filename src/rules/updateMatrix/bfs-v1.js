/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

/*******************************************************************************************
 *  Runtime: 204 ms, faster than 51.57% of JavaScript online submissions for 01 Matrix.    *
 * Memory Usage: 48.7 MB, less than 59.45% of JavaScript online submissions for 01 Matrix. *
 *******************************************************************************************/

var updateMatrix = function (matrix) {
  const rows = matrix.length;
  if (rows == 0)
    return matrix;
  const cols = matrix[0].length;
  // const dist = new Array(rows).fill(0).map(() => new Array(cols).fill(Number.MAX_VALUE));
  const dist = [...Array(rows)].map(x => Array(cols).fill(Number.MAX_VALUE))
  const q = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        dist[i][j] = 0;
        q.push([i, j]); //Put all 0s in the queue.
      }
    }
  }

  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  while (q.length) {
    const [i, j] = q.shift();
    dir.map(([r, c]) => {
      const new_r = i + r, new_c = j + c;
      if (new_r >= 0 && new_c >= 0 && new_r < rows && new_c < cols) {
        if (dist[new_r][new_c] > dist[i][j] + 1) {
          dist[new_r][new_c] = dist[i][j] + 1;
          q.push([new_r, new_c]);
        }
      }
    });
  }
  return dist;
}

export default updateMatrix;

/**********************************************************************************************************************************************************************************************************************************************************************************************************************************
 *                                                                                                                                                                                                                                                                                                                                *
 * Approach #2 Using BFS [Accepted]                                                                                                                                                                                                                                                                                               *
 * Intuition                                                                                                                                                                                                                                                                                                                      *
 *                                                                                                                                                                                                                                                                                                                                *
 * A better brute force: Looking over the entire matrix appears wasteful and hence, we can use Breadth First Search(BFS) to limit the search to the nearest 0 found for each 1. As soon as a 0 appears during the BFS, we know that the 0 is nearest, and hence, we move to the next 1.                                           *
 *                                                                                                                                                                                                                                                                                                                                *
 * Think again: But, in this approach, we will only be able to update the distance of one 1 using one BFS, which could in fact, result in slightly higher complexity than the Approach #1 brute force. But hey,this could be optimised if we start the BFS from 0s and thereby, updating the distances of all the 1s in the path. *
 *                                                                                                                                                                                                                                                                                                                                *
 * Algorithm                                                                                                                                                                                                                                                                                                                      *
 *                                                                                                                                                                                                                                                                                                                                *
 * For our BFS routine, we keep a queue, q to maintain the queue of cells to be examined next.                                                                                                                                                                                                                                    *
 * We start by adding all the cells with 0s to q.                                                                                                                                                                                                                                                                                 *
 * Intially, distance for each 0 cell is 0 and distance for each 1 is INT_MAX, which is updated during the BFS.                                                                                                                                                                                                                   *
 * Pop the cell from queue, and examine its neighbours. If the new calculated distance for neighbour {i,j} is smaller, we add {i,j} to q and update dist[i][j].                                                                                                                                                                   *
 **********************************************************************************************************************************************************************************************************************************************************************************************************************************/