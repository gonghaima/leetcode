/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

/*****************************************************************************************************
 * Runtime: 136 ms, faster than 60.82 % of JavaScript online submissions for Network Delay Time.     *
 * Memory Usage: 46.7 MB, less than 61.19 % of JavaScript online submissions for Network Delay Time. *
 *****************************************************************************************************/

//BellmanFord
var networkDelayTime = function (times, n, k) {
  const time = Array(n + 1).fill(Infinity);
  time[k] = 0;
  for (let i = 0; i < n; i++) {
    for (const [u, v, t] of times) {
      if (time[u] === Infinity) continue;
      if (time[v] > time[u] + t) {
        time[v] = time[u] + t;
      }
    }
  }

  let res = 0;
  for (let i = 1; i <= n; i++) {
    res = Math.max(res, time[i]);
  }
  return res === Infinity ? -1 : res;
};

export default networkDelayTime;
