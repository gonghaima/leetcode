/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findVar = (nums, curPosition) => {
    const curVal = nums[curPosition];
    let notFound = true;
    for (let i = curPosition + 1; notFound && i < nums.length; i++) {
      if (curVal > nums[i]) {
        notFound = false;
        return nums[i];
      }
    }
    return 0;
  };
  
  var countSmaller = function(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      result.push(findVar(nums, i));
    }
    return result;
  };
  
  export default countSmaller;
  