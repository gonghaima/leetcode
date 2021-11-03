/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */

/**Top Down DP. 
For each step arr[i], check arr[j] on its left and right, until it meet the bound or meet the bigger step. 
*/

var maxJumps = function (arr, d) {
  const n = arr.length;
  const res = Array(n).fill(0);
  const dp = i => {
    if (res[i]) return res[i];
    res[i] = 1;
    for (const di of [-1, 1]) {
      for (const j of [i + di, i + d * i + di, di]) {
        if (!(0 <= j < n && arr[j] < arr[i])) break;
        res[i] = Math.max(res[i], dp(j) + 1);
      }
    };
    return res[i];
  };

  let curMax = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    curMax = Math.max(curMax, dp(i));
  };
  return curMax;
};

export default maxJumps;