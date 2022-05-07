/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/letter-case-permutation/discuss/471249/DP-Backtracking-both-solution-or-Easy-to-UnderStand-or-Simple-or-Faster-or-MrMagician

/*********************************************************************************************************
 * Runtime: 82 ms, faster than 81.55% of JavaScript online submissions for Letter Case Permutation.      *
 * Memory Usage: 46.7 MB, less than 32.81% of JavaScript online submissions for Letter Case Permutation. *
 *********************************************************************************************************/

var letterCasePermutation = function(S) {
  return permut(S);
};

function permut(str, out = []) {
  str = str.split('');
  let till = '';
  for (let i of str) {
    if (out.length === 0) {
      if (isAlpha(i)) {
        out.push(i.toUpperCase());
        out.push(i.toLowerCase());
      } else {
        out.push(i);
      }
    } else {
      let alpha = isAlpha(i);
      if (alpha) {
        let up = i.toUpperCase();
        let low = i.toLowerCase();
        out = attach(out, up).concat(attach(out, low));
        out.push(till + up);
        out.push(till + low);
      } else {
        out = attach(out, i);
        out.push(till + i);
      }
    }
    till += i;
  }
  let set = new Set(out);
  return Array.from(set);
}

function attach(out, ch) {
  let newOut = [...out];
  for (let i = 0; i < out.length; i++) {
    newOut[i] += ch;
  }
  return newOut;
}

function isAlpha(ch) {
  return /[a-zA-Z]/i.test(ch);
}

export default letterCasePermutation;
