/**
 * @param {string} digits
 * @return {string[]}
 */

/**********************************************************************************************************************
 * Runtime: 90 ms, faster than 47.90% of JavaScript online submissions for Letter Combinations of a Phone Number.     *
 * Memory Usage: 42.3 MB, less than 16.95% of JavaScript online submissions for Letter Combinations of a Phone Number. *
 **********************************************************************************************************************/

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/1316786/Simple-Javascript-Solution-72ms-82.6

var letterCombinations = function(digits) {
  const numToLetter = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  if (digits === '') return [];
  let array = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    const num = digits[i];
    if (array.length === 0) {
      array = [...numToLetter[num]];
    } else {
      const newArray = [];
      for (let j of numToLetter[num]) {
        for (let k of array) {
          newArray.push(j + k);
        }
      }
      array = newArray;
    }
  }
  return array;
};

export default letterCombinations;
