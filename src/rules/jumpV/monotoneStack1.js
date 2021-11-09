/*********************************************************************************************
 *   Runtime: 92 ms, faster than 100.00% of JavaScript online submissions for Jump Game V.   *
 * Memory Usage: 43.3 MB, less than 58.82% of JavaScript online submissions for Jump Game V. *
 *********************************************************************************************/

// https://leetcode.com/problems/jump-game-v/submissions/

/***********************************************************************************************************************
 * We can change a strategy, not based on the idea of finding the maximum value of the next possible point within its range from each point. *
 *        We could just use a monotone stack to solve it. But we should be careful about the same height value.        *
 ***********************************************************************************************************************/

const maxJumps = (arr, d) => {
  arr.push(10 ** 5 + 1);
  const LEN = arr.length;
  const dp = new Uint16Array(LEN).fill(1);
  for (let i = 1, top = 0, stack = new Uint16Array(LEN); i < LEN; ++i) {
    while (top >= 0 && arr[stack[top]] < arr[i]) {
      let prevNoneSame = top;
      const height = arr[stack[top]];
      while (arr[stack[prevNoneSame]] === height) --prevNoneSame;
      while (arr[stack[top]] === height) {
        const idx = stack[top--];
        i - idx <= d && dp[idx] + 1 > dp[i] && (dp[i] = dp[idx] + 1);
        prevNoneSame >= 0 &&
          idx - stack[prevNoneSame] <= d &&
          dp[idx] + 1 > dp[stack[prevNoneSame]] &&
          (dp[stack[prevNoneSame]] = dp[idx] + 1);
      }
    }
    stack[++top] = i;
  }
  dp[LEN - 1] = 0;
  return Math.max(...dp);
};

export default maxJumps;
