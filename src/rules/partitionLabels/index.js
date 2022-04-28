/**
 * @param {string} s
 * @return {number[]}
 */

// https://leetcode.com/problems/partition-labels/discuss/1283020/Easy-to-understand-for-beginners-as-well(runtime-98)

/**************************************************************************************************
 * Runtime: 92 ms, faster than 56.29% of JavaScript online submissions for Partition Labels.      *
 * Memory Usage: 42.7 MB, less than 91.53% of JavaScript online submissions for Partition Labels. *
 **************************************************************************************************/

var partitionLabels = function(s) {
  let last = -1;
  const res = [];
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    last = Math.max(s.lastIndexOf(s[i]), last);
    if (i === last) {
      res.push(i - left + 1);
      left = i + 1;
    }
  }
  return res;
};

export default partitionLabels;
