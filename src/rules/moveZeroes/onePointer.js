/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// my thoughts:
// maintain one pointer as cdx, initially 0, to indicated filled index
// loop through the array, if current value is not zero, assign array[cdx] = currentValue,  cdx++

// for cdx to array.length - 1,  set array[cdx] = 0

var moveZeroes = function(nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i];
    }
  }
  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

export default moveZeroes;
