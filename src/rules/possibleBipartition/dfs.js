
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */

/******************************************************************************************************
 *  Runtime: 184 ms, faster than 44.05% of JavaScript online submissions for Possible Bipartition.    *
 * Memory Usage: 50.3 MB, less than 45.24% of JavaScript online submissions for Possible Bipartition. *
 ******************************************************************************************************/


var possibleBipartition = function (N, dislikes) {
  if (!dislikes.length) return true;

  const colors = Array(N + 1).fill(0);
  const graph = {};
  //build graph, each person has a set of disliked people
  for (let [a, b] of dislikes) {
    graph[a] = (graph[a] || new Set()).add(b);
    graph[b] = (graph[b] || new Set()).add(a);
  }

  for (let i = 1; i <= N; i++) {
    // if not colored & color conflict, return false;
    if (!colors[i] && !dfs(i, 1)) return false;
  }
  // after all checked, and no conflict, return true
  return true;

  function dfs(idx, color) {
    // if already has color at index, return either conflict (false) / or  no conflict (true)
    if (colors[idx]) return color === colors[idx];

    // if not such item in graph, mean it has not impact anything, no conflict
    if (!graph[idx]) return true;

    // set color
    colors[idx] = color;

    // for each disliked person, dfs to check their list
    for (let vertex of graph[idx]) {
      if (!dfs(vertex, -color)) return false;
    }
    return true;
  }
}

export default possibleBipartition;
