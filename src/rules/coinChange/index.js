/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/******************************************************************************************
 * RUNTIME: 4040 MS, FASTER THAN 5.03% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COIN CHANGE.  *
 * MEMORY USAGE: 49 MB, LESS THAN 5.65% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COIN CHANGE. *
 ******************************************************************************************/

// bfs

var coinChange = function (coins, amount) {
    if (amount === 0) return 0;
    let cnt = 0;
    let remaining = [amount];
    while (remaining.length) {
        cnt++;
        const tmp = new Set();
        for (const coin of coins) {
            for (const r of remaining) {
                if (coin === r) return cnt;
                if (coin < r) {
                    tmp.add(r - coin);
                }
            }
        };
        remaining = [...tmp];
    }
    return -1;
};

export default coinChange;