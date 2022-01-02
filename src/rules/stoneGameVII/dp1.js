/**
 * @param {number[]} stones
 * @return {number}
 */

// https://leetcode.com/problems/stone-game-vii/discuss/1266234/javascript-bottom-up-%2B-top-down-dp-100

 const initialize2DArrayNew = (n, m) => {
  let data = [];
  for (let i = 0; i < n; i++) {
      let tmp = Array(m).fill(0);
      data.push(tmp);
  }
  return data;
};

const preSum = (a, n) => {
  let pre = [0];
  for (let i = 0; i < n; i++) {
      pre.push(pre[i] + a[i]);
  }
  return pre;
};

 const stoneGameVII = (a) => {
  let n = a.length;
  let dp = initialize2DArrayNew(n, n);
  let pre = preSum(a, n);
  for (let i = n - 1; ~i; i--) {
      for (let j = i; j < n; j++) {
          if (i == j) {
              dp[i][j] = 0;
          } else {
              let L = pre[j + 1] - pre[i + 1] - dp[i + 1][j];
              let R = pre[j] - pre[i] - dp[i][j - 1];
              dp[i][j] = Math.max(L, R);
          }
      }
  }
  return dp[0][n - 1];
};

export default stoneGameVII;
