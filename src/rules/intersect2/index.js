/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect2 = function(nums1, nums2) {
  let long = nums1.length > nums2.length ? nums1 : nums2;
  let short = nums1.length > nums2.length ? nums2 : nums1;

  let ans = [];
  for (let i = 0; i < long.length; i++) {
    if (short.indexOf(long[i]) !== -1) {
      ans.push(long[i]);
      short.splice(short.indexOf(long[i]), 1);
    }
  }
  return ans;
};
export default intersect2;
