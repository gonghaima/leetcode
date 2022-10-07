/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// https://leetcode.com/problems/game-of-life/discuss/1030067/JavaScript-In-Place-solution-that's-easy-to-understand

/**********************************************************************************************
 * Runtime: 103 ms, faster than 39.39% of JavaScript online submissions for Game of Life.     *
 * Memory Usage: 44.4 MB, less than 12.73% of JavaScript online submissions for Game of Life. *
 **********************************************************************************************/

// up, down, left, right, diagonals (4)
const bfs = (board, row, col) => {
  var isPixelDead = board[row][col] === 0,
    liveCellCount = 0,
    moves = [
      [row - 1, col - 1], // top left
      [row - 1, col], // top
      [row - 1, col + 1], // top right
      [row, col - 1], // left
      [row, col + 1], // right
      [row + 1, col - 1], // bottom left
      [row + 1, col], // bottom
      [row + 1, col + 1], // bottom right
    ];

  for (var i = 0; i <= moves.length - 1; i++) {
    let [newRow, newCol] = moves[i];

    if (isInBounds(board, newRow, newCol) && board[newRow][newCol] >= 1) {
      liveCellCount++;
    }
  }

  if (isPixelDead) {
    // dead now, alive next cycle
    if (liveCellCount === 3) return -1;
    // dead now, and dead later
    return 0;
  } else {
    // alive now, won't be alive next cycle
    if (liveCellCount < 2 || liveCellCount > 3) return 2;
    // alive now, and alive later
    else if (liveCellCount === 2 || liveCellCount === 3) return 1;
  }
};

const isInBounds = (board, row, col) => {
  return (
    row >= 0 &&
    row <= board.length - 1 &&
    col >= 0 &&
    col <= board[0].length - 1
  );
};

var gameOfLife = function(board) {
  for (var row = 0; row <= board.length - 1; row++) {
    for (var col = 0; col <= board[0].length - 1; col++) {
      board[row][col] = bfs(board, row, col);
    }
  }

  for (var row = 0; row <= board.length - 1; row++) {
    for (var col = 0; col <= board[0].length - 1; col++) {
      board[row][col] = Math.abs(board[row][col] % 2);
    }
  }
  return board;
};

export default gameOfLife;
