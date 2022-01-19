/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/discuss/820072/EASY-soultion-with-DRY-RUN-JAVA

/**********************************************************************************************************************
 * Runtime: 96 ms, faster than 71.73% of JavaScript online submissions for Maximum Length of Subarray With Positive Product. *
 * Memory Usage: 49.1 MB, less than 70.68% of JavaScript online submissions for Maximum Length of Subarray With Positive Product. *
 **********************************************************************************************************************/

var getMaxLen = function(nums) {
  let positive = 0, negative = 0;    // length of positive and negative results
  let ans = 0;
  for(let x of nums) {
      if(x == 0)  {
          positive = 0;
          negative = 0;
      }
      else if(x > 0) {
          positive++;
          negative = negative == 0 ? 0  : negative+1;
      }
      else {
          let temp = positive;
          positive = negative == 0 ? 0  : negative+1;
          negative = temp+1;
      }
      ans = Math.max(ans, positive);
  }
  return ans;
};

export default getMaxLen;
