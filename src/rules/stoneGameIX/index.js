/**
 * @param {number[]} stones
 * @return {boolean}
 */

// https://leetcode.com/problems/stone-game-ix/discuss/1500245/JavaC%2B%2BPython-Easy-and-Concise-6-lines-O(n)

/**********************************************************************************************
 * Runtime: 167 ms, faster than 33.33% of JavaScript online submissions for Stone Game IX.    *
 * Memory Usage: 57.1 MB, less than 6.67% of JavaScript online submissions for Stone Game IX. *
 **********************************************************************************************/

var stoneGameIX = function(stones) {
  let cnt = new Array(3).fill(0);
  for (let a of stones)
      cnt[a % 3]++;
  if (Math.min(cnt[1], cnt[2]) === 0)
      return Math.max(cnt[1], cnt[2]) > 2 && cnt[0] % 2 > 0;
  return Math.abs(cnt[1] - cnt[2]) > 2 || cnt[0] % 2 == 0;
};

export default stoneGameIX;
