/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
  let max = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      const options = [nums[i], nums[i] * prevMax, nums[i] * prevMin];
      prevMax = Math.max(...options);
      prevMin = Math.min(...options);
      
      max = Math.max(max, prevMax);
  }
  
  return max;
};

export default maxProduct;
