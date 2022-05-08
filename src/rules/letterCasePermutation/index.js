/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/letter-case-permutation/discuss/508080/JavaScript-iterative-BFS-solution

/*********************************************************************************************************
 * Runtime: 87 ms, faster than 75.03% of JavaScript online submissions for Letter Case Permutation.      *
 * Memory Usage: 46.2 MB, less than 39.07% of JavaScript online submissions for Letter Case Permutation. *
 *********************************************************************************************************/

var letterCasePermutation = function(S) {
  const queue = [S];
  for (let i = 0; i < S.length; i++) {
    if (/[0-9]/.test(S[i])) continue;
    const size = queue.length;
    for (let j = 0; j < size; j++) {
      const node = queue.shift();
      queue.push(node.slice(0, i) + node[i].toLowerCase() + node.slice(i + 1));
      queue.push(node.slice(0, i) + node[i].toUpperCase() + node.slice(i + 1));
    }
  }
  return queue;
};

export default letterCasePermutation;
