/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// https://leetcode.com/problems/game-of-life/discuss/407373/Javascript-O(1)-Sollution

/**********************************************************************************************
 * Runtime: 57 ms, faster than 97.69% of JavaScript online submissions for Game of Life.      *
 * Memory Usage: 42.7 MB, less than 41.35% of JavaScript online submissions for Game of Life. *
 **********************************************************************************************/

var getNeighbors = function(r, c, board) {
  let radius = [-1, 0, +1],
    count = 0;
  for (let i = 0; i < radius.length; i++) {
    for (let j = 0; j < radius.length; j++) {
      if (!(radius[i] == 0 && radius[j] == 0) && board[r + radius[i]] != null) {
        let neighbor = board[r + radius[i]][c + radius[j]];
        if (Math.abs(neighbor) == 1) count += 1;
      }
    }
  }
  return count;
};

var gameOfLife = function(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let cell = board[i][j];
      let neighbors = getNeighbors(i, j, board);
      if (cell == 0 && neighbors == 3) {
        board[i][j] = 2;
      }
      if (cell == 1 && (neighbors < 2 || neighbors > 3)) {
        board[i][j] = -1;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == -1) board[i][j] = 0;
      if (board[i][j] == 2) board[i][j] = 1;
    }
  }
  return board;
};

export default gameOfLife;
