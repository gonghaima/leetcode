/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// https://leetcode.com/problems/decoded-string-at-index/discuss/979122/Javascript-solution

/*********************************************************************************************************
 * Runtime: 74 ms, faster than 78.26% of JavaScript online submissions for Decoded String at Index.      *
 * Memory Usage: 42.4 MB, less than 34.78% of JavaScript online submissions for Decoded String at Index. *
 *********************************************************************************************************/

var isNum = function(char) {
  return char >= 0 && char <= 9;
};

var decodeAtIndex = function(s, k) {
  var lens = [isNum(s[0]) ? 0 : 1];
  for (var i = 1; i < s.length; i++) {
    var char = s[i];
    if (isNum(char)) {
      lens.push(lens[i - 1] * char);
    } else {
      lens.push(lens[i - 1] + 1);
    }
  }
  for (var i = s.length - 1; i >= 0; i--) {
    k %= lens[i];
    if (k === 0 && !isNum(s[i])) return s[i];
  }
};

export default decodeAtIndex;
