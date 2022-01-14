/*************************************************************************************************
 *   Runtime: 84 ms, faster than 35.22% of JavaScript online submissions for Climbing Stairs.    *
 * Memory Usage: 38.6 MB, less than 44.69% of JavaScript online submissions for Climbing Stairs. *
 *************************************************************************************************/

export default (n) => {
  const initial = [0, 1, 2, 3];
  if (n < 4) return initial[n];
  const dp = new Array(n + 1).fill(0);

  [0, 1, 2, 3].map((i) => (dp[i] = i));
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
