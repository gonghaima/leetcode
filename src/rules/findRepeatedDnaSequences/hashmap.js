/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/repeated-dna-sequences/discuss/899795/JavaScript-Clean-O(N)-Solution

/********************************************************************************************************
 * Runtime: 93 ms, faster than 90.72% of JavaScript online submissions for Repeated DNA Sequences.      *
 * Memory Usage: 54.7 MB, less than 68.21% of JavaScript online submissions for Repeated DNA Sequences. *
 ********************************************************************************************************/

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
