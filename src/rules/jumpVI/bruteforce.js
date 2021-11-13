// https://leetcode.com/problems/jump-game-vi/discuss/1260737/Optimizations-from-Brute-Force-to-Dynamic-Programming-w-Explanation

/***********************************************************************************************************************
 * Let's start with doing just what the questions asks us.
 * For any index i (such that i < n-1), we can jump atmost k-steps forward
 * and we need to reach n-1 index such that we maximise the sum of scores of intermediate jumps. *
 *
 * For all the indices, we will just try each jump of lengths from 1...k
 * and return the one which maximises the score at the end. Since we cannot go outside array bounds, we will return nums[n-1] (last index we can reach) when we reach i >= n-1. *
 ***********************************************************************************************************************/

/**********************************************************************************************************************
 * Time Complexity : O(k^N), where N is the size of array and k is max jump length.
 * We have k choices at each index and we are trying out each choice everytime
 * and recursing for remaining indices. So overall time complexity becomes k*k*k*...N times = O(k^N) *
 *
 * Space Complexity : O(N), required by the recursive stack.                              *
 **********************************************************************************************************************/

var maxResult = function(nums, k, i = 0) {
  if (i >= nums.length - 1) return nums[nums.length - 1];
  let score = Number.MIN_VALUE;
  for (let j = 1; j <= k; j++)
    score = Math.max(score, nums[i] + maxResult(nums, k, i + j));
  return score;
};

export default maxResult;
