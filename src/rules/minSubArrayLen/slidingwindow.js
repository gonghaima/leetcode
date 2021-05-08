/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/***********************************************************************************************************
 * Runtime: 76 ms, faster than 88.61% of JavaScript online submissions for Minimum Size Subarray Sum.      *
 * Memory Usage: 39.7 MB, less than 27.60% of JavaScript online submissions for Minimum Size Subarray Sum. *
 ***********************************************************************************************************/

var minSubArrayLen = function (target, nums) {
    let minLength = Number.MAX_VALUE;

    let left = 0, right = 0;
    let slidingSum = 0;
    let n = nums.length;

    while (right < n) {
        if (slidingSum + nums[right] < target) {
            slidingSum += nums[right];
            right += 1;
        } else {
            minLength = Math.min(minLength, right - left + 1);
            slidingSum -= nums[left];
            left += 1;
        }
    }

    return minLength == Number.MAX_VALUE ? 0 : minLength;
};

export default minSubArrayLen;