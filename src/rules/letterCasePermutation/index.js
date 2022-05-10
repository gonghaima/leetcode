/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/letter-case-permutation/discuss/1795202/Javascript-or-Using-Set

/*********************************************************************************************************
 * Runtime: 110 ms, faster than 47.55% of JavaScript online submissions for Letter Case Permutation.     *
 * Memory Usage: 48.4 MB, less than 20.62% of JavaScript online submissions for Letter Case Permutation. *
 *********************************************************************************************************/

const DIGIT_REGEX = /[0-9]+/g;
var letterCasePermutation = function(s) {
  /* Original string itself is a one of the valid combination. */
  let set = new Set([s]);
  let copyS;
  let index = 0,
    values;

  while (index < s.length) {
    /* Skip digit to keep them in place, while moving forward refer original string */
    if (s[index].match(DIGIT_REGEX)) {
      index++;
      continue;
    }

    /* Get all combinations generated so far */
    values = [...set.values()];

    for (let i = 0; i < values.length; i++) {
      copyS = [...values[i]];

      /*
       * Take every combination generated so far and manipulate the `index`
       * to lowercase and uppercase to generate new pair
       */
      copyS[index] = copyS[index].toLowerCase();
      set.add(copyS.join(''));

      copyS[index] = copyS[index].toUpperCase();
      set.add(copyS.join(''));
    }

    index++;
  }

  return [...set.values()];
};

export default letterCasePermutation;
