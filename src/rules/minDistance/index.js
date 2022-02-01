/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// https://leetcode.com/problems/edit-distance/discuss/25846/C%2B%2B-O(n)-space-DP

/**
 * To apply DP, we define the state dp[i][j] to be the minimum number of operations to convert word1[0..i) to word2[0..j).

  For the base case, that is, to convert a string to an empty string, the mininum number of operations (deletions) is just the length of the string. So we have dp[i][0] = i and dp[0][j] = j.

  For the general case to convert word1[0..i) to word2[0..j), we break this problem down into sub-problems. Suppose we have already known how to convert word1[0..i - 1) to word2[0..j - 1) (dp[i - 1][j - 1]), if word1[i - 1] == word2[j - 1], then no more operation is needed and dp[i][j] = dp[i - 1][j - 1].

  If word1[i - 1] != word2[j - 1], we need to consider three cases.

  Replace word1[i - 1] by word2[j - 1] (dp[i][j] = dp[i - 1][j - 1] + 1);
  If word1[0..i - 1) = word2[0..j) then delete word1[i - 1] (dp[i][j] = dp[i - 1][j] + 1);
  If word1[0..i) + word2[j - 1] = word2[0..j) then insert word2[j - 1] to word1[0..i) (dp[i][j] = dp[i][j - 1] + 1).
  So when word1[i - 1] != word2[j - 1], dp[i][j] will just be the minimum of the above three cases.
 */

/***********************************************************************************************
 * Runtime: 124 ms, faster than 60.26% of JavaScript online submissions for Edit Distance.     *
 * Memory Usage: 47.7 MB, less than 15.17% of JavaScript online submissions for Edit Distance. *
 ***********************************************************************************************/

var minDistance = function(word1, word2) {
  const m = word1.length,
    n = word2.length;
  const dp = new Array(m + 1).fill(null).map((_) => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(dp[i - 1][j - 1], Math.min(dp[i][j - 1], dp[i - 1][j])) + 1;
      }
    }
  }
  return dp[m][n];
};

export default minDistance;
