/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// https://leetcode.com/problems/partition-array-for-maximum-sum/discuss/290863/JavaC%2B%2BPython-DP-O(K)-Space

/*****************************************************************************************************************
 *   Runtime: 175 ms, faster than 12.00% of JavaScript online submissions for Partition Array for Maximum Sum.   *
 * Memory Usage: 38.8 MB, less than 96.00% of JavaScript online submissions for Partition Array for Maximum Sum. *
 *****************************************************************************************************************/

//  Time O(NK)
//  Space O(K)

var maxSumAfterPartitioning = function (arr, k) {
  let N = arr.length, dp = new Array(k).fill(null);
  for (let i = 1; i <= N; ++i) {
    let curMax = 0, best = 0;
    for (let j = 1; j <= k && i - j >= 0; ++j) {
      curMax = Math.max(curMax, arr[i - j]);
      best = Math.max(best, dp[(i - j) % k] + curMax * j);
    }
    dp[i % k] = best;
  }
  return dp[N % k];
};

export default maxSumAfterPartitioning;