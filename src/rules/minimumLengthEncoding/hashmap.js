/**
 * @param {string[]} words
 * @return {number}
 */

/*********************************************************************************************************
 * Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Short Encoding of Words.     *
 * Memory Usage: 48.4 MB, less than 75.00% of JavaScript online submissions for Short Encoding of Words. *
 *********************************************************************************************************/

// https://leetcode.com/problems/short-encoding-of-words/discuss/1095818/Javascript-Hashmap-Concise-beats-100

var minimumLengthEncoding = function(words) {
  const suits = new Set(words);
  suits.forEach((word) => {
    for (let i = 1; i < word.length; i++) {
      suits.delete(word.slice(i));
    }
  });
  return [...suits].join().length + 1;
};

export default minimumLengthEncoding;
