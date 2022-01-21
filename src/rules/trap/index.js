/**
 * @param {number[]} height
 * @return {number}
 */

// https://leetcode.com/problems/trapping-rain-water/discuss/17357/Sharing-my-simple-c%2B%2B-code%3A-O(n)-time-O(1)-space

/***************************************************************************************************
 *  Runtime: 84 ms, faster than 74.58% of JavaScript online submissions for Trapping Rain Water.   *
 * Memory Usage: 40 MB, less than 97.90% of JavaScript online submissions for Trapping Rain Water. *
 ***************************************************************************************************/

var trap = function(height) {
  let total = 0,
    high1 = 0,
    high2 = 0;
  for (let l = 0, r = height.length - 1; l < r; ) {
    if (height[l] < height[r]) {
      high1 = Math.max(high1, height[l]);
      total += high1 - height[l++];
    } else {
      high2 = Math.max(high2, height[r]);
      total += high2 - height[r--];
    }
  }
  return total;
};

export default trap;
