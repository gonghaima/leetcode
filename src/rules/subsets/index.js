/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  Runtime: 72 ms, faster than 91.85% of JavaScript online submissions for Subsets.
//  Memory Usage: 40.7 MB, less than 85.06% of JavaScript online submissions for Subsets.

// https://leetcode.com/problems/subsets/discuss/27281/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)

// backtrack

var subsets = function (nums) {
    const backtrack = (list, tempList, nums, start) => {
        // console.log('list, tempList, start', { list, tempList, start });
        list.push(tempList.slice())
        for (let i = start; i < nums.length; i++) {
            tempList.push(nums[i]);
            backtrack(list, tempList, nums, i + 1);
            tempList.pop();
        }
    };

    const list = [];
    nums.sort((a, b) => a - b);
    backtrack(list, [], nums, 0);
    return list;
};

export default subsets;