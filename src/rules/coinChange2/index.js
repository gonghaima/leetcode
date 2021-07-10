/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

/***********************************************************************************************
 *   Runtime: 116 ms, faster than 50.00% of JavaScript online submissions for Coin Change 2.   *
 * Memory Usage: 38.7 MB, less than 91.62% of JavaScript online submissions for Coin Change 2. *
 ***********************************************************************************************/

// https://leetcode.com/problems/coin-change-2/discuss/99212/Knapsack-problem-Java-solution-with-thinking-process-O(nm)-Time-and-O(m)-Space

var coinChange2 = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        };
    };
    return dp[amount];
};

export default coinChange2;