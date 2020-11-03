/***********************************************************************
 * bfs solution - expand & increase steps, and keep track the max step *
 ***********************************************************************/

var maxDistance = function (grid) {
  var max = 0;
  var lastIndex = grid.length - 1;
  var point;

  var points = [];
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        points.push({ row: i, col: j, step: 0 });
      }
    }
  }

  var row, col, step;
  while (points.length) {
    point = points.shift();

    if (max < point.step) {
      max = point.step;
    }

    step = point.step + 1;
    if (point.row > 0 && grid[(row = point.row - 1)][point.col] === 0) {
      grid[row][point.col] = step;
      points.push({ row: row, col: point.col, step: step });
    }
    if (point.col > 0 && grid[point.row][(col = point.col - 1)] === 0) {
      grid[point.row][col] = step;
      points.push({ row: point.row, col: col, step: step });
    }
    if (point.row < lastIndex && grid[(row = point.row + 1)][point.col] === 0) {
      grid[row][point.col] = step;
      points.push({ row: row, col: point.col, step: step });
    }
    if (point.col < lastIndex && grid[point.row][(col = point.col + 1)] === 0) {
      grid[point.row][col] = step;
      points.push({ row: point.row, col: col, step: step });
    }
  }

  return max === 0 ? -1 : max;
};

export default maxDistance;
