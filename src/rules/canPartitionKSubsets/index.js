/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/******************************************************************************************************************
 *   RUNTIME: 84 MS, FASTER THAN 70.53% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION TO K EQUAL SUM SUBSETS.    *
 * MEMORY USAGE: 39.7 MB, LESS THAN 27.89% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION TO K EQUAL SUM SUBSETS. *
 ******************************************************************************************************************/

// with enhancement
/******************************************************************************************************************
 *   RUNTIME: 68 MS, FASTER THAN 99.47% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION TO K EQUAL SUM SUBSETS.    *
 * MEMORY USAGE: 39.7 MB, LESS THAN 27.89% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PARTITION TO K EQUAL SUM SUBSETS. *
 ******************************************************************************************************************/

// backtracking

// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/discuss/608396/Intuitive-JavaScript-Solution-with-Backgracking

var canPartitionKSubsets = function (nums, k) {
    const total = nums.reduce((sum, num) => sum + num, 0);
    // return false right away when there's no equal sum among k subsets
    if (total % k !== 0) {
        return false;
    };

    const target = total / k;
    const visited = new Array(nums.length).fill(false);

    const canPartition = (start, numberOfSubsets, currentSum) => {
        // base case
        if (numberOfSubsets === 1) {
            return true;
        }
        // when a subset is found, we launch another search to find the 
        // remaining subsets from the unvisited elements. 
        if (currentSum > target) return false; // enhancement
        if (currentSum === target) {
            return canPartition(0, numberOfSubsets - 1, 0);
        }
        for (let i = start; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                // launch a search to find other elements that will sum up to 
                // the target with the current element.
                if (canPartition(i + 1, numberOfSubsets, currentSum + nums[i])) {
                    return true;
                }
                // reset to enable backtracking
                visited[i] = false;
            }
        }
        return false;
    };

    return canPartition(0, k, 0);
};

export default canPartitionKSubsets;