/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/custom-sort-string/discuss/1676681/JavaScript

/****************************************************************************************************
 * Runtime: 119 ms, faster than 6.20% of JavaScript online submissions for Custom Sort String.      *
 * Memory Usage: 42.9 MB, less than 42.11% of JavaScript online submissions for Custom Sort String. *
 ****************************************************************************************************/

var customSortString = function(order, s) {
  let map = new Map();
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0);
    }
    map.set(c, map.get(c) + 1);
  }
  let ans = '';
  for (const c of order) {
    if (map.has(c)) {
      ans += c.repeat(map.get(c));
      map.delete(c);
    }
  }

  for (const [key, count] of map) {
    ans += key.repeat(count);
  }

  return ans;
};

export default customSortString;
