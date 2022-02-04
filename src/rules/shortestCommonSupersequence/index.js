/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// https://leetcode.com/problems/shortest-common-supersequence/discuss/1211376/JavaScript-Time-O(N*M)-Using-Longest-Common-Subsequence-String

/****************************************************************************************************************
 * Runtime: 160 ms, faster than 71.62% of JavaScript online submissions for Shortest Common Supersequence .     *
 * Memory Usage: 58.1 MB, less than 52.70% of JavaScript online submissions for Shortest Common Supersequence . *
 ****************************************************************************************************************/

var shortestCommonSupersequence = function(str1, str2) {
  let res = '',
    i = str2.length - 1,
    j = str1.length - 1,
    k = 0,
    ans = '';
  let dp = Array(str2.length)
    .fill(0)
    .map((_) => Array(str1.length).fill(0));

  //CREATE LONGEST COMMON SUBSEQUENCE DP MATRIX
  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str2[i] === str1[j]) {
        dp[i][j] = (i - 1 >= 0 && j - 1 >= 0 ? dp[i - 1][j - 1] : 0) + 1;
      } else {
        let left = j - 1 >= 0 ? dp[i][j - 1] : 0;
        let up = i - 1 >= 0 ? dp[i - 1][j] : 0;
        dp[i][j] = Math.max(left, up);
      }
    }
  }

  //CREATE LONGEST COMMON SUBSEQUENCE STRING
  while (i >= 0 && j >= 0) {
    if (str2[i] === str1[j]) {
      res = str1[j--] + res;
      i--;
    } else {
      if (i - 1 < 0 && j - 1 < 0) {
        break;
      } else if (i - 1 < 0) {
        j--;
      } else if (j - 1 < 0) {
        i--;
      } else if (dp[i - 1][j] >= dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }

  i = 0;
  j = 0;

  //ADD THE CHARACTER BY CHOOSING APPROPRIATELY AND INCREASING THE POINTER
  while (k < res.length) {
    if (str1[i] === str2[j] && str1[i] === res[k]) {
      ans += str1[i];
      i++;
      j++;
      k++;
    } else {
      if (str1[i] !== res[k]) {
        ans += str1[i++];
      }
      if (str2[j] !== res[k]) {
        ans += str2[j++];
      }
    }
  }

  //IF ANY CHARCTERS LEFT THEN APPEND THEM ALL IN THE RESULT
  while (i < str1.length) ans += str1[i++];
  while (j < str2.length) ans += str2[j++];

  return ans;
};

export default shortestCommonSupersequence;
