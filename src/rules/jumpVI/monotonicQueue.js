/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// monotonic queue

// https://leetcode.com/problems/jump-game-vi/discuss/1261753/JS-Python-Java-C%2B%2B-or-Easy-DP-Deque-Solution-w-Explanation

/**********************************************************************************************
 *   Runtime: 104 ms, faster than 89.80% of JavaScript online submissions for Jump Game VI.   *
 * Memory Usage: 48.8 MB, less than 97.96% of JavaScript online submissions for Jump Game VI. *
 **********************************************************************************************/

var maxResult = function(nums, k) {
  let n = nums.length,
    deq = [n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (deq[0] - i > k) deq.shift();
    nums[i] += nums[deq[0]];
    while (deq.length && nums[deq[deq.length - 1]] <= nums[i]) deq.pop();
    deq.push(i);
  }
  return nums[0];
};

export default maxResult;
