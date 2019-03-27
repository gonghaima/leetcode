export const searchInsert = (nums, target) => {
  let result = null;
  nums.map((num, i) => {
    if (num === target) {
      result = i;
      return;
    }
    if (num > target && result === null) {
      result = i;
      return;
    }
  });
  if (result === null) result = nums.length;
  return result;
};
