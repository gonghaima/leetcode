/**
 * @param {string} digits
 * @return {string[]}
 */

/*****************************************************************
 * NOT CORRECT: 
 * my thoughts: is it just all permutation of the number of digits? *
 * for example, if it's single digit, it would be 3^1.
 * if it's two digit, it would be 3^2,
 * if it's three digit, it would be 3^3,                         *
 *****************************************************************/

/**********************************************************************************************************************
 * Runtime: 102 ms, faster than 32.77% of JavaScript online submissions for Letter Combinations of a Phone Number.    *
 * Memory Usage: 42.1 MB, less than 19.14% of JavaScript online submissions for Letter Combinations of a Phone Number. *
 **********************************************************************************************************************/

var letterCombinations = function(digits) {
  if (digits == null || digits.length === 0) return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const res = [];
  const go = (i, s) => {
    if (i === digits.length) {
      res.push(s);
      return;
    }

    for (const c of map[digits[i]]) {
      go(i + 1, s + c);
    }
  };

  go(0, '');
  return res;
};

export default letterCombinations;
