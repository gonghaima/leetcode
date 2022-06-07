/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

// https://leetcode.com/problems/number-of-matching-subsequences/discuss/1289498/Javascript-Short-fast-and-simple

/*****************************************************************************************************************
 * Runtime: 131 ms, faster than 93.83% of JavaScript online submissions for Number of Matching Subsequences.     *
 * Memory Usage: 49.1 MB, less than 74.49% of JavaScript online submissions for Number of Matching Subsequences. *
 *****************************************************************************************************************/
var numMatchingSubseq = function(s, words) {
  const wordsCount = words.reduce((count, word) => {
    count.set(word, (count.get(word) ?? 0) + 1);
    return count;
  }, new Map());

  function isSubsequence(s, word) {
    let index = -1;
    for (let ch of word) {
      index = s.indexOf(ch, index + 1);
      if (index < 0) return false;
    }
    return true;
  }

  return Array.from(new Set(words)).reduce((count, word) => {
    return count + (isSubsequence(s, word) ? wordsCount.get(word) : 0);
  }, 0);
};

export default numMatchingSubseq;
