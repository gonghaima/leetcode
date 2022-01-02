/**
 * @param {number[]} stones
 * @return {number}
 */

// https://leetcode.com/problems/stone-game-vii/discuss/992761/Javascript-or-Simple-DP-(no-prefix-sum-needed)-Solution-or-beats-100

/************************************************************************************************
 * Runtime: 358 ms, faster than 68.97% of JavaScript online submissions for Stone Game VII.     *
 * Memory Usage: 69.8 MB, less than 27.59% of JavaScript online submissions for Stone Game VII. *
 ************************************************************************************************/

var stoneGameVII = function(s) {
  let len = s.length,
    dp = new Array(len).fill().map((_) => new Array(len).fill(0));
  for (let i = len - 2; ~i; i--)
    for (let j = i + 1, sum = s[i] + s[j]; j < len; sum += s[++j])
      dp[i][j] = Math.max(sum - s[i] - dp[i + 1][j], sum - s[j] - dp[i][j - 1]);
  return dp[0][len - 1];
};

export default stoneGameVII;
