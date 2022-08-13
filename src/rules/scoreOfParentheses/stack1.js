/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/score-of-parentheses/discuss/1979330/JavaScript-Solution-oror-O(n)-Time-oror-O(n)-Space

/******************************************************************************************************
 * Runtime: 117 ms, faster than 8.65% of JavaScript online submissions for Score of Parentheses.      *
 * Memory Usage: 41.9 MB, less than 76.92% of JavaScript online submissions for Score of Parentheses. *
 ******************************************************************************************************/

var scoreOfParentheses = function(s) {
  let stack = [0];
  for (let char of s) {
    if (char === '(') {
      stack.push(0);
    } else {
      let popped = stack.pop();
      if (popped === 0) {
        stack[stack.length - 1] += 1;
      } else {
        stack[stack.length - 1] += popped * 2;
      }
    }
  }
  return stack[0];
};

export default scoreOfParentheses;
