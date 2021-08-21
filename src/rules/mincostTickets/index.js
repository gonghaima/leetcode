/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

/**********************************************************************************************************
 *   Runtime: 68 ms, faster than 97.25% of JavaScript online submissions for Minimum Cost For Tickets.    *
 * Memory Usage: 40.7 MB, less than 35.71% of JavaScript online submissions for Minimum Cost For Tickets. *
 **********************************************************************************************************/

// https://leetcode.com/problems/minimum-cost-for-tickets/solution/
// solution approach 1
/************************************************************************************************************************************************************************************************************************
 *                                                                                    Approach 1: Dynamic Programming (Day Variant)                                                                                     *
 *                                                                                               Intuition and Algorithm                                                                                                *
 *     For each day, if you don't have to travel today, then it's strictly better to wait to buy a pass. If you have to travel today, you have up to 3 choices: you must buy either a 1-day, 7-day, or 30-day pass.     *
 * We can express those choices as a recursion and use dynamic programming. Let's say dp(i) is the cost to fulfill your travel plan from day i to the end of the plan. Then, if you have to travel today, your cost is: *
 *             {dp}(i) = min({dp}(i+1) + {costs}[0], {dp}(i+7) + {costs}[1], {dp}(i+30) + {costs}[2])dp(i)=min(dp(i+1)+costs[0],dp(i+7)+costs[1],dp(i+30)+costs[2])               *
 ************************************************************************************************************************************************************************************************************************/

/**********************************************************************************************
 * Time Complexity: O(W), where W = 365W=365 is the maximum numbered day in your travel plan. *
 *                                   Space Complexity: O(W)                                   *
 **********************************************************************************************/

var mincostTickets = function (days, costs) {
    let memo = {};
    let dayset = new Set();

    const dp = i => {
        if (i > 365)
            return 0;
        if (memo[i] != null)
            return memo[i];

        let ans;
        if (dayset.has(i)) {
            ans = Math.min(dp(i + 1) + costs[0],
                dp(i + 7) + costs[1], dp(i + 30) + costs[2]);
        } else {
            ans = dp(i + 1);
        }
        memo[i] = ans;
        return ans;
    };

    for (let d of days) dayset.add(d);

    return dp(1);
};

export default mincostTickets;