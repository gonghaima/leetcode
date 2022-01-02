/**
 * @param {number[]} stones
 * @return {number}
 */

// https://leetcode.com/problems/stone-game-vii/discuss/1264516/JS-Python-Java-C%2B%2B-or-Easy-DP-Solution-w-Explanation

/*************************************************************************************************
 * Runtime: 104 ms, faster than 100.00% of JavaScript online submissions for Stone Game VII.     *
 * Memory Usage: 40.7 MB, less than 100.00% of JavaScript online submissions for Stone Game VII. *
 *************************************************************************************************/

 var stoneGameVII = function(S) {
     // Uint32Array(N) same as new Array(N).fill(0)
  let N = S.length, dp = new Uint32Array(N)
  // ~i   same i>=0
  for (let i = N - 2; ~i; i--) {
      let total = S[i]
      for (let j = i + 1; j < N; j++) {
          total += S[j]
          dp[j] = Math.max(total - S[i] - dp[j], total - S[j] - dp[j-1])
      }
  }
  return dp[N-1]
};

export default stoneGameVII;
