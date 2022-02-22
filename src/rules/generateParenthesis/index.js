/**
 * @param {number} n
 * @return {string[]}
 */

// backtrack

// https://leetcode.com/problems/generate-parentheses/discuss/139455/Clean-JavaScript-backtracking-solution

/******************************************************************************************************
 * Runtime: 56 ms, faster than 99.24% of JavaScript online submissions for Generate Parentheses.      *
 * Memory Usage: 42.7 MB, less than 39.60% of JavaScript online submissions for Generate Parentheses. *
 ******************************************************************************************************/

var generateParenthesis = function(n) {
  const res = [];

  function go(l, r, s) {
    // l: left remaining, r: right remaining
    if (l > r) return; // The number of '(' should be always >= ')'

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + '(');
    if (r > 0) go(l, r - 1, s + ')');
  }

  go(n, n, '');
  return res;
};

export default generateParenthesis;
