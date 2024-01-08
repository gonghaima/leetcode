/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let word = '';
  let right = s.length - 1,
    left = right;

  // start from the end of the string
  while (right >= 0) {
    // ignore the spaces
    while (s[right] === ' ') {
      --right;
      --left;
    }
    // since we have ignored the spaces, this will either be the start of the string or a character
    // if it is a character, we start moving the left pointer until we either reach the start of the string or
    // we reach a space
    while (left >= 0 && s[left] !== ' ') {
      --left;
    }
    // we need to add the word we just found, so we traverse from (left, right] and add the characters to the final word
    // this will ensure that the characters in a word are added in the correct order
    let i = left + 1;
    while (i <= right) {
      // this is required to add a space in between the words
      // -- i == left + 1 when we are at the first character of the current word
      // -- word !== "" when this is not the first word of the whole sentence
      if (i == left + 1 && word !== '') {
        word += ' ';
      }
      word += s[i];
      ++i;
    }
    // move the right pointer to the left position and continue
    right = left;
  }
  return word;
};

export default reverseWords;
