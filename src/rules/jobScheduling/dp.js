
/****************************************************************************************************************
 *  Runtime: 154 ms, faster than 56.36% of JavaScript online submissions for Maximum Profit in Job Scheduling.  *
 * Memory Usage: 55 MB, less than 69.70% of JavaScript online submissions for Maximum Profit in Job Scheduling. *
 ****************************************************************************************************************/

// https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/1130089/JavaScript-DP-%2B-Binary-Search-with-explanation

var jobScheduling = function (startTime, endTime, profit) {
    // i----
    //     ----  
    //       j----
    //             k----
    // dp[i]: at the current time i, the largest possible profit, include or not include i.
    // ensure dp[i] >= dp[i+1], only need to consider the time i
    // don't need to worry i+k > i+j, because dp[j] >= dp[k]
    var n = profit.length;
    var dp = new Array(n + 1).fill(0);
    var jobs = [];
    for (var i = 0; i < n; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }
    jobs.sort((a, b) => a[0] - b[0]); // sort by start time
    // bottom up
    for (var i = n - 1; i >= 0; i--) {
        // BS: find the first startTime >=  current endTime - lower bound
        var l = i + 1;
        var r = n; // ensure r>=l at the initial value, eg: i = n-2, r=n-1 will not run the loop
        while (l < r) {
            var mid = Math.floor((l + r) / 2);
            if (jobs[mid][0] < jobs[i][1]) {
                l = mid + 1;
            }
            else {
                r = mid;
            }
        }
        // l is our next index
        var next = l;
        dp[i] = Math.max(dp[i + 1], jobs[i][2] + dp[next]);
    }
    return dp[0];
};

export default jobScheduling;