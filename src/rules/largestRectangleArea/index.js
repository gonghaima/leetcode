/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    const base = heights[i];
    const arr = [heights[i]];

    // go right
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] < base) break;
      arr.push(heights[j]);
    }
    // go left
    for (let j = i - 1; j >= 0; j--) {
      if (heights[j] < base) break;
      arr.push(heights[j]);
    }

    // calc and compare
    const area = arr.length * base;
    if (area > max) max = area;
  }

  return max;
};

export default largestRectangleArea;
