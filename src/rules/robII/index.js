/**
 * @param {number[]} nums
 * @return {number}
 */

/*************************************************************************************************
 *   Runtime: 86 ms, faster than 37.16% of JavaScript online submissions for House Robber II.    *
 * Memory Usage: 39.6 MB, less than 16.60% of JavaScript online submissions for House Robber II. *
 *************************************************************************************************/

// https://leetcode.com/problems/house-robber-ii/discuss/894731/Javascript-or-Simple-4-line-State-Transition-w-Explanation-or-O(n)-time-O(1)-space

var rob = function(n) {
  let r1 = n[0],
    s1 = 0,
    r2 = 0,
    s2 = 0;
  for (let i = 1; i < n.length; i++)
    [r1, s1, r2, s2] = [
      s1 + n[i],
      Math.max(r1, s1),
      s2 + n[i],
      Math.max(r2, s2),
    ];
  return Math.max(s1, r2, s2, n[0]) || 0;
};
export default rob;
