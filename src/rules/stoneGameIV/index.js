/**
 * @param {number} n
 * @return {boolean}
 */

// https://leetcode.com/problems/stone-game-iv/discuss/730582/JavaC%2B%2BPython-DP

/***********************************************************************************************
 *   Runtime: 104 ms, faster than 87.50% of JavaScript online submissions for Stone Game IV.   *
 * Memory Usage: 42.6 MB, less than 50.00% of JavaScript online submissions for Stone Game IV. *
 ***********************************************************************************************/

/**
 * dp - my thought
 * 1. find out all square numbers up to n (less or equal)
 * 2. if equal to n, Alece win, return true
 * 3. dp[i] = max(dp[i], min(dp[i-k*k]))
 */

/**
 *
 * dp[i] means the result for n = i.
 * if there is any k that dp[i - k * k] == false,
 * it means we can make the other lose the game,
 * so we can win the game an dp[i] = true.
 */

var winnerSquareGame = function(n) {
  const dp = new Array(n + 1).fill(false);
  for (let i = 1; i <= n; ++i) {
    for (let k = 1; k * k <= i; ++k) {
      if (!dp[i - k * k]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};
export default winnerSquareGame;
