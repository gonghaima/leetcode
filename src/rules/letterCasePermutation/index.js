/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/letter-case-permutation/discuss/1068160/Simple-Backtracking-recursion-solution

/*********************************************************************************************************
 * Runtime: 95 ms, faster than 64.03% of JavaScript online submissions for Letter Case Permutation.      *
 * Memory Usage: 45.7 MB, less than 45.45% of JavaScript online submissions for Letter Case Permutation. *
 *********************************************************************************************************/

var letterCasePermutation = function(S) {
  let n = S.length;
  let res = [];
  let char = /[a-zA-Z]/;
  let arr = [];

  function backtrack(i) {
    if (i == n) {
      res.push(arr.join(''));
      return;
    }

    if (char.test(S[i])) {
      arr[i] = S[i].toLowerCase();
      backtrack(i + 1);
      arr[i] = S[i].toUpperCase();
      backtrack(i + 1);
    } else {
      arr[i] = S[i];
      backtrack(i + 1);
    }
  }

  backtrack(0);
  return res;
};

export default letterCasePermutation;
