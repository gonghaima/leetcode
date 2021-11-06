/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */

//https://leetcode.com/problems/jump-game-v/submissions/

/*********************************************************************************************
 *   Runtime: 100 ms, faster than 50.00% of JavaScript online submissions for Jump Game V.   *
 * Memory Usage: 41.8 MB, less than 50.00% of JavaScript online submissions for Jump Game V. *
 *********************************************************************************************/

var maxJumps = function (arr, d) {
  const cache = new Uint16Array(1001);
  return Math.max(...(arr.map((v, i) => helper(i))));

  function helper(cur) {
    if (cache[cur] === 0) {
      let max = 0;
      for (let i = cur + 1; i <= cur + d && i < arr.length && arr[i] < arr[cur]; ++i) {
        max = Math.max(helper(i), max);
      }
      for (let i = cur - 1; i >= cur - d && i >= 0 && arr[i] < arr[cur]; --i) {
        max = Math.max(helper(i), max);
      }
      cache[cur] = 1 + max;
    }
    return cache[cur];
  }
}

export default maxJumps;