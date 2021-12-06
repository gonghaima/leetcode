/**
 * @param {number[]} stoneValue
 * @return {string}
 */

// https://leetcode.com/problems/stone-game-iii/discuss/1235671/JavaScript-DP-solution

/************************************************************************************************
 *   Runtime: 140 ms, faster than 91.67% of JavaScript online submissions for Stone Game III.   *
 * Memory Usage: 51.5 MB, less than 75.00% of JavaScript online submissions for Stone Game III. *
 ************************************************************************************************/

var stoneGameIII = function(stoneValue) {
  // dp[i]: diff score of alice - bob at index i
  var n = stoneValue.length;
  var dp = new Array(n + 1).fill(-Infinity);
  dp[n] = 0; // the last one init value is 0 : means Tie, difference is 0 of Alic & bob

  for (var i = n - 1; i >= 0; i--) {
    var sum = 0;
    // take 1
    if (i < n) {
      sum += stoneValue[i];
      dp[i] = Math.max(dp[i], sum - dp[i + 1]);
    }
    // take 2
    if (i + 1 < n) {
      sum += stoneValue[i + 1];
      dp[i] = Math.max(dp[i], sum - dp[i + 2]);
    }
    // take 3
    if (i + 2 < n) {
      sum += stoneValue[i + 2];
      dp[i] = Math.max(dp[i], sum - dp[i + 3]);
    }
  }
  if (dp[0] > 0) {
    return 'Alice';
  } else if (dp[0] < 0) {
    return 'Bob';
  } else {
    return 'Tie';
  }
};

export default stoneGameIII;
