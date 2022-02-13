/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// https://leetcode.com/problems/uncrossed-lines/discuss/282842/JavaC%2B%2BPython-DP-The-Longest-Common-Subsequence

// 1D dp

/*************************************************************************************************
 * Runtime: 73 ms, faster than 95.31% of JavaScript online submissions for Uncrossed Lines.      *
 * Memory Usage: 41.9 MB, less than 98.44% of JavaScript online submissions for Uncrossed Lines. *
 *************************************************************************************************/

var maxUncrossedLines = function(nums1, nums2) {
  let m = nums1.length,
    n = nums2.length;
  if (m < n) return maxUncrossedLines(nums2, nums1);

  const dp = new Array(n + 1).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0, prev = 0, cur; j < n; j++) {
      cur = dp[j + 1];
      if (nums1[i] == nums2[j]) dp[j + 1] = 1 + prev;
      else dp[j + 1] = Math.max(dp[j + 1], dp[j]);
      prev = cur;
    }
  }
  return dp[n];
};
export default maxUncrossedLines;
