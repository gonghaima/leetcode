/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

/**
 * 
 *  p(take) = dp[i-(e-s)] + profit[i];
 *  p(notTake) = dp[prev];
 * dp[i] = Math.max(p(take), p(notTake));
 */
var jobScheduling = function (startTime, endTime, profit) {
    let pNotTake = 0, pTake = 0, dp = {}, top = 0;
    for (let i = 0; i < end.length; i++) {
        let s = startTime[i];
        let e = endTime[i];

        if (top === 0) {
            top = profit[i];
            pTake = profit[i];
        } else {
            pTake = dp[i - (e - s)] + profit[i];
            pNotTake = top;
            dp[i] = Math.max(pTake, pNotTake);
            top = dp[i];
        }
    }
    return top;
};

export default jobScheduling;