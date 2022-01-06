/**
 * @param {number[]} stones
 * @return {number}
 */

/************************************************************************************************
 * Runtime: 143 ms, faster than 100.00% of JavaScript online submissions for Stone Game VIII.   *
 * Memory Usage: 50 MB, less than 100.00% of JavaScript online submissions for Stone Game VIII. *
 ************************************************************************************************/

// https://leetcode.com/problems/stone-game-viii/discuss/1224640/C%2B%2BPython-DP-O(N)-time-O(1)-space-(2-lines-1-line)

var stoneGameVIII = function(stones) {
  /**
   * if dp is the maxValue from a given array
   * diff = max[stones] - max[remainingStonesArray]
   */
  const N = stones.length;
  for (let i = 1; i < N; ++i) stones[i] += stones[i - 1]; // now A[i] is the prefix sum, i.e. prefix[i]
  let dp = stones[N - 1]; // dp[N - 2] = prefix[N - 1]
  for (let i = N - 2; i > 0; --i) dp = Math.max(dp, stones[i] - dp); // dp[i - 1] = max(dp[i], A[i] - dp[i])
  return dp; // dp[0]
};

export default stoneGameVIII;
