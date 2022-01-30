/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/longest-palindromic-subsequence/discuss/99101/Straight-forward-Java-DP-solution

/*****************************************************************************************************************
 *   Runtime: 254 ms, faster than 88.30% of JavaScript online submissions for Longest Palindromic Subsequence.   *
 * Memory Usage: 88.8 MB, less than 17.54% of JavaScript online submissions for Longest Palindromic Subsequence. *
 *****************************************************************************************************************/

var longestPalindromeSubseq = function(s) {
  const dp = new Array(s.length)
    .fill(null)
    .map((_) => new Array(s.length).fill(0));

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s.charAt(i) == s.charAt(j)) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][s.length - 1];
};

export default longestPalindromeSubseq;
