/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
  // greedy
  let max = nums[0];

  let idx = 0;
  while (idx < nums.length) {
    let curMax = Number.MIN_VALUE;
    let curIdx = idx;
    for (let i = 1; i < k; i++) {
      // curMax = Math.max(curMax, nums[curMax + i]);
      if (nums[curIdx + i] > curMax) {
        curMax = nums[curIdx + i];
        curIdx = curIdx + i;
      }
    }
    idx = curIdx;
    max += curMax;
  }
  return max;
};

export default maxResult;
