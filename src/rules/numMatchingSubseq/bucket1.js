/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

/*****************************************************************************************************************
 * Runtime: 262 ms, faster than 48.47% of JavaScript online submissions for Number of Matching Subsequences.     *
 * Memory Usage: 54.2 MB, less than 34.73% of JavaScript online submissions for Number of Matching Subsequences. *
 *****************************************************************************************************************/

// https://leetcode.com/problems/number-of-matching-subsequences/discuss/1091585/JavaScript-using-Next-Letter-Pointers

var numMatchingSubseq = function(S, words) {
  const bucket = [...Array(26)].map(() => []);
  let counter = 0;

  function getCharId(char) {
    return char.charCodeAt() - 'a'.charCodeAt();
  }

  for (let word of words) {
    const idx = getCharId(word[0]);
    bucket[idx].push(word);
  }

  for (let char of S) {
    const idx = getCharId(char);
    const currBucket = bucket[idx];
    bucket[idx] = [];

    for (let word of currBucket) {
      word = word.slice(1);
      if (!word.length) {
        counter++;
        continue;
      }
      const nextIdx = getCharId(word[0]);
      bucket[nextIdx].push(word);
    }
  }
  return counter;
};

export default numMatchingSubseq;
