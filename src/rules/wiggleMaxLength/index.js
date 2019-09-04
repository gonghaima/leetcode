export default nums => {
  if (nums.length < 2) return nums.length;
  var down = 1,
    up = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) up = down + 1;
    else if (nums[i] < nums[i - 1]) down = up + 1;
  }
  return Math.max(down, up);
};
