/**
 * @param {number[]} nums
 * @return {number}
 */



//https://leetcode.com/problems/jump-game-ii/discuss/18089/Evolve-from-brute-force-to-optimal

// greedy  - O(n)

// From a position, the number of steps to jump is the one that can go furthest after the jump. 
// Because it covers all the options of the other choices.

const helper = (p, nums) => {
  let n = nums.length;
  if (p >= n - 1)
    return 0;
  if (p + nums[p] >= n - 1)
    return 1;
  let max = 0, steps = 0;
  for (let i = 1; i <= nums[p]; i++) {
    let jump2 = i + nums[p + i];
    if (jump2 > max) {
      max = jump2;
      steps = i;
    }
  }
  return 1 + helper(p + steps, nums);
}

var jump = function (nums) {
  return helper(0, nums);
};

export default jump;