/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const collection = { 0: 1 };
  let total = 0;
  let currentSum = 0;

  nums.forEach((num) => {
    currentSum += num;
    if (collection[currentSum - k]) total += collection[currentSum - k];

    collection[currentSum] = collection[currentSum]
      ? collection[currentSum] + 1
      : 1;
  });

  return total;
};

export default subarraySum;
