/**
 * @param {number} n
 * @return {boolean}
 */

var winnerSquareGame = function(n) {
  const memo = new Array(100001).fill(null);

  const dfs = (n) => {
    if (memo[n] != null) return memo[n];
    let res = false;
    if (n == 0 || Math.ceil(Math.sqrt(n)) == Math.floor(Math.sqrt(n)))
      res = true;
    //If there is atleast one way,such that second player can't win. return TRUE
    for (let i = +Math.floor(Math.sqrt(n)); i > 0 && !res; i--)
      if (!dfs(n - i * i)) res = true;
    memo[n] = res;
    return res;
  };
  return dfs(n);
};
export default winnerSquareGame;
