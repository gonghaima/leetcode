/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var zeroStartIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[zeroStartIdx] = nums[i];
      zeroStartIdx++;
    }
  }
  return zeroStartIdx;
};

export default removeElement;
