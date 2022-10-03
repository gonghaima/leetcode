/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

/*****************************************************************************************
 * Runtime: 478 ms, faster than 53.87% of JavaScript online submissions for 4Sum II.     *
 * Memory Usage: 46.6 MB, less than 53.23% of JavaScript online submissions for 4Sum II. *
 *****************************************************************************************/

// https://leetcode.com/problems/4sum-ii/discuss/1460149/JavaScript-kSum-Solution

// kSum solution

var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const addToHash = (i, sum) => {
    // for the 1st half arrays, recursively add count to map
    if (i < pivot) {
      for (const num of list[i]) addToHash(i + 1, sum + num);
    }

    // if sum exist increment count by 1, if NOT set to 1
    else map.set(sum, (map.get(sum) || 0) + 1);
  };

  const complements = (i, sum) => {
    // for the 2nd half array, recursively find complements
    if (i < list.length) {
      for (const num of list[i]) complements(i + 1, sum + num);
    }

    // find complement and add to count
    else if (map.has(-sum)) count += map.get(-sum);
  };

  const list = [nums1, nums2, nums3, nums4];
  const pivot = Math.floor(list.length / 2); // pivot to divide list in half
  const map = new Map();
  let count = 0;

  addToHash(0, 0);
  complements(pivot, 0);

  return count;
};

export default fourSumCount;
