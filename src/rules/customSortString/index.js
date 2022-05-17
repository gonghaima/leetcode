/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

// one liner - use native api sort, I guess it is n(log n) complexity?

/****************************************************************************************************
 * Runtime: 81 ms, faster than 52.93% of JavaScript online submissions for Custom Sort String.      *
 * Memory Usage: 41.7 MB, less than 98.30% of JavaScript online submissions for Custom Sort String. *
 ****************************************************************************************************/

var customSortString = function(S, T) {
  return T.split('')
    .sort((a, b) => S.indexOf(a) - S.indexOf(b))
    .join('');
};

export default customSortString;
