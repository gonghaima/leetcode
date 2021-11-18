/**
 * @param {number[]} nums
 * @return {number}
 */

/***************************************************************************************************************
 *   Runtime: 84 ms, faster than 88.89% of JavaScript online submissions for Maximum Sum Circular Subarray.    *
 * Memory Usage: 44.6 MB, less than 70.76% of JavaScript online submissions for Maximum Sum Circular Subarray. *
 ***************************************************************************************************************/

// max(the max subarray sum, the total sum - the min subarray sum)

var maxSubarraySumCircular = function(nums) {
  let maxSum, max, minSum, min, total
  maxSum = max = minSum = min= total = nums[0]
  
  for(let i=1;i<nums.length;i++){
    const n = nums[i]
    max = Math.max(n, n+max)
    maxSum = Math.max(max, maxSum)
    min = Math.min(n, n+min)
    minSum = Math.min(min, minSum)
    total += n
  }
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum
};

export default maxSubarraySumCircular;
