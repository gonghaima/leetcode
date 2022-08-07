/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/score-of-parentheses/discuss/1856454/Beginner-friendly-javascript-solution

/****************************************************************************************************
 * Runtime: 96 ms, faster than 23.08% of JavaScript online submissions for Score of Parentheses.    *
 * Memory Usage: 42 MB, less than 58.65% of JavaScript online submissions for Score of Parentheses. *
 ****************************************************************************************************/

var scoreOfParentheses = function(s) {
  let stack = [];
  let cur = 0;
  for (let c of s) {
    if (c == '(') {
      stack.push(cur);
      cur = 0;
    } else {
      cur = stack.pop() + Math.max(1, cur * 2);
    }
  }
  return cur;
};

export default scoreOfParentheses;
