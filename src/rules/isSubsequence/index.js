/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/***********************************************************************************************
 * Runtime: 82 ms, faster than 50.64% of JavaScript online submissions for Is Subsequence.     *
 * Memory Usage: 43.7 MB, less than 5.12% of JavaScript online submissions for Is Subsequence. *
 ***********************************************************************************************/

var isSubsequence = function(s, t) {
  const sArray = s.split('');
  for (const character of t) {
    if (character === sArray[0]) sArray.shift();
  }
  return sArray.length === 0;
};

export default isSubsequence;
