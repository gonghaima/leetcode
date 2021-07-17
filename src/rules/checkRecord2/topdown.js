/**
 * @param {number} n
 * @return {number}
 */

/**************************************************************************************************************
 *   Runtime: 132 ms, faster than 50.00% of JavaScript online submissions for Student Attendance Record II.   *
 * Memory Usage: 45.2 MB, less than 25.00% of JavaScript online submissions for Student Attendance Record II. *
 **************************************************************************************************************/

// https://leetcode.com/problems/student-attendance-record-ii/discuss/101652/Java-4-lines-DP-solution-with-state-transition-table-explained

var checkRecord2 = function (n) {
    const sum = (arr, l, h) => {
        let s = 0;
        for (let i = l; i <= h; i++)
            s = (s + arr[i]) % 1000000007;
        return s;
    };

    let dp = [1, 1, 0, 1, 0, 0]; // init table for n = 1
    for (let i = 2; i <= n; i++) // updating table for n = i
        dp = [sum(dp, 0, 2), dp[0], dp[1], sum(dp, 0, 5), dp[3], dp[4]];
    return sum(dp, 0, 5);
};

export default checkRecord2;