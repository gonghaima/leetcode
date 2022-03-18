/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // 1. split the string with a space to form an array of words
  // 2. reverse the words
  // 3. filter out the words that are empty
  // 4. join the array to form the resultant string
  return s
    .split(' ')
    .reverse()
    .filter((w) => w !== '')
    .join(' ');
};

export default reverseWords;
