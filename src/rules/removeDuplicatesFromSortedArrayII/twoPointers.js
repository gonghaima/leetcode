/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesII = function(nums) {
  let j = 0;
  let i = 0;

  for (; i < nums.length; i += 1) {
    if (nums[i] !== nums[i + 2]) {
      nums[j] = nums[i];
      j += 1;
    }
  }

  return j;
};

export default removeDuplicatesII;
