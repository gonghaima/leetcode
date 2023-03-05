/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  const vals = [1, ...nums, 1];
  const n = nums.length;
  const dp = [...Array(n + 2)].map(() => Array(n + 2).fill(0));
  for (let len = 1; len <= n; len++) {
    for (let i = 1; i + len <= n + 1; i++) {
      const j = i + len - 1;
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k - 1] + vals[i - 1] * vals[k] * vals[j + 1] + dp[k + 1][j]
        );
      }
    }
  }
  return dp[1][n];
};

export default maxCoins;
