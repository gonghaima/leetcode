/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// dfs + memo
var maxResult = function(nums, k) {
  // (...) + LastItem

  // k(n) = max ( k(n-1) , k(n-2)) + nums(n)
  // base case

  const cache = {};

  const kIndex = [];
  for (let i = 1; i < k; i++) {
    kIndex.push(i);
  }

  const dp = (n) => {
    if (cache[n]) return cache[n];
    if (n < 0) return 0;
    if (n === 0) return nums[0];
    // return Math.max(dp(n - 1), dp(n - 2)) + nums[n];
    // cache[n] = Math.max(...kIndex.map((i) => dp(n - 1))) + nums[n];
    let curMax = Number.MIN_VALUE;
    for (let i = 1; i < k; i++) {
      if (n - i >= 0 && n - i <= nums.length - 1)
        curMax = Math.max(curMax, dp(n - i));
    }
    cache[n] = curMax + nums[n];
    return cache[n];
  };

  return dp(nums);
};

export default maxResult;
