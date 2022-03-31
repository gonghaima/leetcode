// https://leetcode.com/problems/implement-trie-prefix-tree/discuss/422168/JavaScript-Solution

/*************************************************************************************
 * Store the entire trie in an object                                                *
 * Each node is an object that uses character as keys to connect to other characters *
 * Set isEnd to true for the last character node in a word                           *
 *************************************************************************************/

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  word.split('').forEach((char) => {
    if (!node[char]) node[char] = {};
    node = node[char];
  });
  node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.searchNode(word);
  return node != null ? node.isEnd == true : false;
};

/** javaScript
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.searchNode(prefix);
  return node != null;
};

Trie.prototype.searchNode = function(word) {
  let node = this.root;
  for (let char of word.split('')) {
    if (node[char]) {
      node = node[char];
    } else {
      return null;
    }
  }
  return node;
};

export default Trie;
