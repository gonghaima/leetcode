/**
 * @param {number[]} nums
 * @return {string}
 */

// https://leetcode.com/problems/largest-number/discuss/1657704/JavaScript-Solution

/************************************************************************************************
 * Runtime: 132 ms, faster than 12.70% of JavaScript online submissions for Largest Number.     *
 * Memory Usage: 43.5 MB, less than 94.26% of JavaScript online submissions for Largest Number. *
 ************************************************************************************************/

var largestNumber179 = (nums) =>
  nums
    .sort((a, b) => `${b}${a}` - `${a}${b}`)
    .reduce((p, c) => (p === `0` ? '0' : `${p}${c}`), '');

export default largestNumber179;
