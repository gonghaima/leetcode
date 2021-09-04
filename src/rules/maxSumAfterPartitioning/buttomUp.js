/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// https://leetcode.com/problems/partition-array-for-maximum-sum/discuss/290863/JavaC%2B%2BPython-DP-O(K)-Space


//  Time O(NK)
//  Space O(N)

var maxSumAfterPartitioning = function (arr, k) {
  const dp = new Array(arr.length + 1).fill(null);
        for(let i = 1; i <= arr.length; i++){
            let dpMax = Number.MIN_VALUE;
            let max= Number.MIN_VALUE;
            for(let j = 0; j < k; j++){
                if(i - j - 1 >= 0){
                    max = Math.max(max, arr[i-j-1]);
                    dpMax = Math.max(dpMax, dp[i-j-1] + (j + 1)*max );
                }
                else{
                    break;
                }
            }
            dp[i] = dpMax;
        }
        return dp[arr.length];
};

export default maxSumAfterPartitioning;