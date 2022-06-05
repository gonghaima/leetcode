/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

// https://leetcode.com/problems/number-of-matching-subsequences/submissions/

/*****************************************************************************************************************
 * Runtime: 140 ms, faster than 90.20% of JavaScript online submissions for Number of Matching Subsequences.     *
 * Memory Usage: 49.2 MB, less than 72.94% of JavaScript online submissions for Number of Matching Subsequences. *
 *****************************************************************************************************************/

var numMatchingSubseq = function(s, words) {
  var result = 0;
  var map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > s.length) continue;
    if (isSubsequence(words[i], s, map)) {
      result++;
    }
  }
  return result;
};

const isSubsequence = (word, string, map) => {
  //you can use any method to determine the substring but I used indexOf()
  if (map.has(word)) return map.get(word); //this one line of code helps the time complexity so much
  let index = -1;
  for (const c of word) {
    /*what this loop does is that is uses the indexOf() function to check for a valid index of the
character in word. if the character in word doesn't exist in string it will return -1. We can also pass
in a second parameter that gives the function a starting point so that it won't consider indexes
that we have already considered. No repeats*/
    index = string.indexOf(c, index + 1);
    if (index == -1) {
      map.set(word, false);
      return false;
    }
  }
  map.set(word, true);
  return true;
};

export default numMatchingSubseq;
