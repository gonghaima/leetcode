/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  // Think dynamic programming: dp[i] will be the answer for array A[0], ..., A[i-1].
  // For j = 1 .. k that keeps everything in bounds, dp[i] is the maximum of dp[i-j] + max(A[i-1], ..., A[i-j]) * j .
  const dp = new Array(arr.length).fill(null);
  debugger;
  dp[0] = arr[0];
  debugger;
  let fMax = Number.MIN_VALUE;
  for (let i = 0; i < k; i++) {
    fMax = Math.max(fMax, dp[i]);
  };

  const initialVal = fMax * k;
  for (let i = 0; i < k; i++) {
    dp[i] = initialVal;
  };
  debugger;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= k; j++) {
      let tmp = [];
      for (let x = i - 1; x <= i - j; x++) {
        tmp.push(arr[x])
      }
      dp[i] = dp[i - j] + Math.max(...tmp);
    }
  };
  console.log(dp);
  return dp[arr.length - 1];
};

export default maxSumAfterPartitioning;