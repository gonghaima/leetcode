/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
};
export default sortColors;
