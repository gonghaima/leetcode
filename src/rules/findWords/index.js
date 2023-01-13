/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

// https://leetcode.com/problems/word-search-ii/solutions/1178002/js-pruning-advanced-optimization-100/

class Trie {
  constructor() {
    this.root = {};
  }
  
  insert(word) {
    let node = this.root;
    
    for(const char of word) {
      if(!node[char]) {
        node[char] = {};
      }
      
      node = node[char];
      node.prefixCount = (node.prefixCount || 0) + 1;
    }
    
    node.word = word;
  }
  
  remove(word) {
    let node = this.root;
    
    for(const char of word) {
      node[char].prefixCount--;
      
      if(node[char].prefixCount === 0) {
        delete node[char];
        return;
      }
      node = node[char];
    }
    
    delete node.word;
  }
}

var findWords = function(board, words) {
  const ROWS = board.length;
  const COLS = board[0].length;
  const foundWords = [];
  const trie = new Trie();
  
  // 1) construct the trie
  for(const word of words) {
    trie.insert(word);
  }
  
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  function dfs(r, c, node) {
    let numFound1 = 0;
    
    if(node.word) {
      foundWords.push(node.word);
      trie.remove(node.word);
      numFound1++;
    }
    
    // coordinate (r,c) not within bounds
    if(r < 0 || r >= ROWS || c < 0 || c >= COLS) {
      return numFound1;
    }
    
    const char = board[r][c];
    // char continuation at (r,c) is not in trie
    if(!node[char]) {
      return numFound1;
    }
  
    // at this point, board[r][c] is a valid character continuation in trie
    board[r][c] = '#';
    // record max number of words we can find with current prefix
    const PREFIX_COUNT = node[char].prefixCount;
    let numFound2 = 0;
    for(const [dr, dc] of directions) {
      numFound2 += dfs(r + dr, c + dc, node[char]); 
      
      // found all possible words with this prefix. Break early.
      if(numFound2 === PREFIX_COUNT) break;
    }
    
    board[r][c] = char;
    return numFound1 + numFound2;
  }
  
  // 2) iterate through board recursively square by square
  for(let r = 0; r < ROWS; r++) {
    for(let c = 0; c < COLS; c++) {
      dfs(r, c, trie.root);
    }
  }
  
  return foundWords;
}
export default findWords;