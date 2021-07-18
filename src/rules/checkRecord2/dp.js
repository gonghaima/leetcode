/**
 * @param {number} n
 * @return {number}
 */

/**************************************************************************************************************
 *   Runtime: 132 ms, faster than 50.00% of JavaScript online submissions for Student Attendance Record II.   *
 * Memory Usage: 45.2 MB, less than 25.00% of JavaScript online submissions for Student Attendance Record II. *
 **************************************************************************************************************/

// https://leetcode.com/problems/student-attendance-record-ii/discuss/101651/Python-Straightforward-DP-with-Explanation

var checkRecord2 = function (n) {
    let a = 1, b = 1, d = 1, c = 0, e = 0, f = 0;
    const M = 1000000007;
    for (let i = 1; i < n; i++) {
        let temp1 = (a + b + c) % M;
        let temp2 = (temp1 + d + e + f) % M;
        c = b;
        b = a;
        f = e;
        e = d;
        a = temp1;
        d = temp2;
    }

    return (a + b + c + d + e + f) % M;
};

export default checkRecord2;