/**
 * @param {number[]} nums
 * @return {number}
 */



//https://leetcode.com/problems/jump-game-ii/discuss/18089/Evolve-from-brute-force-to-optimal

// Brute force O(2^n), this is the most straight forward solution, just try all the moves.

const helper = (p, nums) => {
  let n = nums.length;
  if (p >= n - 1)
    return 0;
  let minSteps = n;
  for (let i = 1; i <= nums[p]; i++)
    minSteps = Math.min(minSteps, 1 + helper(p + i, nums));
  return minSteps;
}

var jump = function (nums) {
  return helper(0, nums);
};

export default jump;