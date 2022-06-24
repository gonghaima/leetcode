/**
 * @param {string[]} words
 * @return {number}
 */

/*********************************************************************************************************
 * Runtime: 2134 ms, faster than 8.33% of JavaScript online submissions for Short Encoding of Words.     *
 * Memory Usage: 48.5 MB, less than 75.00% of JavaScript online submissions for Short Encoding of Words. *
 *********************************************************************************************************/

// https://leetcode.com/problems/short-encoding-of-words/discuss/1096531/JS-Simple-short-using-loop-with-label-and-check-tail

var minimumLengthEncoding = function(words) {
  words = Array.from(new Set(words));
  let res = '';
  outer: for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (j !== i && words[j].endsWith(words[i])) {
        continue outer;
      }
    }
    res += words[i] + '#';
  }
  return res.length;
};

export default minimumLengthEncoding;
