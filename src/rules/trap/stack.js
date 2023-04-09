/**
 * @param {number[]} height
 * @return {number}
 */

// https://leetcode.com/problems/trapping-rain-water/discuss/17357/Sharing-my-simple-c%2B%2B-code%3A-O(n)-time-O(1)-space

/***************************************************************************************************
 *  Runtime: 84 ms, faster than 74.58% of JavaScript online submissions for Trapping Rain Water.   *
 * Memory Usage: 40 MB, less than 97.90% of JavaScript online submissions for Trapping Rain Water. *
 ***************************************************************************************************/

// Stack

var trap = function(height) {
  let res = 0;
  let i = 0;
  const st = [];

  while (i < height.length) {
    while (st.length !== 0 && height[i] > height[st[st.length - 1]]) {
      const top = st[st.length - 1];
      st.pop();

      if (st.length === 0) break;

      const dist = i - st[st.length - 1] - 1;
      const h = Math.min(height[i], height[st[st.length - 1]]) - height[top];
      res += dist * h;
    }
    st.push(i);
    i++;
  }
  return res;
};

export default trap;
