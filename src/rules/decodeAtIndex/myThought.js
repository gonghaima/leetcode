/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// should working, but no optimal. For a large repeating number, space usage will be huge

var decodeAtIndex = function(s, k) {
  let startToCount = false;
  let countNumber = '';
  let accumulativeChars = '';
  let result = '';
  for (let i = 0; i < s.length; i++) {
    //early terminate, when result[k]!==undefined
    const currentCar = s[i];
    // start to count if it is a number
    if (!isNaN(Number(currentCar))) {
      startToCount = true;
      countNumber = countNumber + '' + currentCar;
    } else {
      // it is a char
      // if startToCount is true,
      //      build the string with accumulativeChars, append to the result,
      //      reset accumulativeChars to currentChar, startToCount to false
      // else startToCount is false
      //     append currentChar to accumulativeChars
    }
  }
  return null;
};

export default decodeAtIndex;
