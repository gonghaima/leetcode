/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/*****************************************************************************************************************
 *  RUNTIME: 124 MS, FASTER THAN 34.36% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION TO K EQUAL SUM SUBSETS.   *
 * MEMORY USAGE: 45.5 MB, LESS THAN 5.64% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION TO K EQUAL SUM SUBSETS. *
 *****************************************************************************************************************/

// backtracking
// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/discuss/1183311/JavaScript-Simple-Backtracking-%2B-Memoization

var canPartitionKSubsets = function (nums, k) {
    const total = nums.reduce((acc, cur) => acc + cur, 0);
    if (total % k != 0) return false;

    const subset = total / k;
    const memo = new Map();

    function partition(idx, sum, count) {
        if (count === k - 1) return true;

        const key = nums.join();
        if (memo.has(key)) return false;

        if (sum === subset) return partition(0, 0, count + 1);
        if (sum > subset) return false;

        for (let i = idx; i < nums.length; i++) {
            if (nums[i] === null) continue;
            const num = nums[i];
            nums[i] = null;
            if (partition(i + 1, sum + num, count)) return true;
            nums[i] = num;
        }
        memo.set(key, false);
        return false;
    }
    return partition(0, 0, 0);
};

export default canPartitionKSubsets;