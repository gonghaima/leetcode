/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/custom-sort-string/discuss/1979872/JavaScript-Using-Splice

/**************************************************************************************************
 * Runtime: 124 ms, faster than 5.18% of JavaScript online submissions for Custom Sort String.    *
 * Memory Usage: 44 MB, less than 15.36% of JavaScript online submissions for Custom Sort String. *
 **************************************************************************************************/

var customSortString = function(order, s) {
  let finalStr = '';
  for (let i = 0; i < order.length; i++) {
    while (s.indexOf(order[i]) > -1) {
      finalStr += order[i];
      let sArr = s.split('');
      sArr.splice(s.indexOf(order[i]), 1);
      s = sArr.join('');
    }
  }
  return finalStr + s;
};

export default customSortString;
