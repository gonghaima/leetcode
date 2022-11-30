/**
 * @param {number[]} nums
 * @return {number}
 */

/***********************************************************************************************************
 * Runtime: 427 ms, faster than 14.84% of JavaScript online submissions for Find the Duplicate Number.     *
 * Memory Usage: 57.3 MB, less than 27.70% of JavaScript online submissions for Find the Duplicate Number. *
 ***********************************************************************************************************/

// time O(n logn) space O(1)

// var findDuplicate = function(nums) {
//   return nums.sort().reduce(
//     (acc, item) => {
//       if (!acc.currentItem) return { result: -1, currentItem: item };
//       if (acc.currentItem === item) return { result: item, currentItem: item };
//       if (acc.result === -1) return { result: -1, currentItem: item };
//       return acc;
//     },
//     { result: -1, currentItem: null }
//   ).result;
// };

var findDuplicate = function(nums) {return nums.sort().reduce((r,e)=>r.currentItem?r.currentItem===e?{result:e,currentItem:e}:-1===r.result?{result:-1,currentItem:e}:r:{result:-1,currentItem:e},{result:-1,currentItem:null}).result}

export default findDuplicate;
