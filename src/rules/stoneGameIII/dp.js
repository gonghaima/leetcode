/**
 * @param {number[]} stoneValue
 * @return {string}
 */

// https://leetcode.com/problems/stone-game-iii/discuss/564260/JavaC%2B%2BPython-DP-O(1)-Space
// https://leetcode.com/problems/stone-game-iii/discuss/564393/JavaScript-Dynamic-Programming

/************************************************************************************************
 *   Runtime: 140 ms, faster than 91.67% of JavaScript online submissions for Stone Game III.   *
 * Memory Usage: 51.5 MB, less than 75.00% of JavaScript online submissions for Stone Game III. *
 ************************************************************************************************/

var stoneGameIII = function(stoneValue) {
  let n = stoneValue.length,
    dp = new Array(n).fill(-Infinity); // Number.MIN_VALUE not working
  for (let i = n - 1; i >= 0; --i) {
    for (let k = 1, take = 0; k <= 3 && i + k <= n; ++k) {
      take += stoneValue[i + k - 1];
      dp[i] = Math.max(dp[i], take - (dp[i + k] || 0));
    }
  }
  if (dp[0] > 0) return 'Alice';
  if (dp[0] < 0) return 'Bob';
  return 'Tie';
};

export default stoneGameIII;
