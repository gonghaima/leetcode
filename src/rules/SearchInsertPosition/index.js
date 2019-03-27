export const searchInsert = (nums, target) => {
  let result = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result = i;
      break;
    }
    if (nums[i] > target && result === null) {
      result = i;
      break;
    }
  }
  if (result === null) result = nums.length;
  return result;
};
