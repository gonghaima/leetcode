/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// T.C: O(N)
// S.C: O(1)

var nextPermutation = function(nums) {
  let pivot = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      pivot = i - 1;
      break;
    }
  }
  if (pivot === -1) {
    // array is in descending order
    nums.reverse();
    return;
  }
  for (let i = nums.length - 1; i > pivot; i--) {
    if (nums[i] > nums[pivot]) {
      swap(nums, i, pivot);
      break;
    }
  }
  for (let i = pivot + 1, j = nums.length - 1; i < j; i++, j--) {
    swap(nums, i, j);
  }
  return nums;
};

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

export default nextPermutation;
