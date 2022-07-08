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
  const n = indexes.length;
  const chars = S.split('');

  for (let i = 0; i < n; i++) {
    const [index, source, target] = [indexes[i], sources[i], targets[i]];

    if (S.substring(index).startsWith(source)) {
      replaceChars(chars, index, source, target);
    }
  }

  return chars.join('');

  function replaceChars(chars, start, source, target) {
    chars[start] = target;

    for (let i = 1; i < source.length; i++) {
      chars[start + i] = '';
    }
  }
};

export default findReplaceString;
