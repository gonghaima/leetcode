// https://leetcode.com/problems/jump-game-vi/discuss/1260737/Optimizations-from-Brute-Force-to-Dynamic-Programming-w-Explanation


// int maxResult(vector<int>& nums, int k) {
// 	vector<int> dp(size(nums), INT_MIN);
// 	dp.back() = nums.back();  // dp[n-1]=nums[n-1]
// 	return solve(nums, dp, k, 0);
}
// recursive solver which finds max score to reach n-1 starting from ith index
// int solve(vector<int>& nums, vector<int>& dp, int k, int i) {
// 	if(dp[i] != INT_MIN) return dp[i];   // already calculated result for index i
// 	for(int j = 1; j <= k; j++)          // try jumps of all length and choose the one which maximises the score
// 		if(i + j < size(nums))
// 			dp[i] = max(dp[i], nums[i] + solve(nums, dp, k, i + j));
// 	return dp[i];
// }
// recursive solver which finds max score to reach n-1 starting from ith index
const solve = (nums,  dp, k,  i) => {
	if(dp[i] !== Number.MIN_VALUE) return dp[i];   // already calculated result for index i
	for(let j = 1; j <= k; j++)          // try jumps of all length and choose the one which maximises the score
		if(i + j < nums.length)
			dp[i] = Math.max(dp[i], nums[i] + solve(nums, dp, k, i + j));
	return dp[i];
}


var maxResult = function(nums, k, i = 0) {
  const dp = Array(nums.length).fill(Number.MIN_VALUE);
  dp[dp.length-1] = nums[nums.length-1]; // dp[n-1]=nums[n-1]
  return solve(nums, dp, k, 0);
};

export default maxResult;
