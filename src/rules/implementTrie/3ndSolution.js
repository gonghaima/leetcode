class TrieNode {
  constructor(val = null) {
    this.val = val; //cur node's val
    this.children = []; //cur node's children list (all chars)
    this.isEnd = false; //check this node is full word
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode(); //top root of trie tree's value is null
  }

  insert(word) {
    let cur = this.root; //each time insert, starting from top root
    for (let c of word) {
      if (!cur.children[c]) {
        cur.children[c] = new TrieNode(c);
      }
      cur = cur.children[c]; //search children's children  next node/pointer
    }
    cur.isEnd = true; //finish inserting full word
  }

  search(word) {
    let cur = this.root; //each time search, starting from top root
    for (let c of word) {
      if (!cur.children[c]) return false;
      else cur = cur.children[c];
    }
    return cur.isEnd; //check if can find full word, see curNode.isEnd
  }

  startsWith(prefix) {
    //check start with word
    let cur = this.root;
    for (let c of prefix) {
      if (!cur.children[c]) return false;
      else cur = cur.children[c];
    }
    return true; //find the prefix word
  }
}

export default Trie;
