/**
 * @param {number[]} stones
 * @return {number}
 */

/************************************************************************************************
 * Runtime: 352 ms, faster than 68.75% of JavaScript online submissions for Stone Game VII.     *
 * Memory Usage: 69.4 MB, less than 28.13% of JavaScript online submissions for Stone Game VII. *
 ************************************************************************************************/

// https://leetcode.com/problems/stone-game-vii/discuss/1266234/javascript-bottom-up-%2B-top-down-dp-100

// (top-down)

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
  for (let len = 1; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      let j = i + len - 1;
      if (len == 1) {
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
