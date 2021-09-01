/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {


  // find number of top items (division result if arr.length%k== 0, division result + 1 if %!==0 )
  // topItems []

  // let curLength = 0, result = 0;
  // while(newArr.length<arr.length){
  // let multipleFactor = (arr.length-newArr.length)>k?k:(arr.length-newArr.length));
  // result +=topItems.unshift()*multipleFactor;
  //}
  return result;

  //similar as above
  // 1 15  7  
  // 15 7  9
  // 15 7  9   10 

  // topNumberOfItems =  (arr.length % k ==0)?arr.length/k:Math.ceil(arr.length/k);

  // two pointers
  // find out the best subarr
  // calc result

  // dp
  // Think dynamic programming: dp[i] will be the answer for array A[0], ..., A[i-1].
  // For j = 1 .. k that keeps everything in bounds, dp[i] is the maximum of dp[i-j] + max(A[i-1], ..., A[i-j]) * j .

};

export default maxSumAfterPartitioning;