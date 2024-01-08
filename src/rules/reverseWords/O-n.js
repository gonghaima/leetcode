/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const ret = [];
  let word = [];
  for (let i = 0; i < s.length; ++i) {
    if (s.charAt(i) === ' ') {
      // We found the space, put word in front (if there is any)
      word.length > 0 && ret.unshift(word.join(''));
      // Reset the current word
      word = [];
    } else {
      // Add characters to the current word
      word.push(s.charAt(i));
    }
  }
  // If there is current word exists, add it in front
  word.length > 0 && ret.unshift(word.join(''));
  return ret.join(' ');
};

export default reverseWords;
