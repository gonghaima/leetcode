/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************
 *   Runtime: 80 ms, faster than 78.84% of JavaScript online submissions for Jump Game II.    *
 * Memory Usage: 40.8 MB, less than 76.64% of JavaScript online submissions for Jump Game II. *
 **********************************************************************************************/

//https://leetcode.com/problems/jump-game-ii/discuss/18152/Java-Solution-with-explanation

var jump = function (nums) {
  // If nums.length < 2, means that we do not
  // need to move at all.
  if (nums == null || nums.length < 2) {
    return 0;
  }

  // First set up current region, which is
  // from 0 to nums[0].
  let l = 0;
  let r = nums[0];
  // Since the length of nums is greater than
  // 1, we need at least 1 step.
  let step = 1;

  // We go through all elements in the region.
  while (l <= r) {

    // If the right of current region is greater
    // than nums.length - 1, that means we are done.
    if (r >= nums.length - 1) {
      return step;
    }

    // We should know how far can we reach in current
    // region.
    let max = Number.MIN_VALUE;
    for (; l <= r; l++) {
      max = Math.max(max, l + nums[l]);
    }

    // If we can reach far more in this round, we update
    // the boundary of current region, and also add a step.
    if (max > r) {
      l = r;
      r = max;
      step++;
    }
  }

  // We can not finish the job.
  return -1;
};

export default jump;