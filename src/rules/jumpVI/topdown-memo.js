// https://leetcode.com/problems/jump-game-vi/discuss/1260737/Optimizations-from-Brute-Force-to-Dynamic-Programming-w-Explanation

/***********************************************************************************************************************
 * In the above brute force approach, we are re-calculating for the same index multiple times. But we can observe that the maximum score which we can obtain by starting from an index i will always remain the same. *
 * So, instead of doing unnecessary repeated calculations, we can use dynamic programming to store the calculated results and directly return it whenever required in the future calculations. Here, we will maintain an dp array, where dp[i] will denote the maximum score that we can obtain starting from ith index. We will initialize dp[n-1] = nums[n-1] (since that's the only score we can obtain starting at n-1th index) and rest of dp[i] to -infinity denoting that they have not been computed yet. *
 * Now, for each i, we have the choice to make jumps of lengths 1,2...k and we will store the maximum score in dp[i] after trying out jump of each length. If dp[i] is already computed once, we will just return it without doing any re-computations. *
 ***********************************************************************************************************************/

/**********************************************************************************************************************
 * Time Complexity : O(k*N) For each index, we are trying out k jumps and storing the results to avoid future recomputations. Overall, the time complexity required is k+k+k...N times = O(k*N) *
 *                                              Space Complexity : O(N)                                               *
 **********************************************************************************************************************/

const solve = (nums, dp, k, i) => {
  if (dp[i] !== Number.MIN_VALUE) return dp[i]; // already calculated result for index i
  for (
    let j = 1;
    j <= k;
    j++ // try jumps of all length and choose the one which maximises the score
  )
    if (i + j < nums.length)
      dp[i] = Math.max(dp[i], nums[i] + solve(nums, dp, k, i + j));
  return dp[i];
};

var maxResult = function(nums, k, i = 0) {
  const dp = Array(nums.length).fill(Number.MIN_VALUE);
  dp[dp.length - 1] = nums[nums.length - 1]; // dp[n-1]=nums[n-1]
  return solve(nums, dp, k, 0);
};

export default maxResult;
