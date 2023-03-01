/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

var wordBreak = function(s, wordDict, cache = new Map()) {
  if (cache.has(s)) return cache.get(s);

  const result = [];
  for (const word of wordDict) {
    if (s.startsWith(word)) {
      const leftAfter = s.slice(word.length);
      if (!leftAfter.length) result.push(word);
      else
        wordBreak(leftAfter, wordDict, cache).forEach((val) =>
          result.push(word + ' ' + val)
        );
    }
  }

  cache.set(s, result);
  return result;
};
export default wordBreak;
