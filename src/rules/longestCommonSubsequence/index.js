/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// https://leetcode.com/problems/longest-common-subsequence/discuss/348884/C%2B%2B-with-picture-O(nm)

/************************************************************************************************************
 * Runtime: 464 ms, faster than 14.79% of JavaScript online submissions for Longest Common Subsequence.     *
 * Memory Usage: 89.2 MB, less than 13.01% of JavaScript online submissions for Longest Common Subsequence. *
 ************************************************************************************************************/

var longestCommonSubsequence = function(text1, text2) {
  const m = new Array(1001).fill(null).map((_) => new Array(1001).fill(0));
  for (let i = 0; i < text1.length; ++i)
    for (let j = 0; j < text2.length; ++j)
      m[i + 1][j + 1] =
        text1[i] == text2[j] ? m[i][j] + 1 : Math.max(m[i + 1][j], m[i][j + 1]);
  return m[text1.length][text2.length];
};

export default longestCommonSubsequence;
