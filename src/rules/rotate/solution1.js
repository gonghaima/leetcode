export default (nums, k) => {
  if (k > nums.length) {
    k = k % nums.length;
  }
  if (k === 0) {
    return;
  }
  var splice = nums.splice(-k, k);
  for (i = splice.length - 1; i >= 0; i--) {
    nums.unshift(splice[i]);
  }
};
