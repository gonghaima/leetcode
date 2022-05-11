/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/letter-case-permutation/discuss/1647441/Character-By-Character-Change

/*********************************************************************************************************
 * Runtime: 89 ms, faster than 72.07% of JavaScript online submissions for Letter Case Permutation.      *
 * Memory Usage: 44.4 MB, less than 92.73% of JavaScript online submissions for Letter Case Permutation. *
 *********************************************************************************************************/

var letterCasePermutation = function(s) {
  const result = [];

  function generatePermutations(currentStr, start) {
    // every call to this function generates a new result
    result.push(currentStr);

    for (let i = start; i < currentStr.length; i++) {
      const currentChar = currentStr[i];
      // if the current character is number then skip to next character
      if (!isNaN(Number(currentChar))) {
        continue;
      }
      // change the casing for current character
      const newStr =
        currentStr.substr(0, i) +
        currentChar.toUpperCase() +
        currentStr.substr(i + 1);

      // try to generate permutation from the next character
      generatePermutations(newStr, i + 1);
    }
  }

  generatePermutations(s.toLowerCase(), 0);

  return result;
};

export default letterCasePermutation;
