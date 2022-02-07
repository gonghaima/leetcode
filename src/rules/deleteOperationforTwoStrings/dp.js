/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// https://leetcode.com/problems/delete-operation-for-two-strings/discuss/661916/Evolve-from-brute-force-to-dp

/****************************************************************************************************************
 * Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Delete Operation for Two Strings.   *
 * Memory Usage: 49 MB, less than 23.14% of JavaScript online submissions for Delete Operation for Two Strings. *
 ****************************************************************************************************************/

var minDistance = function(word1, word2) {
  let l1 = word1.length,
    l2 = word2.length;
  const dp = new Array(l1 + 1).fill(null).map((_) => new Array(l2 + 1).fill(0));
  for (let i = 0; i <= l1; i++)
    for (let j = 0; j <= l2; j++) {
      if (i == 0 || j == 0) dp[i][j] = i + j;
      else
        dp[i][j] =
          word1.charAt(i - 1) == word2.charAt(j - 1)
            ? dp[i - 1][j - 1]
            : 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  return dp[l1][l2];
};

export default minDistance;
