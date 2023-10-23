/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesII = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    let secPrev = nums[i - 2];
    if (secPrev === nums[i]) nums.splice(i, 1);
  }
  return nums.length;
};

export default removeDuplicatesII;
