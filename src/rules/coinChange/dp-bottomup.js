/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*********************************************************************************************
 *   RUNTIME: 112 MS, FASTER THAN 91.49% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COIN CHANGE.   *
 * MEMORY USAGE: 42.9 MB, LESS THAN 93.21% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COIN CHANGE. *
 *********************************************************************************************/

// dp - bottom up

var coinChange = function (coins, amount) {
    let max = amount + 1;
    const dp = new Array(amount + 1).fill(max);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};

export default coinChange;