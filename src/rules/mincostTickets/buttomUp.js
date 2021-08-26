/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

/**********************************************************************************************************
 *   Runtime: 84 ms, faster than 34.44% of JavaScript online submissions for Minimum Cost For Tickets.    *
 * Memory Usage: 40.8 MB, less than 31.11% of JavaScript online submissions for Minimum Cost For Tickets. *
 **********************************************************************************************************/

//https://leetcode.com/problems/minimum-cost-for-tickets/discuss/953450/Easy-to-understand-bottoms-up-DP-solution

var mincostTickets = function (days, costs) {
    let memo = Array(Math.max(...days) + 1);
    let N = memo.length;
    memo.fill(Infinity);
    memo[0] = 0;

    for (let i = 1; i < N; i++) {
        let cost1 = memo[i - 1] + costs[0];
        let cost7 = !memo[i - 7] ? 0 + costs[1] : costs[1] + memo[i - 7]; // if i-7 is negative, it will be undefined, so set to 0
        let cost30 = !memo[i - 30] ? 0 + costs[2] : costs[2] + memo[i - 30]; // if i-30 is negative, it will be undefined so set to 0

        // Update the memo function if and only if day i is in the days array
        memo[i] = days.includes(i) ? Math.min(cost1, cost7, cost30) : memo[i - 1];
    }

    return memo[N - 1];
};

export default mincostTickets;