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
  // only dp[i - 1] is needed for calculatiing the next result, we just need two variables instead of an array
  const current = Array(3).fill(0).map((_, remainder) => remainder ? -Infinity : 0);

  for (let i = 0; i < nums.length; i++) {
    const previous = current.slice();
    for (let r = 0; r < 3; r++) {
      current[r] = Math.max(nums[i] + previous[(r + nums[i]) % 3], previous[r]);
    }
    console.log(current);
  }

  return current[0];
};

export default maxSumDivThree;

/**
 * My debugging understanding
 *
Input: nums = [3,6,5,1,8]
Output: 18

    [ 3, -Infinity, -Infinity ]
    [ 9, -Infinity, -Infinity ]
    [ 9, 14, -Infinity ]
    [ 15, 14, 10 ]
    [ 18, 23, 22 ]
 */