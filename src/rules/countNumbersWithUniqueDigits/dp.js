/**
 * @param {number} n
 * @return {number}
 */

/******************************************************************************************************************
 *   RUNTIME: 72 MS, FASTER THAN 81.63% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COUNT NUMBERS WITH UNIQUE DIGITS.    *
 * MEMORY USAGE: 38.7 MB, LESS THAN 20.41% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COUNT NUMBERS WITH UNIQUE DIGITS. *
 ******************************************************************************************************************/

// https://leetcode.com/problems/count-numbers-with-unique-digits/discuss/83040/Simple-Python-solution-90

//For the first (most left) digit, we have 9 options (no zero); for the second digit we used one but we can use 0 now, so 9 options; 
// and we have 1 less option for each following digits. Number can not be longer than 10 digits.

var countNumbersWithUniqueDigits = function (n) {
    const choices = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let ans = 1, product = 1;
    for (let i = 0; i < n; i++) {
        product *= choices[i];
        ans += product;
    };
    return ans;
};

export default countNumbersWithUniqueDigits;