/****************************************************************************************************************************************
 * Create a grid indicates the distance between each node and island, with original grid 1 -> 0 and 0 -> max integer(or row + col + 2). *
 * Use DP to find the distance between each node and nearest island. Update result with max distance.                                   *
 ****************************************************************************************************************************************/

var maxDistance = function (grid) {
  var res = -1, row = grid.length, col = grid[0].length,
    g = new Array(row);

  for (var i = 0; i < row; i++) {
    if (g[i] === undefined) g[i] = new Array(col);
    for (var j = 0; j < col; j++) {
      if (grid[i][j] === 0) g[i][j] = Number.MAX_SAFE_INTEGER;
      else g[i][j] = 0;
    }
  }

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (g[i][j] !== 0) {
        var min = g[i][j];
        if (i > 0 && g[i - 1][j] + 1 < min) min = g[i - 1][j] + 1;
        if (j > 0 && g[i][j - 1] + 1 < min) min = g[i][j - 1] + 1;
        g[i][j] = min;
      }
    }
  }

  for (var i = row - 1; i >= 0; i--) {
    for (var j = col - 1; j >= 0; j--) {
      if (g[i][j] !== 0) {
        var min = g[i][j];
        if (i < row - 1 && g[i + 1][j] + 1 < min) min = g[i + 1][j] + 1;
        if (j < col - 1 && g[i][j + 1] + 1 < min) min = g[i][j + 1] + 1;
        g[i][j] = min;
        res = Math.max(res, g[i][j]);
      }
    }
  }

  return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};

export default maxDistance;
