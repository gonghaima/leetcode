/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

/************************************************************************************************************************************************************
 * Runtime: 88 ms, faster than 100.00% of JavaScript online submissions for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit.     *
 * Memory Usage: 49.3 MB, less than 57.46% of JavaScript online submissions for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit. *
 ************************************************************************************************************************************************************/


//https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/discuss/628252/JavaScript-Easy-to-understand-optimize-from-6564ms-to-64ms



const longestSubarray = (nums, limit) => {
    const maxQue = [];
    const minQue = [];
    let maxTop = -1, minTop = -1, left = -1;
    let maxBottom = 0, minBottom = 0;
    for (let right = 0; right < nums.length; ++right) {
        const val = nums[right];
        while (maxTop >= maxBottom && val > maxQue[maxTop]) --maxTop;
        while (minTop >= minBottom && val < minQue[minTop]) --minTop;
        maxQue[++maxTop] = val;
        minQue[++minTop] = val;
        if (maxQue[maxBottom] - minQue[minBottom] > limit) {
            ++left;
            maxQue[maxBottom] === nums[left] && ++maxBottom;
            minQue[minBottom] === nums[left] && ++minBottom;
        }
    }
    return nums.length - left - 1;
};
export default longestSubarray;