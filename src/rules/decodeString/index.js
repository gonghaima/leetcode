/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  while (s.indexOf('[') != -1) {
    // base case, breaks when there's no bracket found
    let left = s.lastIndexOf('['); // left position of the inner-most `[`
    let right = left + s.substring(left).indexOf(']'); // right positio of the inner-most `]`
    let word = s.substring(left + 1, right); // between them is the string
    let count = '';
    while (s[left - 1] >= 0 && s[left - 1] <= 9) {
      // try to find a valid number
      left--;
      count = s[left] + count;
    }
    s = s.substring(0, left) + word.repeat(count) + s.substring(right + 1); // put them all togher and repeat :)
  }
  return s;
};

export default decodeString;
