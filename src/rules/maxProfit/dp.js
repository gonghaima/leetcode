/**
 compute the gain of each day
 price: [7, 1, 5, 4, 6, 4]
 gain:    [-6, 4,-2, 3,-2]
 result:      [4,-2, 3]
 reduce to LC. 53 Maximum subarray
 */

/**************************************************************************************************************
 *  Runtime: 120 ms, faster than 11.16% of JavaScript online submissions for Best Time to Buy and Sell Stock. *
 * Memory Usage: 54 MB, less than 5.02% of JavaScript online submissions for Best Time to Buy and Sell Stock. *
 **************************************************************************************************************/

const maxProfit = prices => {
  const profits = [];
  for (let i = 0; i < prices.length; i++) {
    if (i === 0) continue;
    profits.push(prices[i] - prices[i - 1]);
  };
  // Kadane's Algorithm - find max subarr sum
  const maxSubArray = function (nums) {
    if (!nums.length) return 0;
    let subArrSum = nums[0], maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      subArrSum = Math.max(nums[i], subArrSum + nums[i])
      maxSum = Math.max(maxSum, subArrSum);
    }
    return maxSum;
  }
  const result = maxSubArray(profits);
  return result > 0 ? result : 0;
};

export default maxProfit;
