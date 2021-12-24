/**
 * @param {number[]} stoneValue
 * @return {number}
 */

// https://leetcode.com/problems/stone-game-v/discuss/911676/Java-O(n3)-O(n2-log-n)-and-O(n2)-with-explanation

/**********************************************************************************************
 *  Runtime: 212 ms, faster than 100.00% of JavaScript online submissions for Stone Game V.   *
 * Memory Usage: 63.2 MB, less than 16.67% of JavaScript online submissions for Stone Game V. *
 **********************************************************************************************/

// O(n^2 log n)
var stoneGameV = function(stoneValue) {
  const search = (pre, l, r) => {
    let sum = pre[r + 1] - pre[l],
      L = l;
    while (l < r) {
      let m = l + ((r - l) >> 1);
      if ((pre[m + 1] - pre[L]) << 1 >= sum) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return l;
  };

  let n = stoneValue.length;
  let pre = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    pre[i] = pre[i - 1] + stoneValue[i - 1];
  }
  let dp = new Array(n).fill(null).map((_) => new Array(n).fill(0)),
    left = new Array(n).fill(null).map((_) => new Array(n).fill(0)),
    right = new Array(n).fill(null).map((_) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    left[i][i] = right[i][i] = stoneValue[i];
  }
  for (let l = 1; l < n; l++) {
    for (let i = 0; i < n - l; i++) {
      let j = i + l,
        k = search(pre, i, j);
      let sum = pre[j + 1] - pre[i],
        leftHalf = pre[k + 1] - pre[i];
      if (leftHalf << 1 == sum) {
        // equal parts
        dp[i][j] = Math.max(left[i][k], right[k + 1][j]);
      } else {
        // left half > right half
        dp[i][j] = Math.max(
          k == i ? 0 : left[i][k - 1],
          k == j ? 0 : right[k + 1][j]
        );
      }
      left[i][j] = Math.max(left[i][j - 1], sum + dp[i][j]);
      right[i][j] = Math.max(right[i + 1][j], sum + dp[i][j]);
    }
  }
  return dp[0][n - 1];
};

export default stoneGameV;
