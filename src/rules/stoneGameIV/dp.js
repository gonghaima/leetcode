/**
 * @param {number} n
 * @return {boolean}
 */

// https://leetcode.com/problems/stone-game-iv/discuss/974415/Java-5-lines-of-code-or3-Approaches-or-DFS%2BMemo-or-DP-1D-array-orwith-explanation.

/***********************************************************************************************
 *   Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Stone Game IV.   *
 * Memory Usage: 42.6 MB, less than 50.00% of JavaScript online submissions for Stone Game IV. *
 ***********************************************************************************************/

var winnerSquareGame = function(n) {
  const memo = new Array(n + 1).fill(false);
  for (let i = 0; i <= n; i++) {
    //If memo[i]=true,At this index Player will win .So dont visit this index.
    if (memo[i]) continue;
    //At this index,Player will loose.So mark index+k*k as WIN
    for (let k = 1; i + k * k <= n; k++) memo[i + k * k] = true;
  }
  return memo[n];
};
export default winnerSquareGame;
