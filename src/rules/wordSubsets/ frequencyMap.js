/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */

// frequency map
// https://leetcode.com/problems/word-subsets/discuss/1128048/JS-Python-Java-C%2B%2B-or-Easy-Merge-and-Frequency-Map-Solution-w-Explanation

/**********************************************************************************************
 * Runtime: 165 ms, faster than 97.17% of JavaScript online submissions for Word Subsets.     *
 * Memory Usage: 57.3 MB, less than 98.58% of JavaScript online submissions for Word Subsets. *
 **********************************************************************************************/

var wordSubsets = function(words1, words2) {
  let Bfreq = new Int8Array(26),
    cmax = 0,
    check = new Int8Array(26),
    ans = [];
  for (let i = 0; i < words2.length; i++, check.fill()) {
    let word = words2[i];
    for (let j = 0; j < word.length; j++) check[word.charCodeAt(j) - 97]++;
    for (let j = 0; j < 26; j++) {
      let diff = check[j] - Bfreq[j];
      if (diff > 0) (cmax += diff), (Bfreq[j] += diff);
      if (cmax > 10) return [];
    }
  }
  for (let i = 0; i < words1.length; i++, check.fill()) {
    let word = words1[i],
      j;
    if (word.length < cmax) continue;
    for (j = 0; j < word.length; j++) check[word.charCodeAt(j) - 97]++;
    for (j = 0; j < 26; j++) if (check[j] < Bfreq[j]) break;
    if (j === 26) ans.push(word);
  }
  return ans;
};
export default wordSubsets;
