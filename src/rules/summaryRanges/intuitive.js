/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

  if (nums.length === 0) return [];
  if (nums.length === 1) return [`${nums[0]}`];
  let result = [];
  let start = nums[0];
  let end = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      end += 1;
    } else {
      if (start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }
      start = nums[i];
      end = nums[i];
    }
  }
  if (start === end) {
    result.push(`${start}`);
  } else {
    result.push(`${start}->${end}`);
  }
  return result;

};

export default summaryRanges;
