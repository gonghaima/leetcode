/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// https://leetcode.com/problems/word-break/discuss/43790/Java-implementation-using-DP-in-two-ways

/********************************************************************************************
 *   Runtime: 113 ms, faster than 31.39% of JavaScript online submissions for Word Break.   *
 * Memory Usage: 40.4 MB, less than 77.20% of JavaScript online submissions for Word Break. *
 ********************************************************************************************/

var wordBreak = function(s, wordDict) {
  const f = new Array(s.length + 1).fill(false);
  const dict = new Set(wordDict);
  f[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (f[j] && dict.has(s.substring(j, i))) {
        f[i] = true;
        break;
      }
    }
  }

  return f[s.length];
};
export default wordBreak;
