/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// Levenshtein Distance Algorithm

var isMatch = function(s, p) {
  let dp = Array(s.length+1).fill(null).map(()=>Array(p.length+1).fill(false));
  dp[0][0] = true;

  // initialize first column (string)
  for (let i=1;i<=s.length;i++) {
      dp[i][0] = false;
  }

  // initialize first row (pattern) 
  for (let i=1;i<=p.length;i++) {
      dp[0][i] = dp[0][i-1] && p[i-1] == "*";
  }
  
  for (let i=1;i<=s.length;i++) {
      for (let j=1;j<=p.length;j++) {
          if (p[j-1]=='*') {
              dp[i][j] = dp[i-1][j] || dp[i][j-1]; // look top or left
          } else if (s[i-1] == p[j-1] || p[j-1]=='?') {
              dp[i][j] = dp[i-1][j-1]; // inherit from previous result
          }
      }
  }
  return dp[s.length][p.length]
}

export default isMatch;
