/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

/************************************************************************************************************************************************************
 * Runtime: 5040 ms, faster than 8.00% of JavaScript online submissions for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit.     *
 * Memory Usage: 47.8 MB, less than 64.00% of JavaScript online submissions for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit. *
 ************************************************************************************************************************************************************/

// my solution following the hint

/****************************************************************************************************************************************************************************************************************************************************************************************************************
 * hint1. Use a sliding window approach keeping the maximum and minimum value using a data structure like a multiset from STL in C++.                                                                                                                                                                           *
 *                                                                                                                                                                                                                                                                                                              *
 * hint2. More specifically, use the two pointer technique,
 * moving the right pointer as far as possible to the right until the subarray is not valid (maxValue - minValue > limit),
 * then moving the left pointer until the subarray is valid again (maxValue - minValue <= limit). Keep repeating this process. *
 ****************************************************************************************************************************************************************************************************************************************************************************************************************/

var longestSubarray = function (nums, limit) {
    let ret = 0;
    let left = 0;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let currentNums = [];
    currentNums.push[nums[0]];
    for (let right = 0; right < nums.length; ++right) {
        if (nums[right] < min) min = nums[right];
        if (nums[right] > max) max = nums[right];
        currentNums.push(nums[right]);
        if (max - min <= limit) {
            ret = ret > currentNums.length ? ret : currentNums.length;
        } else {
            while (left < right && (max - min > limit || min - max > limit)) {
                left++;
                const leftVal = currentNums.shift();
                if (min === leftVal || max === leftVal) {
                    min = Number.MAX_VALUE;
                    max = Number.MIN_VALUE;
                    for (let i = 0; i < currentNums.length; ++i) {
                        currentNums[i] < min && (min = currentNums[i]);
                        currentNums[i] > max && (max = currentNums[i]);
                    }
                }
            }
            ret = ret > currentNums.length ? ret : currentNums.length;
        }
    };
    ret = ret > currentNums.length ? ret : currentNums.length;
    return ret;
}
export default longestSubarray;