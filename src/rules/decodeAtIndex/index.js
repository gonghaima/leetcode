/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// https://leetcode.com/problems/decoded-string-at-index/discuss/1369688/javascript-dp-76ms

const isLowerCaseLetter = (c) => {
  return c.charCodeAt() >= 97 && c.charCodeAt() <= 122;
};

var decodeAtIndex = function(s, k) {
  let n = s.length;
  let dp = Array(n + 1).fill(0); // save current decoded string length by repeating
  for (let i = 0; i < n; i++) {
    if (isLowerCaseLetter(s[i])) {
      dp[i + 1] = dp[i] + 1;
    } else {
      dp[i + 1] = dp[i] * (s[i] - '0');
    }
  }
  k--;
  for (let i = n - 1; ~i; i--) {
    // get current decoded string length for each origin string index
    let curL = dp[i + 1];
    k %= curL;
    if (k + 1 == curL && isLowerCaseLetter(s[i])) return s[i]; // matched
  }
};

export default decodeAtIndex;
