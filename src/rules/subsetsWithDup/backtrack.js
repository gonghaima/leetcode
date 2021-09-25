/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/********************************************************************************************
 *   Runtime: 76 ms, faster than 85.95% of JavaScript online submissions for Subsets II.    *
 * Memory Usage: 42.6 MB, less than 14.67% of JavaScript online submissions for Subsets II. *
 ********************************************************************************************/

// idea from the subsets solution - backtrack

var subsetsWithDup = function (nums) {
    const backtrack = (list, tempList, nums, start, visited) => {
        const newItem = tempList.slice().sort();
        const newItemIndex = newItem.toString();
        if (!visited.has(newItemIndex)) {
            list.push(newItem);
            visited.add(newItemIndex);
        }

        for (let i = start; i < nums.length; i++) {
            tempList.push(nums[i]);
            backtrack(list, tempList, nums, i + 1, visited);
            tempList.pop();
        }
    };

    const list = [];
    nums.sort((a, b) => a - b);
    const visited = new Set();

    backtrack(list, [], nums, 0, visited);
    return list;
};

export default subsetsWithDup;