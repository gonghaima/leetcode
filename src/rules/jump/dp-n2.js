/**
 * @param {number[]} nums
 * @return {number}
 */



//https://leetcode.com/problems/jump-game-ii/discuss/18089/Evolve-from-brute-force-to-optimal

// dp O(n^2)

const helper = (p, nums) => {
  let n = nums.length;
  const dp = Array(n).fill(null);
  for (let i = n - 2; i >= 0; i--) {
    dp[i] = n;
    for (let j = 1; j <= nums[i] && i + j < n; j++)
      dp[i] = Math.min(dp[i], 1 + dp[i + j]);
  }
  return dp[0];
}

var jump = function (nums) {
  return helper(0, nums);
};

export default jump;