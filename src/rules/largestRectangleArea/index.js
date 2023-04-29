/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = [{ left: 0, val: 0 }];

  const peek = () => stack[stack.length - 1] || null;

  for (let i = 0; i <= heights.length; i++) {
    const push = () => stack.push({ left: i + 1, val: heights[i] });

    if (heights[i] && heights[i] > peek().val) {
      push();
    } else {
      while (peek() && peek().val > (heights[i] || 0)) {
        const top = stack.pop();
        const left = peek() ? peek().left : 0;
        maxArea = Math.max(maxArea, (i - left) * top.val);
      }
      push();
    }
  }
  return maxArea;
};

export default largestRectangleArea;
