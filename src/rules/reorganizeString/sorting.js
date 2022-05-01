/**
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/reorganize-string/discuss/1409359/Two-JavaScript-solutions

/***************************************************************************************************
 * Runtime: 74 ms, faster than 80.79% of JavaScript online submissions for Reorganize String.      *
 * Memory Usage: 43.4 MB, less than 80.49% of JavaScript online submissions for Reorganize String. *
 ***************************************************************************************************/

const reorganizeString = (S) => {
  const charCount = {};

  for (const char of S) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  const sortedEntries = Object.entries(charCount).sort((a, b) => b[1] - a[1]);

  const stringLength = S.length;
  const organizedChars = new Array(stringLength);
  let index = 0;

  for (const [char, count] of sortedEntries) {
    if (count > (stringLength + 1) / 2) return '';

    for (let j = 0; j < count; j++) {
      if (index >= stringLength) index = 1;

      organizedChars[index] = char;
      index += 2;
    }
  }

  return organizedChars.join('');
};

export default reorganizeString;
