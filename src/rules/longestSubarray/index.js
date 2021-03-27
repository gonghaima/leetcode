/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

/**********************************************************************************************************************************************************
 * Runtime: 124 ms, faster than 67.97% of JavaScript online submissions for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit.   *
 * Memory Usage: 46 MB, less than 96.09% of JavaScript online submissions for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit. *
 **********************************************************************************************************************************************************/

/*************************************************************************************************
 * Ok, simply start at element 1, moving and checking each new index.                            *
 * If the new number is between the current min/max, simply increment the current count,         *
 * else update the min and max and check previous numbers until one falls outside the new range. *
 *************************************************************************************************/

var longestSubarray = function (nums, limit) {
    let longest = 1;
    let min = nums[0];
    let max = nums[0];
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = min = nums[i];
            min = max - limit;
            k = 1;
            while ((i - k > -1) && nums[i - k] >= min && nums[i - k] <= max) { k++; }
        } else if (nums[i] < min) {
            min = nums[i];
            max = min + limit;
            k = 1;
            while ((i - k > -1) && nums[i - k] <= max && nums[i - k] >= min) { k++; }
        } else {
            k++;
        }
        longest = Math.max(k, longest);
    }
    return longest;
}

export default longestSubarray;