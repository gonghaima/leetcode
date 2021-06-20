/**
 * @param {number} n
 * @return {number}
 */

/***********************************************************************************************
 *   RUNTIME: 76 MS, FASTER THAN 72.65% OF JAVASCRIPT ONLINE SUBMISSIONS FOR INTEGER BREAK.    *
 * MEMORY USAGE: 38.6 MB, LESS THAN 29.85% OF JAVASCRIPT ONLINE SUBMISSIONS FOR INTEGER BREAK. *
 ***********************************************************************************************/

// break into groups of 3 till less10

// https://leetcode.com/problems/integer-break/discuss/80689/A-simple-explanation-of-the-math-part-and-a-O(n)-solution

var integerBreak = function (n) {
    const less10 = [0, 0, 1, 2, 4, 6, 9, 12, 18, 27];
    const f = (n) => {
        if (n < 10) return less10[n];
        return f(n - 3) * 3;
    }
    return f(n);
};

export default integerBreak;