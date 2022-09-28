/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let tracker = nums1;
  let tmp = [];
  let result = 0;

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    tracker.map((n) => {
      tmp.push(num + n);
    });
  }
  tracker = tmp;
  tmp = [];
 
  for (let i = 0; i < nums3.length; i++) {
    const num = nums3[i];
    tracker.map((n) => {
      tmp.push(num + n);
    });
  }
  tracker = tmp;
  tmp = [];

  for (let i = 0; i < nums4.length; i++) {
    const num = nums4[i];
    tracker.map((n) => {
      if (num + n === 0) result++;
    });
  }

  return result;
};

export default fourSumCount;
