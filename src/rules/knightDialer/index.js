/**
 * @param {number} n
 * @return {number}
 */

/***********************************************************************************************
 *   Runtime: 216 ms, faster than 59.41% of JavaScript online submissions for Knight Dialer.   *
 * Memory Usage: 44.7 MB, less than 85.15% of JavaScript online submissions for Knight Dialer. *
 ***********************************************************************************************/

// https://leetcode.com/problems/knight-dialer/discuss/1104117/JavaScript-Simple-DP-Table
// https://www.youtube.com/watch?v=AspiZ9mUghM

var knightDialer = function (n) {
    const mod = 10 ** 9 + 7;
    const moves = [[6, 4], [6, 8], [9, 7], [8, 4], [3, 9, 0], [], [0, 1, 7], [2, 6], [3, 1], [4, 2]]

    const dp = [...Array(n)].map(() => Array(10).fill(0));
    dp[n - 1] = Array(10).fill(1);

    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= 9; j++) {
            for (let next of moves[j]) {
                dp[i][j] += dp[i + 1][next] % mod
            }
        }
    }
    return dp[0].reduce((acc, cur) => (acc + cur) % mod, 0)
};

export default knightDialer;