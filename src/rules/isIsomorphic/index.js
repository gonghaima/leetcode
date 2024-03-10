/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const hash1 = {};
  const hash2 = {};
  for (let idx = 0; idx < s.length; idx++) {
    if (hash1[s[idx]] !== hash2[t[idx]]) return false;
    hash1[s[idx]] = idx;
    hash2[t[idx]] = idx;
  }
  return true;
};

export default isIsomorphic;

// my thought - intuitive approach - maintain three hashes
// hash1 - first hash map the char count for s
// hash2 - second hash map the char count for t
// hash3 - third hash map for relation between the chars

// for each loop, find s char count, 
// then according to relation, find t char count
// if doesn't match, return false
// otherwise, add count for both hash1 and hash2

// at the end of the loop, return default value - true
