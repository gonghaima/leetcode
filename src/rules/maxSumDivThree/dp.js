/**
 * @param {number[]} nums
 * @return {number}
 */

/*****************************************************************************************************************
 *   Runtime: 112 ms, faster than 38.89% of JavaScript online submissions for Greatest Sum Divisible by Three.   *
 * Memory Usage: 47.1 MB, less than 35.18% of JavaScript online submissions for Greatest Sum Divisible by Three. *
 *****************************************************************************************************************/

// https://leetcode.com/problems/greatest-sum-divisible-by-three/discuss/431108/Java-O(N)-solution-Simple-Math-O(1)-space

var maxSumDivThree = function (nums) {
  const maxSumDivK = (nums, k) => {
    if (k == 0) return -1;
    // int[] dp = new int[k];
    const dp = new Array(k).fill(0);
    for (let num of nums) {
      let tmp = dp.slice();
      for (let i = 0; i < k; i++) {
        dp[(num + tmp[i]) % k] = Math.max(dp[(num + tmp[i]) % k], num + tmp[i]);
      }
    }
    return dp[0];
  }
  return maxSumDivK(nums, 3);
};

export default maxSumDivThree;

