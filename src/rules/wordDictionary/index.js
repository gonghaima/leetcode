/***********************************************************************************************************************
 * Runtime: 1874 ms, faster than 81.47% of JavaScript online submissions for Design Add and Search Words Data Structure. *
 * Memory Usage: 99.5 MB, less than 51.07% of JavaScript online submissions for Design Add and Search Words Data Structure. *
 ***********************************************************************************************************************/

// https://leetcode.com/problems/design-add-and-search-words-data-structure/discuss/499657/JavaScript-Solution-Trie-%2B-DFS

// The idea
// 1. Store words as trie
// 2. Traverse trie using dfs

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.trie = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let root = this.trie;
  for (let i = 0; i < word.length; i++) {
    if (root[word[i]] == null) root[word[i]] = {};
    root = root[word[i]];
  }
  root.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return this.dfs(word, 0, this.trie);
};

WordDictionary.prototype.dfs = function(word, index, node) {
  if (index == word.length) return node.isEnd == true;

  if (word[index] == '.') {
    for (let key in node) {
      if (this.dfs(word, index + 1, node[key])) return true;
    }
  } else {
    if (node[word[index]] != null) {
      return this.dfs(word, index + 1, node[word[index]]);
    }
  }
  return false;
};

export default WordDictionary;
