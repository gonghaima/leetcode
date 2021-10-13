/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************
 *   Runtime: 125 ms, faster than 48.15% of JavaScript online submissions for Jump Game II.   *
 * Memory Usage: 40.4 MB, less than 93.28% of JavaScript online submissions for Jump Game II. *
 **********************************************************************************************/

//https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/discuss/506853/Java-A-general-greedy-solution-to-process-similar-problems

var jump = function (nums) {
  let cnt = 0, farCanReach = 0, end = 0;
  for (let i = 0; end < nums.length - 1; end = farCanReach) {
    cnt++;
    while (i < nums.length && i <= end) {
      farCanReach = Math.max(farCanReach, i + nums[i++]);
    }
    if (end == farCanReach) return -1;
  }
  return cnt;
};

export default jump;