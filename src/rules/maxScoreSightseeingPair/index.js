/**
 * @param {number[]} values
 * @return {number}
 */

// https://leetcode.com/problems/best-sightseeing-pair/discuss/260850/JavaC%2B%2BPython-One-Pass-O(1)-space

/*******************************************************************************************************
 *   Runtime: 111 ms, faster than 42.86% of JavaScript online submissions for Best Sightseeing Pair.   *
 * Memory Usage: 44.4 MB, less than 31.17% of JavaScript online submissions for Best Sightseeing Pair. *
 *******************************************************************************************************/

var maxScoreSightseeingPair = function(values) {
  let res = 0,
    cur = 0;
  for (let a of values) {
    res = Math.max(res, cur + a);
    cur = Math.max(cur, a) - 1;
  }
  return res;
};

export default maxScoreSightseeingPair;
