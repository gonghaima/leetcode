/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*****************************************************************************************
 *   Runtime: 84 ms, faster than 44.26% of JavaScript online submissions for Subsets.    *
 * Memory Usage: 41.1 MB, less than 33.51% of JavaScript online submissions for Subsets. *
 *****************************************************************************************/

// https://leetcode.com/problems/subsets/discuss/353403/One-line-JavaScript-solution-52-ms-faster-than-95.39

var subsets = function (nums) {
    return nums.reduce((sets, num) => sets.forEach(set => sets.push([...set, num])) || sets, [[]]);
};

// same as 

// var subsets = function (nums) {
//     let sets=[[]];
//     for (const num of nums) {
//         sets.forEach(set => {
//             sets.push([...set, num])
//         });
//     }
//     return sets;
// };

export default subsets;