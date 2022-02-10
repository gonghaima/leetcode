/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

// https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/discuss/1169416/JavaScript-Bottom-Up-and-Top-Down-2-DP-Solutions
// https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/discuss/136346/C%2B%2B-DP

/***********************************************************************************************************************
 * Runtime: 204 ms, faster than 36.36% of JavaScript online submissions for Minimum ASCII Delete Sum for Two Strings.  *
 * Memory Usage: 49.6 MB, less than 37.66% of JavaScript online submissions for Minimum ASCII Delete Sum for Two Strings. *
 ***********************************************************************************************************************/

var minimumDeleteSum = function(s1, s2) {
  const memo = [...Array(s1.length)].map(() => Array(s2.length).fill(0));

  function delChar(i1, i2) {
    if (i1 == s1.length) return sumOfChars(s2.slice(i2));
    if (i2 == s2.length) return sumOfChars(s1.slice(i1));
    if (memo[i1][i2]) return memo[i1][i2];

    let res;

    if (s1[i1] == s2[i2]) res = delChar(i1 + 1, i2 + 1);
    else {
      const del1 = s1.charCodeAt(i1) + delChar(i1 + 1, i2);
      const del2 = s2.charCodeAt(i2) + delChar(i1, i2 + 1);
      res = Math.min(del1, del2);
    }
    memo[i1][i2] = res;
    return res;
  }

  function sumOfChars(str) {
    let sum = 0;
    for (let c of str) sum += c.charCodeAt();
    return sum;
  }
  return delChar(0, 0);
};

export default minimumDeleteSum;
