// trie

// https://leetcode.com/problems/longest-word-in-dictionary/discuss/780606/Javascript-solutions%3A-Set-beats-97-or-Trie-beats-66

/************************************************************************************************************
 * Runtime: 113 ms, faster than 78.89% of JavaScript online submissions for Longest Word in Dictionary.     *
 * Memory Usage: 52.9 MB, less than 16.11% of JavaScript online submissions for Longest Word in Dictionary. *
 ************************************************************************************************************/

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  let trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    trie.add(words[i]);
  }
  let longestWord = '';
  var dfs = function(node, s) {
    let keys = Object.keys(node.storage);
    for (let i = 0; i < keys.length; i++) {
      if (node.storage[keys[i]].isWord) {
        dfs(node.storage[keys[i]], s + keys[i]);
      }
    }
    if (s.length > longestWord.length) {
      longestWord = s;
    } else if (s.length === longestWord.length) {
      longestWord = getSmallest(s, longestWord);
    }
  };
  dfs(trie.root, '');
  return longestWord;
};

var getSmallest = function(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      return a;
    } else if (b[i] < a[i]) {
      return b;
    }
  }
  return a;
};

class Node {
  constructor() {
    this.isWord = false;
    this.storage = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  add(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!curr.storage[word[i]]) {
        curr.storage[word[i]] = new Node();
      }
      curr = curr.storage[word[i]];
    }
    curr.isWord = true;
  }
}
export default longestWord;
