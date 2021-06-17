/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*********************************************************************************************
 *   RUNTIME: 160 MS, FASTER THAN 43.67% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COIN CHANGE.   *
 * MEMORY USAGE: 43.9 MB, LESS THAN 63.64% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COIN CHANGE. *
 *********************************************************************************************/

// dp - top down

var coinChange = function (coins, amount) {
    if (amount < 1) return 0;
    const coinChange = (coins, rem, count) => {
        if (rem < 0) return -1;
        if (rem == 0) return 0;
        if (count[rem - 1] != 0) return count[rem - 1];
        let min = Number.MAX_SAFE_INTEGER;
        for (let coin of coins) {
            const res = coinChange(coins, rem - coin, count);
            if (res >= 0 && res < min)
                min = 1 + res;
        }
        count[rem - 1] = (min == Number.MAX_SAFE_INTEGER) ? -1 : min;
        return count[rem - 1];
    }

    return coinChange(coins, amount, new Array(amount).fill(0));
};

export default coinChange;