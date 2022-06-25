/**
 * @param {string[]} words
 * @return {number}
 */

/*********************************************************************************************************
 * Runtime: 164 ms, faster than 60.28% of JavaScript online submissions for Short Encoding of Words.     *
 * Memory Usage: 60.1 MB, less than 32.35% of JavaScript online submissions for Short Encoding of Words. *
 *********************************************************************************************************/

// https://leetcode.com/problems/short-encoding-of-words/discuss/1095894/JS-Python-Java-C%2B%2B-or-(Updated)-Set-and-Trie-Solutions-w-Visual-Explanation

var minimumLengthEncoding = function(W) {
  let len = W.length,
    trie = new Map(),
    ans = 1;
  for (let word of W) {
    let curr = trie,
      newWord = false;
    for (let j = word.length - 1; ~j; j--) {
      let char = word.charAt(j);
      if (!curr.size && !newWord) ans -= word.length - j;
      if (!curr.has(char)) (newWord = true), curr.set(char, new Map());
      curr = curr.get(char);
    }
    if (newWord) ans += word.length + 1;
  }
  return ans;
};

export default minimumLengthEncoding;
