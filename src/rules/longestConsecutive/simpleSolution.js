/**
 * @param {number[]} nums
 * @return {number}
 */

/**************************************************************************************************************
 * Runtime: 173 ms, faster than 74.61% of JavaScript online submissions for Longest Consecutive Sequence.     *
 * Memory Usage: 58.4 MB, less than 37.61% of JavaScript online submissions for Longest Consecutive Sequence. *
 **************************************************************************************************************/

// inspired by
// https://leetcode.com/problems/longest-consecutive-sequence/discuss/41057/Simple-O(n)-with-Explanation-Just-walk-each-streak

// Simple O(n) with Explanation - Just walk each streak

var longestConsecutive = function(nums) {
  const numsSet = new Set(nums);
  let best = 0;
  [...numsSet].map((x) => {
    if (!numsSet.has(x - 1)) {
      let y = x + 1;
      while (numsSet.has(y)) y += 1;
      best = Math.max(best, y - x);
    }
  });
  return best;
};

export default longestConsecutive;
