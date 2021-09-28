/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/********************************************************************************************
 *   Runtime: 84 ms, faster than 53.84% of JavaScript online submissions for Subsets II.    *
 * Memory Usage: 40.8 MB, less than 73.20% of JavaScript online submissions for Subsets II. *
 ********************************************************************************************/

// https://leetcode.com/problems/subsets-ii/discuss/647010/Javascript-backtrack

var subsetsWithDup = function (nums) {
    function findSubset(arr, curr) {
        res.push([...curr])
        for (let i = 0; i < arr.length; i++) {
            if (i == 0 || arr[i] != arr[i - 1]) {
                curr.push(arr[i])
                findSubset(arr.slice(i + 1), curr)
                curr.pop()
            }
        }
    }
    let res = []
    nums.sort((a, b) => { return a - b })
    findSubset(nums, [])
    return res;
};

export default subsetsWithDup;