// idea is to reverse the string as a new string,
//  loop through each combination of the new string, compare if exists in old string
// add matched string into result array
// filter out non-palindrome value in result array
// return longest string in result array
export const longestPalindromeSolution2 = s => {
  // if single character in a string, return directly
  const totalLength = s.length;
  if (totalLength === 1 || s === '') return s;

  // if two characters in a string, return whole string if they are the same, otherwise return one character
  if (totalLength === 2 && s.substring(0, 1) === s.substring(1, 2)) {
    return s;
  } else if (totalLength === 2) {
    return s.substring(0, 1);
  }

  let longestP = s.substring(0, 1);
  let longestObj = { longest: false, val: longestP };

  // functino to check if a string is a palindrome
  const isPalin = p =>
    p ===
    p
      .split('')
      .reverse()
      .join('');

  //if whole string is palindrome, return whole string
  if (isPalin(s)) return s;
  // checking from maximum length, stops if the first palindrome detected
  const takeByLength = (stringParam, length) => {
    //if length is one, means no palindrome found, except one character
    // in this case, just return first character of the input string
    if (length === 1) return stringParam.substring(0, 1);
    const count = stringParam.length;

    let position = 0;
    let currentEle = stringParam.substring(position, position + length);

    while (
      currentEle.length > 1 &&
      currentEle.length === length &&
      longestObj.longest === false
    ) {
      if (isPalin(currentEle)) {
        longestObj.longest = true;
        longestObj.val = currentEle;
      } else {
        currentEle = stringParam.substring(++position, position + length);
      }
    }
    if (longestObj.longest === false) {
      takeByLength(stringParam, length - 1);
    }
  };

  takeByLength(s, totalLength - 1);

  return longestObj.val;
};
