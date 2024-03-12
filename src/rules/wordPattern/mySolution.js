
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sSplitted = s.split(" ");
  const matchMap = {};
  for (let i = 0; i < sSplitted.length; i++) {
    const patternChar = pattern[i];
    const element = sSplitted[i];

    if(!matchMap[patternChar]) {
      matchMap[patternChar] = element;
    } else {
      if(matchMap[patternChar] !== element) {
        return false;
      }
    }
  }
  return true;
};

export default wordPattern;
