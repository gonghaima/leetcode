/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// https://leetcode.com/problems/zigzag-conversion/discuss/416860/6-or-5-Line-JavaScript-Solution

/***************************************************************************************************
 * Runtime: 97 ms, faster than 83.45% of JavaScript online submissions for Zigzag Conversion.      *
 * Memory Usage: 48.1 MB, less than 26.05% of JavaScript online submissions for Zigzag Conversion. *
 ***************************************************************************************************/
/***************************************************************
 * Pseudocode It                                               *
 * Make an array with the zigzag sequence                      *
 * Make an array with as many strings as we need rows          *
 * Append the characters to the row strings in zigzag sequence *
 * Join the row strings in the array together                  *
 ***************************************************************/


var convert = function(s, numRows) {
  // 1. Make an array with the zigzag sequence
  const zigzag = [...new Array(numRows).keys()];
  zigzag.push(...zigzag.slice(1, -1).reverse());
  // 2. Make an array with as many strings as we need rows
  const rows = new Array(numRows).fill('');
  // 3. Append the characters to the row strings in zigzag sequence
  [...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c));
  // 4. Join the row strings in the array together
  return rows.join('');
};

export default convert;
