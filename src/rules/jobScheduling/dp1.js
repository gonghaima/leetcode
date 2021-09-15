
/****************************************************************************************************************
 *  Runtime: 154 ms, faster than 56.36% of JavaScript online submissions for Maximum Profit in Job Scheduling.  *
 * Memory Usage: 55 MB, less than 69.70% of JavaScript online submissions for Maximum Profit in Job Scheduling. *
 ****************************************************************************************************************/

// https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/1130089/JavaScript-DP-%2B-Binary-Search-with-explanation

var jobScheduling = function (startTime, endTime, profit) {
    let jobs = [];
    let n = startTime.length;
    for (let i = 0; i < n; i++) {
        jobs.push({ s: startTime[i], e: endTime[i], p: profit[i] });
    }
    jobs.sort(function (x, y) { return x.e - y.e });
    let dp = new Array(n);
    dp[0] = jobs[0].p;
    for (let i = 1; i < n; i++) {
        let profit = jobs[i].p;
        let task = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (jobs[j].e <= jobs[i].s) {
                task = j;
                break;
            }
        }
        if (task != -1)
            profit += dp[task];
        dp[i] = Math.max(profit, dp[i - 1]);
    }
    return dp[n - 1];
};

export default jobScheduling;