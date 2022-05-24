/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/custom-sort-string/discuss/1338813/javascript-direct-5-lines-88ms

/****************************************************************************************************
 * Runtime: 72 ms, faster than 71.98% of JavaScript online submissions for Custom Sort String.      *
 * Memory Usage: 41.6 MB, less than 98.66% of JavaScript online submissions for Custom Sort String. *
 ****************************************************************************************************/

const customSortString = (order, s) => {
  let m = new Map();
  for (let i = 0; i < order.length; i++) m.set(order[i], i);
  let a = s.split('');
  a.sort((x, y) => (m.get(x) || 0) - (m.get(y) || 0));
  return a.join('');
};

export default customSortString;
