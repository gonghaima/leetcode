/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const M = board.length;
  const N = board[0].length;

  const path = new Set();

  function backtrack(r, c, idx) {
    if (idx === word.length) return true;
    if (r < 0 || c < 0 || r >= M || c >= N) return false;
    if (board[r][c] !== word.charAt(idx)) return false;

    const arrStr = `${r}|${c}`;
    if (path.has(arrStr)) return false;

    path.add(arrStr);
    const found =
      backtrack(r + 1, c, idx + 1) ||
      backtrack(r - 1, c, idx + 1) ||
      backtrack(r, c + 1, idx + 1) ||
      backtrack(r, c - 1, idx + 1);
    path.delete(arrStr);
    return found;
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === word.charAt(0)) if (backtrack(i, j, 0)) return true;
    }
  }

  return false;
};
export default exist;
