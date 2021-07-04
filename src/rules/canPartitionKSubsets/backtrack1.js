/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/******************************************************************************************************************
 *   RUNTIME: 80 MS, FASTER THAN 80.53% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION TO K EQUAL SUM SUBSETS.    *
 * MEMORY USAGE: 39.4 MB, LESS THAN 36.32% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION TO K EQUAL SUM SUBSETS. *
 ******************************************************************************************************************/


// backtracking
// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/discuss/989547/Intuitive-explanation-with-JavaScript-implementation-%2B-improvements

const canPartitionKSubsets = function (nums, k) {
    if (k === 0) return false;
    if (k === 1) return true;

    const total = nums.reduce((acc, num) => acc + num, 0);

    // this is the subset sum
    const target = Math.floor(total / k);

    // if not divisible 
    if (total % target !== 0) return false;

    const buckets = Array(k).fill(0);

    // improvement 1
    nums.sort((a, b) => b - a);

    return search(nums, 0, buckets, target);
}

const search = (nums, index, buckets, target) => {
    // if we have placed all numbers, we gucci

    if (index === nums.length) return true;

    const num = nums[index];

    // O(K)
    for (let k = 0; k < buckets.length; k += 1) {
        if (buckets[k] + num <= target) {
            buckets[k] += num;
            // try to place the next number
            if (search(nums, index + 1, buckets, target)) return true;
            // backtrack
            buckets[k] -= num;
        }

        // improvement 2: if this bucket is empty, and we got here, the number doesn't work, the next bucket will be empty too, so don't try the next ones.
        if (buckets[k] === 0) break;
    }

    return false;
};

export default canPartitionKSubsets;