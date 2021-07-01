/**
 * @param {number[]} nums
 * @return {boolean}
 */

/************************************************************************************************************
 *   RUNTIME: 100 MS, FASTER THAN 96.31% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION EQUAL SUBSET SUM.   *
 * MEMORY USAGE: 40.9 MB, LESS THAN 84.36% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION EQUAL SUBSET SUM. *
 ************************************************************************************************************/

// https://www.youtube.com/watch?v=r6I-ikllNDM

var canPartition = function (nums) {
    var sum = nums.reduce((a, b) => a + b);
    if (sum % 2 === 1) return false;
    let dp = new Array(sum + 1).fill(0);
    dp[0] = 1;
    for (const num of nums) {
        for (let i = sum; i >= 0; --i) {
            if (dp[i]) dp[i + num] = 1;
        }
        if (dp[sum / 2]) return true;
    }
    return false;
};

export default canPartition;