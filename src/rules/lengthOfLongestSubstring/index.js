/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var max = 0,
    theSub = '';
  for (var i = 0; i < s.length; i++) {
    const idx = theSub.indexOf(s[i]);
    theSub += s[i];
    if (idx >= 0) {
      theSub = theSub.substring(idx + 1);
    }
    if (theSub.length > max) {
      max = theSub.length;
    }
  }
  return max;
};

export default lengthOfLongestSubstring;
