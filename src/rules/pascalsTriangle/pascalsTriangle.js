/*************************************************************************************************
 *  Runtime: 117 ms, faster than 14.77% of JavaScript online submissions for Pascal's Triangle.  *
 * Memory Usage: 38 MB, less than 98.48% of JavaScript online submissions for Pascal's Triangle. *
 *************************************************************************************************/

export default (numRows) => {
  if (numRows) {
    var result = [[1]];

    for (var i = 1; i < numRows; i++) {
      result[i] = [];
      for (var j = 0; j < i + 1; j++) {
        result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
      }
    }

    return result;
  } else {
    return [];
  }
};
