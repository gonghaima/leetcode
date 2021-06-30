

/************************************************************************************************************
 *   RUNTIME: 104 MS, FASTER THAN 95.94% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION EQUAL SUBSET SUM.   *
 * MEMORY USAGE: 40.9 MB, LESS THAN 84.28% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION EQUAL SUBSET SUM. *
 ************************************************************************************************************/

// [JS] 0/1 Knapsack DP
//https://leetcode.com/problems/partition-equal-subset-sum/submissions/

var canPartition = function (nums) {

    let sum = 0;
    for (let num of nums) sum += num; // calculate the total sum

    if (sum % 2 != 0) return false; // we should only get integer value

    sum /= 2 // check we can reach to the half value of sum

    let dp = new Array(sum + 1).fill(false); // we can reach 0 always
    dp[0] = true;

    for (let num of nums) {
        //if we start from sum=1, we will override the previous state values ie dp[i-num] 
        for (let i = sum; i > 0; i--) {
            if (num <= i) {
                dp[i] = dp[i] || dp[i - num]; // not pick || pick
            }
        }
    }
    return dp[sum];
};

export default canPartition;