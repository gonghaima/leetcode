/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// https://leetcode.com/problems/subsets/discuss/351704/JavaScript-Recursive

/*****************************************************************************************
 *   Runtime: 80 ms, faster than 61.28% of JavaScript online submissions for Subsets.    *
 * Memory Usage: 40.4 MB, less than 96.95% of JavaScript online submissions for Subsets. *
 *****************************************************************************************/

var subsets = function (nums) {
    let res = [];
    const helper = (nums, i, arr) => {
        if (i === nums.length) {
            res.push(arr);
            return;
        }
        helper(nums, i + 1, arr); // not take
        helper(nums, i + 1, arr.concat(nums[i])); // take
    };
    helper(nums, 0, []);
    return res;
};

export default subsets;