/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

// https://leetcode.com/problems/interleaving-string/discuss/1354439/DP-bottom-up(84ms)

/*****************************************************************************************************
 * Runtime: 103 ms, faster than 61.19% of JavaScript online submissions for Interleaving String.     *
 * Memory Usage: 46.2 MB, less than 21.64% of JavaScript online submissions for Interleaving String. *
 *****************************************************************************************************/

//dp - buttom up

var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const dp = Array.from({ length: s1.length + 1 }).map(() =>
    new Array(s2.length + 1).fill(false)
  );
  // base case empty string is true for all the 3 strings
  dp[0][0] = true;

  // fill only the first row
  for (let i = 1; i <= s1.length; i++) {
    if (s1[i - 1] === s3[i - 1]) {
      dp[i][0] = dp[i - 1][0];
    }
  }
  // fill only the first col
  for (let i = 1; i <= s2.length; i++) {
    if (s2[i - 1] === s3[i - 1]) {
      dp[0][i] = dp[0][i - 1];
    }
  }
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      // if it mathes with s1 check the prev row value
      if (s1[i - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i - 1][j];
      }
      // if it mathes with s2 check the prev col value
      if (s2[j - 1] === s3[i + j - 1]) {
        // or condition is where if it matches both s1 and s2 and we can check either of it
        dp[i][j] = dp[i][j] || dp[i][j - 1];
      }
    }
  }
  return dp[s1.length][s2.length];
  console.log(dp);
};
export default isInterleave;
