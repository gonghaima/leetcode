/**
 * @param {number[]} nums
 * @return {number}
 */

/****************************************************************************************************************
 *  Runtime: 131 ms, faster than 22.22% of JavaScript online submissions for Greatest Sum Divisible by Three.   *
 * Memory Usage: 43 MB, less than 100.00% of JavaScript online submissions for Greatest Sum Divisible by Three. *
 ****************************************************************************************************************/

/**
 * 
Add all together, if sum%3==0, return sum.
if sum%3==1, remove the smallest number which has n%3==1.
if sum%3==2, remove the smallest number which has n%3==2.
 */
// https://leetcode.com/problems/greatest-sum-divisible-by-three/discuss/431108/Java-O(N)-solution-Simple-Math-O(1)-space

var maxSumDivThree = function (nums) {
  let res = 0, leftOne = 20000, leftTwo = 20000;
  for (let n of nums) {
    res += n;
    if (n % 3 == 1) {
      leftTwo = Math.min(leftTwo, leftOne + n);
      leftOne = Math.min(leftOne, n);
    }
    if (n % 3 == 2) {
      leftOne = Math.min(leftOne, leftTwo + n);
      leftTwo = Math.min(leftTwo, n);
    }
  }
  if (res % 3 == 0) return res;
  if (res % 3 == 1) return res - leftOne;
  return res - leftTwo;
};

export default maxSumDivThree;

