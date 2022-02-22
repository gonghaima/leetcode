/**
 * @param {number} n
 * @return {string[]}
 */

// iterative

// https://leetcode.com/problems/generate-parentheses/discuss/332518/Javascript-iterative-solution

/****************************************************************************************************
 * Runtime: 56 ms, faster than 99.24% of JavaScript online submissions for Generate Parentheses.    *
 * Memory Usage: 43 MB, less than 27.52% of JavaScript online submissions for Generate Parentheses. *
 ****************************************************************************************************/

var generateParenthesis = function(n) {
  let map = new Map();

  map.set(0, ['']);
  for (let i = 1; i <= n; i++) {
    let j = 0,
      arr = [];
    while (j < i) {
      let arrj = map.get(j),
        arri = map.get(i - j - 1);
      arrj.forEach((pairj) => {
        arri.forEach((pairi) => {
          arr.push('(' + pairj + ')' + pairi);
        });
      });
      j++;
    }
    map.set(i, arr);
  }

  return map.get(n);
};

export default generateParenthesis;
