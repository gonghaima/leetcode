/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */

// dp
// https://leetcode.com/problems/jump-game-vii/discuss/1224804/JavaC%2B%2BPython-One-Pass-DP

/**
 *
 * 1. It's a bottom-up DP implementation. The boolean value represents whether this position is reachable from start. So the first step is to generate the table. Here the table was pre-labeled True or False, thus '1's are already labeled False.
 * 2. To determine the state of dp[i], one need to check the states in window dp[i-maxJ : i-minJ], because any one of them can reach i if it's labeled True.
 * 3. Then you need to check if there is a True in this window. Notice that this is a sliding window problem, so you don't need to calculate it everytime. You only need to remove the effect from dp[i-maxJ-1] and add the dp[i-minJ]. This is done by these two lines of code pre += dp[i - minJ] and pre -= dp[i - maxJ - 1]
 * 4. The if statements if i >= minJ: and if i > maxJ: are dealing with the initial boundary.
 */

/***********************************************************************************************
 *   Runtime: 104 ms, faster than 52.00% of JavaScript online submissions for Jump Game VII.   *
 * Memory Usage: 47.1 MB, less than 96.00% of JavaScript online submissions for Jump Game VII. *
 ***********************************************************************************************/

var canReach = function(s, minJump, maxJump) {
  let n = s.length,
    pre = 0;
  const dp = new Array(n).fill(false);
  dp[0] = true;
  for (let i = 1; i < n; ++i) {
    if (i >= minJump && dp[i - minJump]) pre++;
    if (i > maxJump && dp[i - maxJump - 1]) pre--;
    dp[i] = pre > 0 && s[i] == '0';
  }
  return dp[n - 1];
};

export default canReach;
