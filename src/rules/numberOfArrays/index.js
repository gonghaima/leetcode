/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// https://leetcode.com/problems/restore-the-array/discuss/585887/Javascript-Bottom-up-O(N)-time-and-O(N)-space

/***************************************************************************************************
 *   Runtime: 292 ms, faster than 50.00% of JavaScript online submissions for Restore The Array.   *
 * Memory Usage: 53.9 MB, less than 50.00% of JavaScript online submissions for Restore The Array. *
 ***************************************************************************************************/

// dp - bottom up

var numberOfArrays = function(s, k) {
  var n = s.length;
  var dp = new Array(n + 1).fill(0); //contruct dp table initally filled with 0
  var char = s.split(''); //split string to form character array
  dp[n] = 1; // base case
  var mod = 1000000007;
  for (var i = n - 1; i >= 0; i--) {
    if (char[i] == '0') {
      //skip trailing zeros
      continue;
    }
    var str = ''; //build new string when a non zero character is encountered
    str = str + char[i]; // append that character
    var j = i + 1;
    //check for new string being less than k
    while (j <= n && parseInt(str) <= k) {
      //Append the next digit str and check str is less(or equal) or greater than k.
      //if str>k break the loop
      //repeat the same process for other digits on the left
      //for every char[j] append it to str, add dp[j+1] to dp[i].
      //Return dp[0]%(mod).
      dp[i] += dp[j];
      dp[i] %= mod;
      if (j < n) {
        str = str + char[j];
      }
      j++;
    }
  }
  return parseInt(dp[0]);
};
export default numberOfArrays;
