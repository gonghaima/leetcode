export default (nums1, m, nums2, n) => {
  nums1.splice(m, nums1.length - m);

  var i = 0;
  var j = 0;

  while (j < nums2.length) {
    if (nums1[i] === undefined || nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    } else {
      i++;
    }
  }
  return nums1;
};
