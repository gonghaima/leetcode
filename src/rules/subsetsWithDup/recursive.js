/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/********************************************************************************************
 *   Runtime: 80 ms, faster than 72.28% of JavaScript online submissions for Subsets II.    *
 * Memory Usage: 42.6 MB, less than 14.67% of JavaScript online submissions for Subsets II. *
 ********************************************************************************************/

// idea from the subsets solution - recursive

var subsetsWithDup = function (nums) {
    let res = [];
    const visited = new Set();
    const helper = (nums, i, arr, visited) => {
        if (i === nums.length) {
            const newItem = arr.sort();
            const newItemIndex = newItem.toString();
            if (!visited.has(newItemIndex)) {
                res.push(newItem);
                visited.add(newItemIndex);
            }
            return;
        }
        helper(nums, i + 1, arr, visited); // not take
        helper(nums, i + 1, arr.concat(nums[i]), visited); // take
    };
    helper(nums, 0, [], visited);
    return res;
};

export default subsetsWithDup;