/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  const trie = {};
  const leavesMap = new Map();

  // creating the trie
  for (let word of words) {
    let node = trie;
    for (let i = word.length - 1; i >= 0; i--) {
      const c = word[i];
      if (!node[c]) {
        node[c] = {};
      }
      node = node[c];
    }
    // for each potential leaf we set the word length, later we will check if this is realy a leaf
    leavesMap.set(node, word.length);
  }

  let res = 0;

  // if the key in leavesMap is empty (aka {}) then we know this is a leaf in the trie and we need
  // to count its value
  leavesMap.forEach((value, key) => {
    if (Object.keys(key).length === 0) res += value + 1;
  });

  return res;
};

export default minimumLengthEncoding;
