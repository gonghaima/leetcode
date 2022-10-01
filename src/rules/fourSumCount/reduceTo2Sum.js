/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

/*****************************************************************************************
 * Runtime: 338 ms, faster than 68.55% of JavaScript online submissions for 4Sum II.     *
 * Memory Usage: 46.3 MB, less than 65.41% of JavaScript online submissions for 4Sum II. *
 *****************************************************************************************/

// https://leetcode.com/problems/4sum-ii/discuss/260070/Javascript-solution-%3A0

// reducde to 2sum question

var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const sumTwoList = function(x, y) {
    let len = x.length;
    let result = new Map();
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        let c = x[i] + y[j];
        result.set(c, result.get(c) + 1 || 1);
      }
    }
    return result;
  };

  let sum1 = sumTwoList(nums1, nums2);
  let sum2 = sumTwoList(nums3, nums4);
  let total = 0;

  sum1.forEach((value, key) => {
    let offset = 0 - key;
    if (sum2.has(offset)) {
      total += sum2.get(offset) * sum1.get(key);
    }
  });
  return total;
};

export default fourSumCount;
