/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// https://leetcode.com/problems/partition-array-for-maximum-sum/discuss/842464/Recursion-%2B-Memoization-Approach-with-FULL-explanation

// Runtime: 104 ms, faster than 42.11% of JavaScript online submissions for Partition Array for Maximum Sum.
// Memory Usage: 41.2 MB, less than 21.05% of JavaScript online submissions for Partition Array for Maximum Sum.

//  Time O(NK)
//  Space O(N)

var maxSumAfterPartitioning = function (arr, k) {
  const helper = (arr, k, idx, cache) => {
    if (idx == arr.length) {
      return 0;

    } else if (cache.has(idx)) {
      return cache.get(idx);
    }

    let maxSoFar = 0,
      maxSumSoFar = 0;

    for (let i = idx; i < idx + k && i < arr.length; i++) {
      maxSoFar = Math.max(maxSoFar, arr[i]);
      maxSumSoFar = Math.max(maxSumSoFar, maxSoFar * (i - idx + 1) + helper(arr, k, i + 1, cache));
    }

    cache.set(idx, maxSumSoFar);
    return maxSumSoFar;
  };

  const cache = new Map();

  return helper(arr, k, 0, cache);

};

export default maxSumAfterPartitioning;