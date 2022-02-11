/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// https://leetcode.com/problems/uncrossed-lines/discuss/282842/JavaC%2B%2BPython-DP-The-Longest-Common-Subsequence

/*************************************************************************************************
 * Runtime: 112 ms, faster than 56.25% of JavaScript online submissions for Uncrossed Lines.     *
 * Memory Usage: 45.3 MB, less than 26.56% of JavaScript online submissions for Uncrossed Lines. *
 *************************************************************************************************/

/**************************************************************
 * actually it is a question - The Longest Common Subsequence *
 **************************************************************/

var maxUncrossedLines = function(nums1, nums2) {
  let m = nums1.length,
    n = nums2.length,
    dp = new Array(m + 1).fill(null).map((_) => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; ++i)
    for (let j = 1; j <= n; ++j)
      if (nums1[i - 1] == nums2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
  return dp[m][n];
};
export default maxUncrossedLines;
