/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort2 = function(nums) {
  nums.sort((b, a) => b - a);
  let mid = Math.floor(nums.length / 2);
  mid += nums.length % 2 == 0 ? 0 : 1;
  let even = nums.slice(0, mid);
  let odd = nums.slice(mid);
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      nums[i] = even.pop();
    } else {
      nums[i] = odd.pop();
    }
  }
  return nums;
};

export default wiggleSort2;
