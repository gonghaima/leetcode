/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

/*****************************************************************************************************************
 * Runtime: 328 ms, faster than 32.06% of JavaScript online submissions for Number of Matching Subsequences.     *
 * Memory Usage: 58.3 MB, less than 24.81% of JavaScript online submissions for Number of Matching Subsequences. *
 *****************************************************************************************************************/

// https://leetcode.com/problems/number-of-matching-subsequences/discuss/1160430/JavaScript-Easy-to-Understand-Optimal-Solution

var numMatchingSubseq = function(s, words) {
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let head = {};
  let count = 0;
  // create a hash of alph letter pointing to an empty array
  for (let char of alph) {
    head[char] = [];
  }
  // populate each array with the words that start with the corresponding letter
  for (let word of words) {
    head[word[0]].push(word);
  }

  let current;
  let temp = [];
  // iterate over s
  for (let char of s) {
    // white the array at the current char of s is not empty
    while (head[char].length) {
      //pop a value and slice the first letter out
      current = head[char].pop();
      current = current.slice(1);
      // if the string is equal to zero that means that all characters have been found
      if (!current.length) {
        count++;
      } else {
        //if not push to a temp array so that no word gets counted twice i.e. "bbb" becomes "bb" and then "b" and then "" and gets counted
        // as one in the same iteration because it is being pushed back to the array and the length never becomes zero
        temp.push(current);
      }
    }
    //push the temp array back to the hash
    for (let t of temp) {
      head[t[0]].push(t);
    }
    // reset temp array
    temp = [];
  }
  // return the count
  return count;
};

export default numMatchingSubseq;
