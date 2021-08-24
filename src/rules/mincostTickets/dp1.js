/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

// https://leetcode.com/problems/minimum-cost-for-tickets/discuss/518772/Javascript-Solution-with-comments

/**********************************************************************************************************
 *   Runtime: 76 ms, faster than 74.29% of JavaScript online submissions for Minimum Cost For Tickets.    *
 * Memory Usage: 39.4 MB, less than 76.57% of JavaScript online submissions for Minimum Cost For Tickets. *
 **********************************************************************************************************/

var mincostTickets = function (days, cost) {
    // Initilize dp array to be the size of the last day plus 1
    let dp = new Array(days[days.length - 1] + 1);
    // Base case
    dp[0] = 0;
    // Loop through all the days
    for (let i = 1; i < dp.length; i++) {
        // If 'i' isn't in the days array we let it equal to the previous day because we don't need to buy a ticket for that day
        if (!days.includes(i)) {
            dp[i] = dp[i - 1];
            // if dp[i] is in the days array we find the min value between our 3 cost possibilities
        } else {
            dp[i] = Math.min(
                dp[Math.max(0, i - 1)] + cost[0],
                dp[Math.max(0, i - 7)] + cost[1],
                dp[Math.max(0, i - 30)] + cost[2]
            );
        }
    }
    // last element of dp will be our answer
    return dp[dp.length - 1];
};

export default mincostTickets;