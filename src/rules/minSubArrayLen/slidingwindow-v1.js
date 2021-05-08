/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/***********************************************************************************************************
 * Runtime: 84 ms, faster than 40.38% of JavaScript online submissions for Minimum Size Subarray Sum.      *
 * Memory Usage: 39.2 MB, less than 95.13% of JavaScript online submissions for Minimum Size Subarray Sum. *
 ***********************************************************************************************************/

var minSubArrayLen = function (k, nums) {
    let window_size = Number.MAX_VALUE // defining variables and pointers
    let sum = 0, i, left = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        while (sum >= k) {  
            window_size = Math.min(window_size, i + 1 - left) //updating window size & storing minimum value of windowsize
            sum = sum - nums[left]
            left++;
        }
    }
    return (window_size == Number.MAX_VALUE) ? 0 : window_size
};

export default minSubArrayLen;