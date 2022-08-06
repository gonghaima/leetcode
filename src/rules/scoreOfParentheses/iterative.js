/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/score-of-parentheses/discuss/1081329/Score-of-Parentheses-Easy-to-Understand-Explanation-Javascript-code

/*******************************************************************************************************
 * Runtime: 99 ms, faster than 19.23% of JavaScript online submissions for Score of Parentheses.       *
 * Memory Usage: 41.1 MB, less than 100.00% of JavaScript online submissions for Score of Parentheses. *
 *******************************************************************************************************/

var scoreOfParentheses = function(s) {
  let score = 0,
    depth = 0;
  for (let i = 0, j = s.length; i < j; i++) {
    // linear left to right iteration
    if (s.charAt(i) == '(')
      // found ( so increment depth
      depth++;
    else if (s.charAt(i - 1) == '(')
      // found () a core, so time to add its calculated value to score
      score += 1 << --depth;
    //binary bit shift operator, doubling value by depth
    else --depth; // not a core, but need to unwrap a layer of nesting
  }
  return score;
};

export default scoreOfParentheses;
