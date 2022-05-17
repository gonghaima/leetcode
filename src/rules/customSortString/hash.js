/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

/****************************************************************************************************
 * Runtime: 71 ms, faster than 74.29% of JavaScript online submissions for Custom Sort String.      *
 * Memory Usage: 42.4 MB, less than 75.61% of JavaScript online submissions for Custom Sort String. *
 ****************************************************************************************************/

var customSortString = function(order, string) {
  let map = {};
  // iterate throuhg our string and place  map[string[i]] = i
  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i;
  }
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]] == undefined) {
      map[string[i]] = Infinity;
    }
  }
  string = string.split('');
  return string.sort((a, b) => map[a] - map[b]).join(''); // if not in map then the order will stay and the char will not be moved from orignal string
};

export default customSortString;
