/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

/**********************************************************************************************************
 *   Runtime: 72 ms, faster than 91.43% of JavaScript online submissions for Minimum Cost For Tickets.    *
 * Memory Usage: 39.4 MB, less than 80.57% of JavaScript online submissions for Minimum Cost For Tickets. *
 **********************************************************************************************************/

var mincostTickets = function (days, costs) {
    const dp = new Array(days.length + 1).fill(0);
    let weekPointer = days.length - 1;
    let monthPointer = days.length - 1;
    dp[days.Length] = 0;
    for (let currDay = days.length - 1; currDay >= 0; currDay--) {
        while (days[weekPointer] - days[currDay] >= 7)
            weekPointer--;
        while (days[monthPointer] - days[currDay] >= 30)
            monthPointer--;
        //The weekPointer indicates the last day (index) which will be covered using a weekly pass. So we need to consider the cost for the next travel day after weekPointer. Thus the +1
        dp[currDay] = Math.min(
            costs[0] + dp[currDay + 1],
            costs[1] + dp[weekPointer + 1],
            costs[2] + dp[monthPointer + 1]);
    }

    return dp[0];
};

export default mincostTickets;