/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// https://leetcode.com/problems/delete-operation-for-two-strings/discuss/103214/Java-DP-Solution-(Longest-Common-Subsequence)

// To make them identical, just find the longest common subsequence. The rest of the characters have to be deleted from the both the strings, which does not belong to longest common subsequence.

/******************************************************************************************************************
 * Runtime: 260 ms, faster than 23.77% of JavaScript online submissions for Delete Operation for Two Strings.     *
 * Memory Usage: 49.5 MB, less than 21.31% of JavaScript online submissions for Delete Operation for Two Strings. *
 ******************************************************************************************************************/

var minDistance = function(word1, word2) {
  const dp = new Array(word1.length + 1)
    .fill(null)
    .map((_) => new Array(word2.length + 1).fill(0));
  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i == 0 || j == 0) dp[i][j] = 0;
      else
        dp[i][j] =
          word1.charAt(i - 1) == word2.charAt(j - 1)
            ? dp[i - 1][j - 1] + 1
            : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  const val = dp[word1.length][word2.length];
  return word1.length - val + word2.length - val;
};

export default minDistance;
