/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */

/**************************************************************************************************
 * Runtime: 179 ms, faster than 51.96% of JavaScript online submissions for Shifting Letters.     *
 * Memory Usage: 66.7 MB, less than 19.61% of JavaScript online submissions for Shifting Letters. *
 **************************************************************************************************/

// https://leetcode.com/problems/shifting-letters/discuss/2305934/Javascript-or-O(n)-reverse-while-loop

var shiftingLetters = function(s, shifts) {
  let res = '',
    i = shifts.length;
  shifts.push(0);
  while (--i >= 0) {
    shifts[i] += shifts[i + 1];
    res =
      String.fromCharCode(((s.charCodeAt(i) - 97 + shifts[i]) % 26) + 97) + res;
  }
  return res;
};
export default shiftingLetters;
