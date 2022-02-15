/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/***************************************************************************************************
 * Runtime: 99 ms, faster than 83.11% of JavaScript online submissions for Zigzag Conversion.      *
 * Memory Usage: 48.7 MB, less than 23.40% of JavaScript online submissions for Zigzag Conversion. *
 ***************************************************************************************************/

// https://leetcode.com/problems/zigzag-conversion/discuss/3522/Intuitive-Javascript-Solution

var convert = function(s, numRows) {
  // return original string if can't zigzag
  if (numRows === 1 || s.length < numRows) return s;

  let rows = [];
  let converted = '';
  let reverse = false;
  let count = 0;

  // prepare rows
  for (let i = 0; i < numRows; i++) rows[i] = [];
  // reverse the push flow when reaching turning points
  for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if (count === numRows - 1 || count === 0) reverse = !reverse;
  }
  // put together converted string
  return rows.reduce((converted, cur) => converted + cur.join(''), '');
};

export default convert;

// P    A     H      N
//  A  P  L  S  I  I   G
//   Y     I     R
