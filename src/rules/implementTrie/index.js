// https://leetcode.com/problems/implement-trie-prefix-tree/submissions/

/************************************************************************************************************
 * Runtime: 235 ms, faster than 73.55% of JavaScript online submissions for Implement Trie (Prefix Tree).   *
 * Memory Usage: 59 MB, less than 78.33% of JavaScript online submissions for Implement Trie (Prefix Tree). *
 ************************************************************************************************************/

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
    return null;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}

export default Trie;
