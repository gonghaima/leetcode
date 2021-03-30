/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

/************************************************************************************************************************************************************
 * Runtime: 972 ms, faster than 33.08% of JavaScript online submissions for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit.     *
 * Memory Usage: 49.8 MB, less than 46.15% of JavaScript online submissions for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit. *
 ************************************************************************************************************************************************************/



const longestSubarray = (nums, limit) => {
    const maxQue = [];
    const minQue = [];
    let maxTop = -1, minTop = -1, max = 0;
    for (let left = -1, right = 0; right < nums.length; ++right) {
        const val = nums[right];
        while (maxTop >= 0 && val > maxQue[maxTop]) --maxTop;
        while (minTop >= 0 && val < minQue[minTop]) --minTop;
        maxQue[++maxTop] = val;
        minQue[++minTop] = val;
        if (maxQue[0] - minQue[0] <= limit) {
            right - left > max && (max = right - left);
        } else {
            while (maxQue[0] - minQue[0] > limit) {
                ++left;
                if (maxQue[0] === nums[left]) {
                    maxQue.shift();
                    --maxTop;
                }
                if (minQue[0] === nums[left]) {
                    minQue.shift();
                    --minTop;
                }
            }
        }
    }
    return max;
};
export default longestSubarray;