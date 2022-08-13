/**
 * @param {string} s
 * @return {number}
 */

/******************************************************************************************************
 * Runtime: 67 ms, faster than 73.08% of JavaScript online submissions for Score of Parentheses.      *
 * Memory Usage: 41.9 MB, less than 76.92% of JavaScript online submissions for Score of Parentheses. *
 ******************************************************************************************************/

// https://leetcode.com/problems/score-of-parentheses/discuss/1857307/javascript-typescript-stack-solution

var scoreOfParentheses = function(s) {
  const stack = [0];

  for (const char of s) {
    if (char === '(') stack.push(0);
    else {
      const last = stack.pop();
      const score = 2 * last || 1;
      stack[stack.length - 1] += score;
    }
  }

  return stack.pop();
};

export default scoreOfParentheses;
