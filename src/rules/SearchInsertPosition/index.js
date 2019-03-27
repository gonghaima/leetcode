export const searchInsert = (nums, target) => {
  let result = null;
  nums.map((num, i) => {
    if (num === target) {
      result = i;
      return;
    }
    if (num > target && result === null) {
      result = i - 1;
      return;
    }
  });
  return result;
};
