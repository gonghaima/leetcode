/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/letter-case-permutation/discuss/857803/JavaScript-oror-76-ms-faster-than-99.19-oror-39.9-MB-less-than-88.26

/*********************************************************************************************************
 * Runtime: 84 ms, faster than 80.13% of JavaScript online submissions for Letter Case Permutation.      *
 * Memory Usage: 45.4 MB, less than 53.76% of JavaScript online submissions for Letter Case Permutation. *
 *********************************************************************************************************/

var letterCasePermutation = function(str) {
  // "a1b2"
  // "a1B2"
  // "A1b2"
  // "A1B2"
  result = [];
  letterCasePermutationsHelper(str, 0, '', result);
  return result;
  function letterCasePermutationsHelper(str, i, plate, result) {
    // base case
    if (i === str.length) {
      result.push(plate);
      return;
    }
    //recursion case
    if (str[i] >= 0 && str[i] <= 9) {
      letterCasePermutationsHelper(str, i + 1, plate + str[i], result);
    } else {
      letterCasePermutationsHelper(
        str,
        i + 1,
        plate + str[i].toUpperCase(),
        result
      );
      letterCasePermutationsHelper(
        str,
        i + 1,
        plate + str[i].toLowerCase(),
        result
      );
    }
  }
};

export default letterCasePermutation;
