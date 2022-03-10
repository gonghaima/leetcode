/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

// https://leetcode.com/problems/interleaving-string/discuss/1758436/typescriptjavascript-DP-1D-solution

/*****************************************************************************************************
 * Runtime: 105 ms, faster than 58.70% of JavaScript online submissions for Interleaving String.     *
 * Memory Usage: 42.3 MB, less than 74.49% of JavaScript online submissions for Interleaving String. *
 *****************************************************************************************************/

//dp

var isInterleave = function(s1, s2, s3) {
  const s1l = s1.length
  const s2l = s2.length
  const s3l = s3.length
  if (s3l !== s1l + s2l) return false
  
  const dp = []
  for (let i = 0; i <= s1l; i++) {
    for (let j = 0; j <= s2l; j++) {
      const isFirst = i === 0 && j === 0
      const isFirstRow = i === 0
      const isFirstColumn = j === 0
	  
      // prev row current cell
      const curDP = dp[j]
      // current row prev cell
      const prevDP = dp[j - 1]
	  
      const str1Cur = s1[i - 1]
      const str2Cur = s2[j - 1]
      const str3Cur = s3[i + j - 1]
       
      if (isFirst) dp[j] = true
      else if (isFirstRow) dp[j] = prevDP && str2Cur === str3Cur
      else if (isFirstColumn) dp[j] = curDP && str1Cur === str3Cur
      else {
        dp[j] = (curDP && str1Cur === str3Cur
        ||
        prevDP && str2Cur === str3Cur)
      }
    }
  }
  
  return dp[s2l]
};
export default isInterleave;
