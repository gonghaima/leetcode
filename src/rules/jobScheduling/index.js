/******************************************************************************************************************
 *   Runtime: 124 ms, faster than 85.54% of JavaScript online submissions for Maximum Profit in Job Scheduling.   *
 * Memory Usage: 58.6 MB, less than 41.27% of JavaScript online submissions for Maximum Profit in Job Scheduling. *
 ******************************************************************************************************************/

// https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/1430645/javaScript-inuttive-solution

var jobScheduling = function (startTime, endTime, profit) {
    var jobs = [];
    var dp = []

    for (let i = 0; i < startTime.length; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]])
    }
    jobs.sort((a, b) => a[1] - b[1]);

    dp[0] = jobs[0][2];
    for (let i = 1; i < startTime.length; i++) {
        var result = binary(i);
        let profit = (result === -1) ? 0 : dp[result];
        dp[i] = Math.max(dp[i - 1], profit + jobs[i][2])
    }
    return dp[dp.length - 1]

    function binary(index) {
        var l = 0;
        var h = index - 1;
        var temp = -1
        while (l <= h) {
            var mid = Math.floor((l + h) / 2);
            if (jobs[mid][1] <= jobs[index][0]) {
                temp = mid;
                l = mid + 1
            } else {
                h = mid - 1
            }
        }
        return temp
    }
};

export default jobScheduling;