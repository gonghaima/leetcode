/**
 * @param {number} n
 * @return {number}
 */

/**************************************************************************************************************
 *  Runtime: 2396 ms, faster than 14.29% of JavaScript online submissions for Student Attendance Record II.   *
 * Memory Usage: 81.1 MB, less than 14.29% of JavaScript online submissions for Student Attendance Record II. *
 **************************************************************************************************************/

// https://leetcode.com/problems/student-attendance-record-ii/discuss/650804/Evolve-from-brute-force-to-optimal

var checkRecord2 = function (n) {
    const dp = new Array(n + 2).fill(null).map(_ => new Array(2).fill(null).map(x => new Array(3).fill(0)));
    dp[0][0][0] = 1;
    const mod = 1000000007;
    for (let i = 1; i <= n + 1; i++) {
        for (let A = 0; A < 2; A++)
            for (let L = 0; L < 3; L++) {
                dp[i][A][0] = (dp[i][A][0] + dp[i - 1][A][L]) % mod;  //P
                if (A == 1) dp[i][1][0] = (dp[i][1][0] + dp[i - 1][0][L]) % mod;  //A
                if (L == 1 || L == 2) dp[i][A][L] = (dp[i][A][L] + dp[i - 1][A][L - 1]) % mod;  //L
            }
    }
    return dp[n + 1][1][0];
};

export default checkRecord2;