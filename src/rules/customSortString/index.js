/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/custom-sort-string/discuss/1030202/JavaScript-O(n%2Bm)-treat-at-flat-DAG-use-index-in-original-string-to-place-other-character

/****************************************************************************************************
 * Runtime: 97 ms, faster than 28.26% of JavaScript online submissions for Custom Sort String.      *
 * Memory Usage: 42.8 MB, less than 48.02% of JavaScript online submissions for Custom Sort String. *
 ****************************************************************************************************/

var customSortString = function(S, T) {
  let o = {}; // stsore the last index for entry, since S is basically a flat DAG
  S.split('').forEach((e, i) => {
    o[e] = i;
  });

  let res = []; // 2d array where we insert all the occurances based on the index in S, then we flatten and join

  for (const c of T) {
    let idx = S.length;
    if (o[c] != undefined) {
      idx = o[c];
    }
    if (res[idx]) res[idx].push(c);
    else res[idx] = [c];
  }

  return res.flat().join('');
};

export default customSortString;
