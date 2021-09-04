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
  // notes: 4Sep21 - not correct thinking. It has to be driven by continuous subarr
  // explained here
  // https://leetcode.com/problems/partition-array-for-maximum-sum/discuss/898397/CAN-ANYONE-PLEASE-EXPLAIN-ME-THE-QUESTION-ITS-WAY-TOO-CONFUSING.
  /**
   * Basically the question wants you to group the array into groups that contain k elements or less.
Each group is worth the maximum value in the group times the length of the group.

Your job is to figure out the best way to group the items in the array.

Here is an example:

arr = [1,15,7,9,2,5,10] ; k = 3

arr = [[1, 15, 7], [9], [2, 5, 10]] 

[1, 15, 7] is worth 15 * 3 = 45 because 15 is the largest element in the group and the length of the group is 3
[9] is worth 9 * 1 = 9
[2, 5, 10] = 10 * 3 = 30

This is the best possible grouping and gives us 84 points which is the answer.  

Another way to group the array is like so [[1, 15], [7, 9, 2], [5, 10]] = 30 + 27 + 20 = 77 points which is not the best option so it is not the answer
   */

  //
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