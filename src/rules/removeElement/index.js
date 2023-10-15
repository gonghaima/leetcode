/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let result = 0;
  nums.map((num) => {
    if (num !== val) result++;
  });
  return result;
};

export default removeElement;
