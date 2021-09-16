/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 
 */
var maxSumDivThree = function (nums) {
  let maxSum = Number.MIN_VALUE;
  const sortedNum = nums.sort((a, b) => a - b);
  let cache = {};
  for (let r = 0; r < nums.length; r++) {
    for (let l = 0; l < r; l++) {
      let currentMax;
      if (cache[l]) {
        currentMax = cache[l];
      } else {
        let total = 0;
        for (let j = l; j < l; j++) {
          total += nums[j];
          if (total % 3) currentMax = Math.max(currentMax, total);
        }
      };
      maxSum = Math.max(maxSum, currentMax);
    };
  };
  return maxSum;
};

export default maxSumDivThree;
