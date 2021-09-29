/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/********************************************************************************************
 *   Runtime: 76 ms, faster than 86.05% of JavaScript online submissions for Subsets II.    *
 * Memory Usage: 40.9 MB, less than 61.38% of JavaScript online submissions for Subsets II. *
 ********************************************************************************************/

// https://leetcode.com/problems/subsets-ii/discuss/269606/JavaScript-Faster-than-100-Solution-DFS

var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    let searchDFS = (curr = [], start = 0, len = 0) => {
        if (curr.length === len) res.push(curr);
        if (curr.length > len) return;

        for (let i = start; i < nums.length; i++) {
            if (i !== start && nums[i] === nums[i - 1]) continue; // skip the duplicated numbers
            if (nums[i] < curr[curr.length - 1]) continue;  // skip smaller numbers
            searchDFS(curr.concat(nums[i]), i + 1, len + 1);
        }
    }
    searchDFS([], 0, 0);
    return res;
};

export default subsetsWithDup;