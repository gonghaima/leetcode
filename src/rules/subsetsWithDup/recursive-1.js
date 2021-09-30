/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*******************************************************************************************
 *   Runtime: 72 ms, faster than 94.31% of JavaScript online submissions for Subsets II.   *
 * Memory Usage: 43.5 MB, less than 9.33% of JavaScript online submissions for Subsets II. *
 *******************************************************************************************/

// https://leetcode.com/problems/subsets-ii/discuss/547724/Javascripti-solution-using-Object

var subsetsWithDup = function (nums) {
    const output = [];
    const hashMap = {};

    function combinations(comb, start) {
        let key = comb.sort().toString();
        if (!hashMap[key]) {
            output.push(comb);
            hashMap[key] = 1;
        }
        for (let i = start; i < nums.length; i++) {
            combinations([...comb, nums[i]], i + 1);

        }
    }

    combinations([], 0);
    return output;
};

export default subsetsWithDup;