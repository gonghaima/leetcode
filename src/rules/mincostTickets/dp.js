/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

// https://leetcode.com/problems/minimum-cost-for-tickets/solution/
// solution approach 2

/**********************************************************************************************************
 *   Runtime: 64 ms, faster than 98.86% of JavaScript online submissions for Minimum Cost For Tickets.    *
 * Memory Usage: 39.1 MB, less than 94.89% of JavaScript online submissions for Minimum Cost For Tickets. *
 **********************************************************************************************************/

/*****************************************************************************************
 * Time Complexity: O(N)O(N), where NN is the number of unique days in your travel plan. *
 *                              Space Complexity: O(N)O(N).                              *
 *****************************************************************************************/

/********************************************************************************************************************************************************************************************************************************************************************************************
 *                                                                                                                     Approach 2: Dynamic Programming (Window Variant)                                                                                                                     *
 *                                                                                                                                 Intuition and Algorithm                                                                                                                                  *
 *                                                                                                    As in Approach 1, we only need to buy a travel pass on a day we intend to travel.                                                                                                     *
 * Now, let dp(i) be the cost to travel from day days[i] to the end of the plan. If say, j1 is the largest index such that days[j1] < days[i] + 1, j7 is the largest index such that days[j7] < days[i] + 7, and j30 is the largest index such that days[j30] < days[i] + 30, then we have: *
 *                                                                      {dp}(i) = min({dp}(j1) + {costs}[0], {dp}(j7) + {costs}[1], {dp}(j30) + {costs}[2])dp(i)=min(dp(j1)+costs[0],dp(j7)+costs[1],dp(j30)+costs[2])                                                                      *
 ********************************************************************************************************************************************************************************************************************************************************************************************/


var mincostTickets = function (days, costs) {
    let memo = new Array(days.length);
    let durations = [1, 7, 30];

    const dp = i => {
        if (i >= days.length)
            return 0;
        if (memo[i] != null)
            return memo[i];

        let ans = Number.MAX_VALUE;
        let j = i;
        for (let k = 0; k < 3; ++k) {
            while (days[j] < days[i] + durations[k])
                j++;
            ans = Math.min(ans, dp(j) + costs[k]);
        };

        memo[i] = ans;
        return ans;
    };

    return dp(0);
};

export default mincostTickets;