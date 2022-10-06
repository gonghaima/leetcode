/**
 * @param {number[]} height
 * @return {number}
 */

/***********************************************************************************************************
 * Runtime: 126 ms, faster than 49.16% of JavaScript online submissions for Container With Most Water.     *
 * Memory Usage: 49.8 MB, less than 37.06% of JavaScript online submissions for Container With Most Water. *
 ***********************************************************************************************************/

// https://leetcode.com/problems/container-with-most-water/discuss/1980860/JavaC%2B%2BPythonJavaScriptKotlinO(n)timeBEATS-99.97-MEMORYSPEED-0ms-APRIL-2022

var maxArea = function(height) {
  let ans = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    height[i] <= height[j] ? i++ : j--;
  }
  return ans;
};

export default maxArea;
