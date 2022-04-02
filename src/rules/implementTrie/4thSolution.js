var Trie = function() {
  this.tree = {
    child: {},
    leaf: false,
  };
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let t = this.tree;
  for (const char of word) {
    if (!(char in t.child)) {
      t.child[char] = {
        child: {},
        leaf: false,
      };
    }
    t = t.child[char];
  }

  t.leaf = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let t = this.tree;
  for (const char of word) {
    if (char in t.child) {
      t = t.child[char];
    } else {
      return false;
    }
  }

  return t.leaf;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let t = this.tree;
  for (const char of prefix) {
    if (char in t.child) {
      t = t.child[char];
    } else {
      return false;
    }
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
