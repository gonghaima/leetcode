/**
 * @param {number[]} height
 * @return {number}
 */

// https://leetcode.com/problems/trapping-rain-water/discuss/17357/Sharing-my-simple-c%2B%2B-code%3A-O(n)-time-O(1)-space

/***************************************************************************************************
 *  Runtime: 84 ms, faster than 74.58% of JavaScript online submissions for Trapping Rain Water.   *
 * Memory Usage: 40 MB, less than 97.90% of JavaScript online submissions for Trapping Rain Water. *
 ***************************************************************************************************/

// Brute force

var trap = function(height) {
  if (height == null || height.length === 0) return 0;

  let res = 0;
  for (let i = 0; i < height.length; i++) {
    let lMax = 0;
    let rMax = 0;

    for (let j = 0; j < i; j++) {
      lMax = Math.max(lMax, height[j]);
    }
    for (let j = i + 1; j < height.length; j++) {
      rMax = Math.max(rMax, height[j]);
    }

    const water = Math.min(lMax, rMax) - height[i];
    if (water > 0) res += water;
  }

  return res;
};

export default trap;
