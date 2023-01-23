/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// dp

var isMatch = function(s, p){
  let dp = []
    for (let i = 0; i < s.length + 1; i++) {
        let arr = new Array(p.length + 1).fill(false)
        dp.push(arr)
    }
    dp[0][0] = true
    for (let i = 1; i < p.length + 1; i++) {
        if(p[i - 1] != '*') break
        else dp[0][i] = true
    }
    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 1; j < p.length + 1; j++) {
            if (p[j - 1] == s[i - 1] || p[j - 1] == "?") {dp[i][j] = dp[i-1][j-1]}
            else if (p[j - 1] == "*") {dp[i][j] = dp[i-1][j] || dp[i][j-1]}
        }
    }
    return dp[s.length][p.length]
}

export default isMatch;
