/**
 * @param {number} n
 * @return {number}
 */

/**************************************************************************************************************
 *   Runtime: 524 ms, faster than 33.33% of JavaScript online submissions for Student Attendance Record II.   *
 * Memory Usage: 45.6 MB, less than 50.00% of JavaScript online submissions for Student Attendance Record II. *
 **************************************************************************************************************/

// topdown (O)1 space

// https://leetcode.com/problems/student-attendance-record-ii/discuss/650804/Evolve-from-brute-force-to-optimal

var checkRecord2 = function (n) {
    let cur = new Array(2).fill(null).map(_ => new Array(3).fill(0));
    cur[0][0] = 1;
    let mod = 1000000007;
    for (let i = 0; i <= n; i++) {
        let nxt = new Array(2).fill(null).map(_ => new Array(3).fill(0));
        for (let A = 0; A < 2; A++)
            for (let L = 0; L < 3; L++) {
                nxt[A][0] = (nxt[A][0] + cur[A][L]) % mod;  //P
                if (A == 1) nxt[1][0] = (nxt[1][0] + cur[0][L]) % mod;  //A
                if (L == 1 || L == 2) nxt[A][L] = (nxt[A][L] + cur[A][L - 1]) % mod;  //L
            }
        cur = nxt;
    }
    return cur[1][0];
};

export default checkRecord2;