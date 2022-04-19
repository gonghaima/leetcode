// trie - 1

// https://leetcode.com/problems/longest-word-in-dictionary/discuss/892192/Simple-Javascript-Trie%2BDFS-solution

/************************************************************************************************************
 * Runtime: 122 ms, faster than 75.00% of JavaScript online submissions for Longest Word in Dictionary.     *
 * Memory Usage: 52.6 MB, less than 19.44% of JavaScript online submissions for Longest Word in Dictionary. *
 ************************************************************************************************************/

function TrieNode() {
  this.children = new Map();
  this.endOfWord = false;
}

var longestWord = function(words) {
  let root = new TrieNode();

  words.sort((a, b) => a.localeCompare(b));
  for (let word of words) {
    let curr = root;
    for (let w of word) {
      let map = curr.children;
      if (!map.has(w)) map.set(w, new TrieNode());
      curr = map.get(w);
    }
    curr.endOfWord = true;
  }

  function dfs(root, str, res) {
    for (let [char, node] of root.children) {
      if (!node.endOfWord) continue;
      res = dfs(node, str + char, res);
    }
    res = res.length < str.length ? str : res;
    return res;
  }

  return dfs(root, '', '');
};
export default longestWord;
