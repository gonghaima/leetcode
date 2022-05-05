/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/letter-case-permutation/discuss/471249/DP-Backtracking-both-solution-or-Easy-to-UnderStand-or-Simple-or-Faster-or-MrMagician

/*********************************************************************************************************
 * Runtime: 95 ms, faster than 63.26% of JavaScript online submissions for Letter Case Permutation.      *
 * Memory Usage: 44.6 MB, less than 86.74% of JavaScript online submissions for Letter Case Permutation. *
 *********************************************************************************************************/

// backtrack

var letterCasePermutation = function(S) {
  return permut(S, 0);
};

function permut(str, pos, out = [], curr = '') {
  if (pos === str.length || curr.length === str.length) {
    out.push(curr);
  } else {
    if (isAlpha(str[pos])) {
      let up = curr + str[pos].toUpperCase();
      let low = curr + str[pos].toLowerCase();
      permut(str, pos + 1, out, up);
      permut(str, pos + 1, out, low);
    } else {
      permut(str, pos + 1, out, curr + str[pos]);
    }
  }
  return out;
}

function isAlpha(ch) {
  return /[a-zA-Z]/i.test(ch);
}

export default letterCasePermutation;
