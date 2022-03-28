/**
 * @param {string} s
 * @return {string[]}
 */

// rolling hash
// https://leetcode.com/problems/repeated-dna-sequences/discuss/899317/JavaScript-Rolling-Hash-Solutions

/*****************************************************************************************************
 * Runtime: 268 ms, faster than 9.45% of JavaScript online submissions for Repeated DNA Sequences.   *
 * Memory Usage: 69 MB, less than 8.94% of JavaScript online submissions for Repeated DNA Sequences. *
 *****************************************************************************************************/

var findRepeatedDnaSequences = function(s) {
  let curr = s.slice(0, 10);
  const seen = new Set([curr]);
  const res = new Set();

  for (let i = 10; i < s.length; i++) {
    curr = curr.slice(1) + s[i];
    if (seen.has(curr)) res.add(curr);
    seen.add(curr);
  }
  return [...res];
};

export default findRepeatedDnaSequences;
