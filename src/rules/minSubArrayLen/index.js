/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/***********************************************************************************************************
 * Runtime: 84 ms, faster than 40.81% of JavaScript online submissions for Minimum Size Subarray Sum.      *
 * Memory Usage: 39.2 MB, less than 89.64% of JavaScript online submissions for Minimum Size Subarray Sum. *
 ***********************************************************************************************************/

var minSubArrayLen = function (target, nums) {
    let left = 0, minSize = Infinity, total = 0;
    for (let right = 0; right < nums.length; right++) {
        const currentVal = nums[right];
        total += currentVal;
        if (total < target) {
            continue;
        } else {
            while (total >= target) {
                minSize = Math.min(minSize, right - left + 1);
                total -= nums[left];
                left++;
            }
        }
    }
    return minSize === Infinity ? 0 : minSize;
};

export default minSubArrayLen;