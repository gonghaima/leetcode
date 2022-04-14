// https://leetcode.com/problems/top-k-frequent-words/submissions/

/******************************************************************************************************
 * Runtime: 79 ms, faster than 89.47% of JavaScript online submissions for Top K Frequent Words.      *
 * Memory Usage: 44.8 MB, less than 84.66% of JavaScript online submissions for Top K Frequent Words. *
 ******************************************************************************************************/

var topKFrequent = function(words, k) {
  const freqMap = new Map();
  const bucket = [];
  const output = [];

  for (let word of words) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  for (let [word, freq] of freqMap) {
    if (bucket[freq] === undefined) bucket[freq] = [word];
    else bucket[freq].push(word);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i] === undefined) continue;
    output.push(...bucket[i].sort());
    if (output.length >= k) return output.slice(0, k);
  }
};

export default topKFrequent;
