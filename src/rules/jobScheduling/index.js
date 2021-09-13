var jobScheduling = function (startTime, endTime, profit) {
    let pNotTake = 0, pTake = 0, dp = {}, top = 0;
    dp[0] = 0;
    for (let i = 0; i < endTime.length; i++) {
        let s = startTime[i];
        let e = endTime[i];

        if (top === 0) {
            top = profit[i];
            pTake = profit[i];
        } else {
            pTake = dp[i - (e - s)] + profit[i];
            pNotTake = top;
            if (!dp[i]) {
                let tmpIndex = i;
                while (!dp[tmpIndex] && dp[tmpIndex] !== 0) tmpIndex--;
                dp[i] = dp[tmpIndex];
            }
            dp[i] = Math.max(pTake, dp[i], top);
            top = dp[i];
        }
    }
    return top;
};

export default jobScheduling;