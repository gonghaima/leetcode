/**
 * @param {character[][]} board
 * @return {boolean}
 */

function isValidRow(board, row, col, value) {
  // j represents on col
  for (let j = 0; j < 8; j++) {
    // check first to see if the current col matches the passed in col
    if (j !== col) {
      if (board[row][j] === value) {
        return false;
      }
    }
  }

  return true;
}

function isValidCol(board, row, col, value) {
  // j represents on row
  for (let i = 0; i < 8; i++) {
    // check first to see if the current row matches the passed in row
    if (i !== row) {
      if (board[i][col] === value) {
        return false;
      }
    }
  }

  return true;
}

function isValidBox(board, row, col, value) {
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (i !== row && j !== col) {
        if (board[i][j] === value) {
          return false;
        }
      }
    }
  }

  return true;
}

var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value !== '.') {
        if (
          !isValidRow(board, i, j, value) ||
          !isValidCol(board, i, j, value) | !isValidBox(board, i, j, value)
        ) {
          return false;
        }
      }
    }
  }
  return true;
};

export default isValidSudoku;
