/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

// https://leetcode.com/problems/number-of-matching-subsequences/discuss/835129/Javascript-two-pointers

var numMatchingSubseq = function(S, words) {
  let count = 0;
  for (let w of words) {
    let i = 0,
      j = 0;
    while (j < w.length && i < S.length) {
      if (w[j] == S[i]) {
        j += 1;
        i += 1;
      } else {
        i += 1;
      }
    }
    if (j == w.length) {
      count += 1;
    }
  }
  return count;
};

export default numMatchingSubseq;
