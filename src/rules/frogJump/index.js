// export default stones => {
//   let canC = true;
//   let currentCapacity = 1;
//   for (let i = 0; i < stones.length && canC; i++) {
//     const requiredCapacity = stones[i + 1] - stones[i];
//     const l = currentCapacity - 1 < 0 ? 0 : currentCapacity - 1;
//     const c = currentCapacity;
//     const h = currentCapacity + 1;
//     if (
//       requiredCapacity === l ||
//       requiredCapacity === c ||
//       requiredCapacity === h
//     ) {
//       currentCapacity = requiredCapacity;
//     } else {
//       canC = false;
//     }
//   }
//   return canC;

//   // declare flags - complete(false)  - options-array of index []   -end(boolean)

//   //
// };

/** Detailed explaination */
// https://leetcode.com/problems/frog-jump/discuss/193816/Concise-and-fast-DP-solution-using-2D-array-instead-of-HashMap-with-text-and-video-explanation.
export default stones => {
  const N = stones.length;
  const dp = new Array(N).fill(0).map(() => new Array(N + 1).fill(0));
  dp[0][1] = true;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      const diff = stones[i] - stones[j];
      if (diff < 0 || diff > N || !dp[j][diff]) continue;
      dp[i][diff] = true;
      if (diff - 1 >= 0) dp[i][diff - 1] = true;
      if (diff + 1 <= N) dp[i][diff + 1] = true;
      if (i === N - 1) return true;
    }
  }
  return false;
};
