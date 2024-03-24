/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let letters = {};
  //create hashmap for both words, based on a counter
  for (let i = 0; i < s.length; i++) {
    letters[s[i]] = letters[s[i]] ? letters[s[i]] + 1 : 1;
    letters[t[i]] = letters[t[i]] ? letters[t[i]] - 1 : -1;
  }

  for (let letter in letters) {
    //this check for duplicates since if all letters are the same, we will end up with 0
    if (letters[letter] !== 0) {
      return false;
    }
  }
  return true;
};

export default isAnagram;
