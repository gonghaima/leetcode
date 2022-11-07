/**
 * @param {number[]} nums
 * @return {number}
 */

/************************************************************************************************************
 * Runtime: 166 ms, faster than 78.66% of JavaScript online submissions for Longest Consecutive Sequence.   *
 * Memory Usage: 62 MB, less than 24.53% of JavaScript online submissions for Longest Consecutive Sequence. *
 ************************************************************************************************************/
// inspired by
// https://leetcode.com/problems/longest-consecutive-sequence/discuss/41055/My-really-simple-Java-O(n)-solution-Accepted

var longestConsecutive = function(nums) {
  let res = 0;
  const map = new Map();
  for (let n of nums) {
    if (!map.has(n)) {
      const left = map.has(n - 1) ? map.get(n - 1) : 0;
      const right = map.has(n + 1) ? map.get(n + 1) : 0;
      // sum: length of the sequence n is in
      const sum = left + right + 1;
      map.set(n, sum);

      // keep track of the max length
      res = Math.max(res, sum);

      // extend the length to the boundary(s)
      // of the sequence
      // will do nothing if n has no neighbors
      map.set(n - left, sum);
      map.set(n + right, sum);
    } else {
      // duplicates
      continue;
    }
  }
  return res;
};

export default longestConsecutive;
