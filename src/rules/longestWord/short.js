// https://leetcode.com/problems/longest-word-in-dictionary/discuss/434396/fast-short-intuitive-JavaScript-Solution-using-sets

/************************************************************************************************************
 * Runtime: 95 ms, faster than 92.57% of JavaScript online submissions for Longest Word in Dictionary.      *
 * Memory Usage: 45.5 MB, less than 89.14% of JavaScript online submissions for Longest Word in Dictionary. *
 ************************************************************************************************************/

// O(nlognL) where n is the length of the list and L is the average length of a word

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort();
  let set = new Set();
  let res = '';

  for (let word of words) {
    if (word.length === 1 || set.has(word.slice(0, -1))) {
      set.add(word);
      if (word.length > res.length) {
        res = word;
      }
    }
  }
  return res;
};
export default longestWord;
