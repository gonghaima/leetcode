/**
 * @param {number} n
 * @return {number}
 */

/******************************************************************************************************************
 *   RUNTIME: 64 MS, FASTER THAN 100.00% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COUNT NUMBERS WITH UNIQUE DIGITS.   *
 * MEMORY USAGE: 38.7 MB, LESS THAN 29.79% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COUNT NUMBERS WITH UNIQUE DIGITS. *
 ******************************************************************************************************************/

// https://leetcode.com/problems/count-numbers-with-unique-digits/discuss/83061/Java-O(1)-with-explanation
var countNumbersWithUniqueDigits = function (n) {
    if (n == 0) {
        return 1;
    }
    let ans = 10, base = 9;
    for (let i = 2; i <= n && i <= 10; i++) {
        base = base * (9 - i + 2);
        ans += base;
    }
    return ans;
};

export default countNumbersWithUniqueDigits;