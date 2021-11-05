/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */

//https://leetcode.com/problems/jump-game-v/submissions/

/*********************************************************************************************
 *   Runtime: 100 ms, faster than 50.00% of JavaScript online submissions for Jump Game V.   *
 * Memory Usage: 44.5 MB, less than 25.00% of JavaScript online submissions for Jump Game V. *
 *********************************************************************************************/

var maxJumps = function (arr, d) {
  const LEN = arr.length;
  const sortedHeights = arr.map((val, idx) => [val, idx]).sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  const steps = new Uint16Array(LEN);
  let ret = 0;
  for (const [height, cur] of sortedHeights) {
    let max = 0;
    for (let i = cur + 1; i <= cur + d && i < LEN && arr[i] < height; ++i) {
      steps[i] > max && (max = steps[i]);
    }
    for (let i = cur - 1; i >= cur - d && i >= 0 && arr[i] < height; --i) {
      steps[i] > max && (max = steps[i]);
    }
    steps[cur] = max + 1;
    steps[cur] > ret && (ret = steps[cur]);
  }
  return ret;
}

export default maxJumps;