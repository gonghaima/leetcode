/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

/*****************************************************************************************
 * Runtime: 224 ms, faster than 39.76% of JavaScript online submissions for 01 Matrix.   *
 * Memory Usage: 49 MB, less than 55.91% of JavaScript online submissions for 01 Matrix. *
 *****************************************************************************************/

var updateMatrix = function (matrix) {
  const row = matrix.length;
  const column = matrix[0].length;
  //the following two approach are good
  // const visited = new Array(row).fill(0).map(()=>new Array(column).fill(false));
  const visited = [...Array(row)].map(x => Array(column).fill(false))

  //dangerous - Since all the rows are filled with references to ONE array
  // const visited = (new Array(row)).map(() => {
  //   const ar = (new Array(column)).map(()=>false);
  //   return ar;
  // });
  let counter = 1;
  let next = [];
  // keep a visited tracker
  // keep a counter from 1
  //find all 0s , add as visited, also add as next
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (matrix[r][c] === 0) {
        visited[r][c] = true;
        next.push([r, c]);
      }
    }
  }

  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const isValid = (r, c) => r > -1 && r < row && c > -1 && c < column;

  //While next>0
  //for each adjacency, if not visited, 
  //set value to counter, add to tempNext
  //set next to tempNext

  while (next.length > 0) {
    const tempForNext = [];

    next.map(([r, c]) => {

      directions.map(([rDir, cDir]) => {
        const adjR = r + rDir;
        const adjC = c + cDir;
        if (isValid(adjR, adjC) && !visited[adjR][adjC]) {
          visited[adjR][adjC] = true;
          matrix[adjR][adjC] = counter;
          tempForNext.push([adjR, adjC]);
        }
      });
    });
    counter += 1;
    next = tempForNext;
  }

  //return matrix
  return matrix;
};

export default updateMatrix;