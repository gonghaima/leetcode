/**
 * @param {number} n
 * @return {number}
 */

/*************************************************************************************************
 *   RUNTIME: 212 MS, FASTER THAN 60.76% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PERFECT SQUARES.   *
 * MEMORY USAGE: 41.9 MB, LESS THAN 84.10% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PERFECT SQUARES. *
 *************************************************************************************************/

//https://www.youtube.com/watch?v=KaXeidsmvVQ

var numSquares = function (n) {
    const dp = new Array(n + 1).fill(n);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        };
    };
    return dp[n];
};

export default numSquares;