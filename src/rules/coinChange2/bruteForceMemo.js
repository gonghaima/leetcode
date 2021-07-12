/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

/***********************************************************************************************
 *   Runtime: 212 ms, faster than 26.46% of JavaScript online submissions for Coin Change 2.   *
 * Memory Usage: 56.6 MB, less than 29.77% of JavaScript online submissions for Coin Change 2. *
 ***********************************************************************************************/

// Unbounded Knapsack
// https://leetcode.com/problems/coin-change-2/submissions/

var coinChange2 = function (amount, coins) {
    if (amount == 0)
        return 1;
    if (coins.length == 0)
        return 0;
    const dp = [...new Array(coins.length)].map(_ => new Array(amount + 1).fill(null));

    const changeFrom = (amount, coins, currentIndex) => {
        if (amount == 0)
            return 1;

        if (amount < 0 || currentIndex == coins.length)
            return 0;

        if (dp[currentIndex][amount] != null)
            return dp[currentIndex][amount];

        // Recursive call after excluding the coin at the currentIndex
        const sum1 = changeFrom(amount - coins[currentIndex], coins, currentIndex);

        // Recursive call after selecting the coin at the currentIndex
        const sum2 = changeFrom(amount, coins, currentIndex + 1);

        dp[currentIndex][amount] = sum1 + sum2;
        return dp[currentIndex][amount];
    }

    return changeFrom(amount, coins, 0);
};

export default coinChange2;