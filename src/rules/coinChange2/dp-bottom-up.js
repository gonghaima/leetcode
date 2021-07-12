/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

/***********************************************************************************************
 *   Runtime: 244 ms, faster than 24.68% of JavaScript online submissions for Coin Change 2.   *
 * Memory Usage: 65.3 MB, less than 11.19% of JavaScript online submissions for Coin Change 2. *
 ***********************************************************************************************/

// Unbounded Knapsack
// https://leetcode.com/problems/coin-change-2/submissions/

var coinChange2 = function (amount, coins) {
    const dp = [...new Array(coins.length + 1)].map(_ => new Array(amount + 1).fill(null));
    dp[0][0] = 1;
    for (let j = 1; j <= coins.length; j++) {
        dp[j][0] = 1;
        for (let i = 1; i <= amount; i++) {
            dp[j][i] = dp[j - 1][i];
            if (i - coins[j - 1] >= 0) {
                dp[j][i] += dp[j][i - coins[j - 1]];
            }
        }
    }
    return dp[coins.length][amount];
};

export default coinChange2;