/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/********************************************************************************************
 *   Runtime: 76 ms, faster than 85.95% of JavaScript online submissions for Subsets II.    *
 * Memory Usage: 41.8 MB, less than 16.54% of JavaScript online submissions for Subsets II. *
 ********************************************************************************************/

// idea from the subsets solution - iterative

var subsetsWithDup = function (nums) {
    let res = [[]];
    let visited = new Set();
    for (let i = 0; i < nums.length; i++) {
        res.forEach(item => {
            const newItem = [...item, nums[i]].sort();
            const newItemIndex = newItem.toString();
            if (!visited.has(newItemIndex)) {
                res.push(newItem);
                visited.add(newItemIndex);
            }
        });
    }
    return res;
};

export default subsetsWithDup;