/**
 * @param {number[]} stoneValue
 * @return {number}
 */

// https://leetcode.com/problems/stone-game-v/discuss/911676/Java-O(n3)-O(n2-log-n)-and-O(n2)-with-explanation

// O(n^3)

/**********************************************************************************************
 *   Runtime: 756 ms, faster than 33.33% of JavaScript online submissions for Stone Game V.   *
 * Memory Usage: 47.4 MB, less than 16.67% of JavaScript online submissions for Stone Game V. *
 **********************************************************************************************/

/******************************************************************************************************************
 *                                                 Basic approach                                                 *
 *                              dp[i][j]: max score you can obtain from stones[i..j]                              *
 *                                      sum[i][j]: sum of stoneValues[i..j]                                       *
 *                                 Try all possible k i.e. k goes from i to j-1:                                  *
 *                 we have 2 choices for score: sum[i][k] + dp[i][k] and sum[k+1][j] + dp[k+1][j]                 *
 *        but we can only pick the side where sum is smaller or either of them when both sides are equal.         *
 *                Take the maximum score from all of these choices and we have computed dp[i][j].                 *
 * In all my codes, I am building the dp table bottom-up i.e. dp[0][1], dp[1][2] gets calculated before dp[0][2]. *
 ******************************************************************************************************************/

var stoneGameV = function(stoneValue) {
  let n = stoneValue.length;
  const pre = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    pre[i] = pre[i - 1] + stoneValue[i - 1];
  }
  const dp = [...Array(n).fill(null)].map((_) => new Array(n).fill(0));
  for (let l = 1; l < n; l++) {
    for (let i = 0; i < n - l; i++) {
      let j = i + l,
        res = 0;
      for (let k = i; k < j; k++) {
        let left = pre[k + 1] - pre[i],
          right = pre[j + 1] - pre[k + 1];
        if (left < right) {
          res = Math.max(res, left + dp[i][k]);
        } else if (left > right) {
          res = Math.max(res, right + dp[k + 1][j]);
        } else {
          res = Math.max(res, left + dp[i][k]);
          res = Math.max(res, right + dp[k + 1][j]);
        }
      }
      dp[i][j] = res;
    }
  }
  return dp[0][n - 1];
};

export default stoneGameV;
