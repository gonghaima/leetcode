/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let res = -1;
  const compute = (nums, startIndex) => {
    let len = nums.length;
    let mid = len % 2 == 0 ? len / 2 : (len - 1) / 2;
    if (!nums.length) return;
    if (nums[mid] == target) {
      res = startIndex + mid;
    }
    compute(nums.slice(0, mid), startIndex) ||
      compute(nums.slice(mid + 1), mid + startIndex + 1);
  };
  compute(nums, 0);
  return res;
};

export default search;
