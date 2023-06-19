var solveNQueens = function(n) {
  let res = [];
  solver(0, new Array(), n, res);
  return res;
};

function solver(cur_row, colPlacements, n, res) {
  // did we reach beyond last row ?
  // if so generate a board that matches colPlacements and add it to response
  // colPlacement: an array where each index represent a row, and value reprsent a column in that row were we put a queen
  // colPlacements may look like this: [1,3,0,2] which means: in row 0 the queen is in col 1, in row 1 the queen is in col 3 , etc...
  if (cur_row === n) {
    let board = generateBoard(n, colPlacements);
    res.push(board);
    return;
  }
  // else try to place a queen in every column in the current row
  for (let col = 0; col < n; col++) {
    colPlacements.push(col);
    // if this is a valid placement, recurse on the next row
    // since we can't have 2 queens on the same row
    if (isValid(colPlacements)) {
      solver(cur_row + 1, colPlacements, n, res);
    }
    // if the placement is invalid, or we have explored all the way deep
    // then we come back and undo our choice; BACKTRACK
    colPlacements.pop();
  }
}

function generateBoard(n, colPlacements) {
  let board = [];
  // make row for every queen in placements
  for (let row = 0; row < colPlacements.length; row++) {
    let board_row = [];
    for (let col = 0; col < n; col++) {
      if (col === colPlacements[row]) {
        board_row.push('Q');
      } else {
        board_row.push('.');
      }
    }
    board.push(board_row.join(''));
  }
  return board;
}

function isValid(colPlacements) {
  let n = colPlacements.length;
  let cur_row = n - 1;
  // FOR ALL PREV ROWS or QUEENS since each row must have 1 QUEEN
  // we only need to validate same col attack and diagonal attack

  // 1. for vertical attack the col pos of the queen we just inserted
  // will be equal to that of some other existing quens
  // 2. For diagonal attack the colDistance and rowDistance will be the same
  for (let row = 0; row < cur_row; row++) {
    let colDistance = Math.abs(colPlacements[cur_row] - colPlacements[row]);
    let rowDistance = cur_row - row;
    if (colDistance === 0 || rowDistance === colDistance) {
      return false;
    }
  }
  return true;
}
export default solveNQueens;
