/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

// hash solution n log n

/******************************************************************************************************
 * Runtime: 124 ms, faster than 35.03% of JavaScript online submissions for Top K Frequent Words.     *
 * Memory Usage: 47.4 MB, less than 42.59% of JavaScript online submissions for Top K Frequent Words. *
 ******************************************************************************************************/

// https://leetcode.com/problems/top-k-frequent-words/discuss/444221/JavaScript-Solution

var topKFrequent = function(words, k) {
  let hash = {};
  for (let word of words) {
    hash[word] = hash[word] + 1 || 1;
  }
  let result = Object.keys(hash).sort((a, b) => {
    let countCompare = hash[b] - hash[a];
    if (countCompare == 0) return a.localeCompare(b);
    else return countCompare;
  });
  return result.slice(0, k);
};

export default topKFrequent;
