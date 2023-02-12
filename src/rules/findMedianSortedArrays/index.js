/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const LEN = nums1.length + nums2.length;
  const IS_ODD = LEN % 2 === 1;
  const PAST_MID = (1 + LEN / 2) | 0;
  const MAX_NUM = 10e5;

  let j = 0,
    k = 0,
    last,
    beforeLast;
  do {
    beforeLast = last;
    last = nums1[j] < (nums2[k] ?? MAX_NUM) ? nums1[j++] : nums2[k++];
  } while (j + k !== PAST_MID);
  return IS_ODD ? last : (last + beforeLast) / 2;
};

export default findMedianSortedArrays;
