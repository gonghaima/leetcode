/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

//BellmanFord
var networkDelayTime = function (times, n, k) {
  if (!times.length) return 0;

  // vector < int > dist(N + 1, INT_MAX);
  const dist = Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  let res = 0;

  dist[k] = 0;
  for (let i = 0; i < n; i++) {
    times.map(([u, v, w]) => {
      if (dist[u] != Number.MAX_SAFE_INTEGER && dist[u] + w < dist[v])
        dist[v] = w + dist[u];
    })
  }


  debugger;

  for (let i = 1; i <= n; i++)
    res = Math.max(res, dist[i]);

  debugger;
  return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

export default networkDelayTime;
