/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

/***********************************************************************************************
 *   Runtime: 96 ms, faster than 58.68% of JavaScript online submissions for Coin Change 2.    *
 * Memory Usage: 39.1 MB, less than 78.97% of JavaScript online submissions for Coin Change 2. *
 ***********************************************************************************************/

// Unbounded Knapsack
// https://leetcode.com/problems/coin-change-2/submissions/

var coinChange2 = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let j = 0; j < coins.length; j++) {
        for (let i = 1; i <= amount; i++) {
            if (i - coins[j] >= 0) {
                dp[i] += dp[i - coins[j]];
            }
        }
    }
    return dp[amount];
};

export default coinChange2;