/****************************************************************************************************
 * The key to the problem:                                                                          *
 *                                                                                                  *
 * Roman numerals are usually written largest to smallest from left to right.                       *
 *                                                                                                  *
 * Thus, when iterating from left to right, if the current char is less than the char to its right, *
 * subtract the values and move 2 characters to the right.                                          *
 ****************************************************************************************************/

export default s => {
  const ROMAN_TO_INT = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  let sum = 0;
  let i = 0;

  while (i < s.length) {
    const curInt = ROMAN_TO_INT[s[i]];
    const nextInt = i === s.length - 1 ? Number.NEGATIVE_INFINITY : ROMAN_TO_INT[s[i + 1]];

    if (curInt < nextInt) {
      sum += nextInt - curInt;
      i += 2;
    } else {
      sum += curInt;
      i++;
    }
  }

  return sum;
};
