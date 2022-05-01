/**
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/reorganize-string/discuss/1409359/Two-JavaScript-solutions

/***************************************************************************************************
 * Runtime: 110 ms, faster than 34.14% of JavaScript online submissions for Reorganize String.     *
 * Memory Usage: 43.3 MB, less than 82.18% of JavaScript online submissions for Reorganize String. *
 ***************************************************************************************************/

/***********************************************************************************************************************
 * Count the chars.                                                                                                    *
 * FInd the largest count and the char associated with that char.                                                      *
 * If our largest count is greater than half of our string's length, we can return an empty string; the string cannot be reorganized in a way that satisfies the problem. *
 * Place the maxLetter inside of an array. Increment the index by 2 so that the max letter is never next to itself.    *
 * Iterate through the characters, and slot them in any empty spaces.                                                  *
 ***********************************************************************************************************************/

const reorganizeString = (S) => {
  const charCount = {};

  for (const char of S) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  let max = -Infinity;
  let maxLetter;

  const chars = Object.keys(charCount);

  chars.forEach((char) => {
    if (charCount[char] > max) {
      max = charCount[char];
      maxLetter = char;
    }
  });

  const stringLength = S.length;

  if (max > (stringLength + 1) / 2) return '';

  const reorganizedChars = new Array(S.length);
  let index = 0;

  while (charCount[maxLetter] > 0) {
    reorganizedChars[index] = maxLetter;
    index += 2;
    charCount[maxLetter]--;
  }

  for (const char of chars) {
    while (charCount[char] > 0) {
      if (index >= stringLength) index = 1;

      reorganizedChars[index] = char;
      index += 2;
      charCount[char]--;
    }
  }

  return reorganizedChars.join('');
};

export default reorganizeString;
