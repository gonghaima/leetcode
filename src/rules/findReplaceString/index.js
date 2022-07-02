/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */

// https://leetcode.com/problems/find-and-replace-in-string/discuss/268644/JavaScript-solution

/************************************************************************************************************
 * Runtime: 69 ms, faster than 84.58% of JavaScript online submissions for Find And Replace in String.      *
 * Memory Usage: 42.9 MB, less than 77.10% of JavaScript online submissions for Find And Replace in String. *
 ************************************************************************************************************/

var findReplaceString = function(S, indexes, sources, targets) {
  var result = S.split('');
  indexes.forEach((indexInS, i) => { // length of index, max size of all items, 
    var sourceChars = sources[i];
    var targetChars = targets[i];

    if (S.slice(indexInS, indexInS + sourceChars.length) === sourceChars) {
      result[indexInS] = [targetChars];
      var elementsToReplace = sourceChars.length - 1;
      while (elementsToReplace > 0) {
        indexInS += 1;
        result[indexInS] = '';
        elementsToReplace -= 1;
      }
    }
  });
  return result.join('');
};

export default findReplaceString;
