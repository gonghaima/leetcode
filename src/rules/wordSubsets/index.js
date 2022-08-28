/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */

// frequency map 1
// https://leetcode.com/problems/word-subsets/discuss/1128227/JavaScript-Combine-Words-in-B-into-One

/**********************************************************************************************
 * Runtime: 301 ms, faster than 62.62% of JavaScript online submissions for Word Subsets.     *
 * Memory Usage: 67.5 MB, less than 51.64% of JavaScript online submissions for Word Subsets. *
 **********************************************************************************************/

var wordSubsets = function(words1, words2) {
  const output = [];
  const freqB = Array(26).fill(0);

  for (let wordB of words2) {
    const currFreq = getFreq(wordB);

    for (let i = 0; i < freqB.length; i++) {
      freqB[i] = Math.max(freqB[i], currFreq[i]);
    }
  }

  for (let wordA of words1) {
    const freqA = getFreq(wordA);
    const universal = isSubset(freqA);
    if (universal) output.push(wordA);
  }

  function isSubset(freqA) {
    for (let i = 0; i < freqA.length; i++) {
      if (freqB[i] > freqA[i]) return false;
    }
    return true;
  }

  function getFreq(word) {
    const map = Array(26).fill(0);

    for (let char of word) {
      const idx = char.charCodeAt() - 'a'.charCodeAt();
      map[idx]++;
    }
    return map;
  }
  return output;
};
export default wordSubsets;
