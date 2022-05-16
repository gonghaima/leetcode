/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
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
