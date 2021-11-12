/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// https://leetcode.com/problems/jump-game-vi/discuss/979414/javascript-solution

// Along with that, we will also pop those indices which will never have any chance of being chosen in the future. So for eg., if the score for current index - dp[i] is greater than some indices stored in the queue, it will always be optimal to choose dp[i] instead of those other indices. So, we will just pop those indices from queue since they won't ever be used.

var maxResult = function(nums, k) {
  if (nums.length == 1) return nums[0];

  let dp = new Array(nums.length);
  let queue = [];
  queue.push(0);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    while (queue.length > 0 && queue[0] < i - k) {
      queue.shift();
    }
    dp[i] = dp[queue[0]] + nums[i];

    while (queue.length > 0 && dp[i] >= dp[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
  }
  return dp[nums.length - 1];
};

export default maxResult;
