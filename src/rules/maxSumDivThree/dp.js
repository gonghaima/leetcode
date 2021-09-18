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

/**
 * My debugging understanding
 *
Input: nums = [3,6,5,1,8]
Output: 18

    [ 3, 0, 0 ]
    [ 9, 0, 0 ]
    [ 9, 0, 14 ]
    [ 15, 10, 14 ]
    [ 18, 22, 23 ]

dp[0] means the remaining is 0, indicating can be divided by 3.
in line 21, find the max value for the remaining index. for each remaining dp[0] dp[1] dp[2], find the max value (currentMax, num+prevDP[i])

Final result would be dp[0], because the questions is max sum, can be divided by 3.
The result would be dp[1], if the question is finding out max sum, which can be divided by 3 remaining 1.


 */