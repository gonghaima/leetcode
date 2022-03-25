/**
 * @param {number[]} nums
 * @return {string}
 */

// https://leetcode.com/problems/largest-number/discuss/1657704/JavaScript-Solution

/************************************************************************************************
 * Runtime: 132 ms, faster than 12.70% of JavaScript online submissions for Largest Number.     *
 * Memory Usage: 43.5 MB, less than 94.26% of JavaScript online submissions for Largest Number. *
 ************************************************************************************************/

var largestNumber179 = function(nums) {
  nums.sort(compareFunc);

  let res = '';

  for (let j = 0; j < nums.length; j++) {
    res += nums[j];
  }

  if (res.charAt(0) === '0') return '0';
  return res;

  function compareFunc(numStr1, numStr2) {
    let combinedNumStr1 = numStr1 + '' + numStr2;
    let combinedNumStr2 = numStr2 + '' + numStr1;

    return combinedNumStr2 - combinedNumStr1;
  }
};

export default largestNumber179;
