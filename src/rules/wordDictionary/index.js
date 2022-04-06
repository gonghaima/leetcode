// https://leetcode.com/problems/design-add-and-search-words-data-structure/discuss/487070/Trie-with-Map-in-JavaScript

/***********************************************************************************************************************
 * Runtime: 2596 ms, faster than 55.57% of JavaScript online submissions for Design Add and Search Words Data Structure. *
 * Memory Usage: 157 MB, less than 5.64% of JavaScript online submissions for Design Add and Search Words Data Structure. *
 ***********************************************************************************************************************/

var WordDictionary = function() {
  this.root = new TrieNode()
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let cur = this.root
  
  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    if (cur.children.get(char) === undefined) {
      cur.children = cur.children.set(char, new TrieNode())
    }
    cur = cur.children.get(char)
  }

  cur.word = word
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return match(word.split(''), 0, this.root)
};

function match (words, k, node) {
  if (k === words.length) {
    return node.word !== ""
  }
    
  const char = words[k]
  if (char !== '.') {
    return node.children.get(char) !== undefined && match(words, k + 1, node.children.get(char))
  } else {
    const childChars = Array.from(node.children.values())
    for (let i = 0; i < node.children.size; i++) {
      const childChar = childChars[i]
      if (match(words, k + 1, childChar)) {
        return true
      }
    }
  }
  return false
}

function TrieNode () {
  this.children = new Map()
  this.word = ""
}

export default WordDictionary;
