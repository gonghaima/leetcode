/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */

// https://leetcode.com/problems/find-and-replace-in-string/discuss/555382/Intuitive-Javascript-Solution

/************************************************************************************************************
 * Runtime: 117 ms, faster than 16.29% of JavaScript online submissions for Find And Replace in String.     *
 * Memory Usage: 43.5 MB, less than 60.94% of JavaScript online submissions for Find And Replace in String. *
 ************************************************************************************************************/

var findReplaceString = function(S, indexes, sources, targets) {
  /* 
   * building a single array for replacement information.
   * the goal is to replace the strings from the end(right) to the 
   * beginning(left) so the current replacement will not affect the next one.
   *
   * example: 
   *  S = "abcd"
   *  indexes = [0, 2]
   *  sources = ["a", "cd"]
   *  targets = ["eee", "ffff"]
   *  expected output = "eeebffff"

   *  replacements = [[2, 'cd', 'ffff'],[0, 'a', 'eee']]
   *  output: 
   *  iteration #1 -> 'ab' + 'fff' + '' = 'abffff'
   *  iteration #2 -> '' + 'eee' + 'bffff' = 'eeebffff'
   *  final output -> 'eeebffff'
   */
  const replacements = indexes
    .map((index, i) => [index, sources[i], targets[i]])
    .sort((a, b) => b[0] - a[0]);
  const output = replacements.reduce((str, [index, source, target]) => {
    if (str.substring(index, index + source.length) !== source) {
      return str;
    }
    return `${str.substring(0, index)}${target}${str.substring(
      index + source.length
    )}`;
  }, S);
  return output;
};

export default findReplaceString;
