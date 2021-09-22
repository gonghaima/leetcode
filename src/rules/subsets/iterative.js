/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*****************************************************************************************
 *   Runtime: 72 ms, faster than 91.85% of JavaScript online submissions for Subsets.    *
 * Memory Usage: 40.5 MB, less than 96.97% of JavaScript online submissions for Subsets. *
 *****************************************************************************************/

// https://leetcode.com/problems/subsets/discuss/473975/Learning-and-summarizing-(3-solutions)

var subsets = function (nums) {
    let res = [[]];
    for (let i = 0; i < nums.length; i++) {
        res.forEach(item => {
            res.push([...item, nums[i]])
        });
    }
    return res;
};

export default subsets;