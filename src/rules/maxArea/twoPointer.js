/**
 * @param {number[]} height
 * @return {number}
 */

/***********************************************************************************************************
 * Runtime: 138 ms, faster than 29.24% of JavaScript online submissions for Container With Most Water.     *
 * Memory Usage: 49.2 MB, less than 85.84% of JavaScript online submissions for Container With Most Water. *
 ***********************************************************************************************************/

// inspired by
// https://leetcode.com/problems/container-with-most-water/discuss/6100/Simple-and-clear-proofexplanation

var maxArea = function(height) {
  let i = 0,
    j = height.length - 1,
    water = 0;
  while (i < j) {
    water = Math.max(water, (j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) i += 1;
    else j -= 1;
  }
  return water;
};

export default maxArea;
