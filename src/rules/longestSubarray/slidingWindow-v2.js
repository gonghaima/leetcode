/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

/************************************************************************************************************************************************************
 * Runtime: 92 ms, faster than 98.48% of JavaScript online submissions for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit.      *
 * Memory Usage: 49.5 MB, less than 53.79% of JavaScript online submissions for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit. *
 ************************************************************************************************************************************************************/

//https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/discuss/628252/JavaScript-Easy-to-understand-optimize-from-6564ms-to-64ms

//Actually, we can easily find out that the array in JS is a linear list. 
//We call the shift method to remove the first element, 
//but it's an O(n) operation since all elements after it needs to be moved forward.
// So, we could maintain a pointer 
//which is the index of the bottom of the queue 
//to avoid the shift operation



const longestSubarray = (nums, limit) => {
    const maxQue = [];
    const minQue = [];
    let maxTop = -1, minTop = -1;
    let maxBottom = 0, minBottom = 0;
    let max = 0;
    for (let left = -1, right = 0; right < nums.length; ++right) {
        const val = nums[right];
        while (maxTop >= maxBottom && val > maxQue[maxTop]) --maxTop;
        while (minTop >= minBottom && val < minQue[minTop]) --minTop;
        maxQue[++maxTop] = val;
        minQue[++minTop] = val;
        if (maxQue[maxBottom] - minQue[minBottom] <= limit) {
            right - left > max && (max = right - left);
        } else {
            while (maxQue[maxBottom] - minQue[minBottom] > limit) {
                ++left;
                maxQue[maxBottom] === nums[left] && ++maxBottom;
                minQue[minBottom] === nums[left] && ++minBottom;
            }
        }
    }
    return max;
};
export default longestSubarray;