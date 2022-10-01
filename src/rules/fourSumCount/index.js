/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

/*****************************************************************************************
 * Runtime: 260 ms, faster than 87.38% of JavaScript online submissions for 4Sum II.     *
 * Memory Usage: 46.4 MB, less than 65.37% of JavaScript online submissions for 4Sum II. *
 *****************************************************************************************/

// https://leetcode.com/problems/4sum-ii/discuss/1742681/C%2B%2BJavaScript-Solution

// similar, reducde to 2sum question

var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let m = new Map(),
    count = 0;

  nums1.forEach((n1) => {
    nums2.forEach((n2) => {
      let sum = n1 + n2;
      m.set(sum, m.get(sum) + 1 || 1);
    });
  });

  nums3.forEach((n3) => {
    nums4.forEach((n4) => {
      let sum = -(n3 + n4);
      count += m.get(sum) ? m.get(sum) : 0;
    });
  });
  return count;
};

export default fourSumCount;
