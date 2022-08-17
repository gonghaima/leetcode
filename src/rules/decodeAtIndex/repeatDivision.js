/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/********************************************************************************************
 * We decode the string and N keeps the length of decoded string, until N >= K.             *
 * Then we go back from the decoding position.                                              *
 * If it's S[i] = d is a digit, then N = N / d before repeat and K = K % N is what we want. *
 * If it's S[i] = c is a character, we return c if K == 0 or K == N                         *
 ********************************************************************************************/

// https://leetcode.com/problems/decoded-string-at-index/discuss/1632475/Easy-to-understand

/*********************************************************************************************************
 * Runtime: 108 ms, faster than 8.70% of JavaScript online submissions for Decoded String at Index.      *
 * Memory Usage: 42.2 MB, less than 43.48% of JavaScript online submissions for Decoded String at Index. *
 *********************************************************************************************************/

var decodeAtIndex = function(s, k) {
  let len = 0;
  let isDigit = false;

  for (let v of s) {
    if (v >= '0' && v <= '9') {
      len *= +v;
      isDigit = true;
    } else {
      len++;
      if (len === k && !isDigit) {
        return s[k - 1];
      }
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    const v = s[i];
    if (v >= '0' && v <= '9') {
      len = Math.ceil(len / +v); // Math.floor() wont work because we endup leaving few strings
      k %= len;
    } else {
      if (k === 0 || k === len) {
        return v;
      }
      len--;
    }
  }
};

export default decodeAtIndex;
