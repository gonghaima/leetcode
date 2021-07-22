/**
 * @param {number} n
 * @return {number}
 */

//  Runtime: 240 ms, faster than 33.33% of JavaScript online submissions for Student Attendance Record II.
//  Memory Usage: 45.2 MB, less than 55.56% of JavaScript online submissions for Student Attendance Record II.

// (O)1 space

// https://leetcode.com/problems/student-attendance-record-ii/discuss/650804/Evolve-from-brute-force-to-optimal

var checkRecord2 = function (n) {
    const cur = [[1, 1, 1], [1, 1, 1]], pre = new Array(2).fill(null).map(_ => new Array(3).fill(0))
    const mod = 1000000007;
    for (let i = n - 1; i >= 0; i--) {
        pre[0] = cur[0].slice();
        pre[1] = cur[1].slice();
        for (let A = 0; A < 2; A++)
            for (let L = 0; L < 3; L++) {
                cur[A][L] = pre[A][0];
                if (A == 0) cur[0][L] = (cur[0][L] + pre[1][0]) % mod;
                if (L < 2) cur[A][L] = (pre[A][L + 1] + cur[A][L]) % mod;
            }
    }
    return cur[0][0];
};

export default checkRecord2;