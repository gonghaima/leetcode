
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */

/******************************************************************************************************
 *  Runtime: 304 ms, faster than 10.71% of JavaScript online submissions for Possible Bipartition.    *
 * Memory Usage: 47.3 MB, less than 90.48% of JavaScript online submissions for Possible Bipartition. *
 ******************************************************************************************************/

var possibleBipartition = function (N, dislikes) {
  if (!dislikes.length) return true;

  const graph = new Array(N + 1).fill(null).map(() => ([]));
  //build graph, each person has a set of disliked people
  for (let [a, b] of dislikes) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const parent = [];

  const find = x => {
    while (x != parent[x])
      x = parent[x];
    return x;
  }
  const union = (x, y) => {
    const parentX = find(x);
    const parentY = find(y);
    parent[parentY] = parentX;
  }

  for (let i = 0; i < N; i++)
    parent[i] = i;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (find(i) == find(graph[i][j]))
        return false;
      union(graph[i][0], graph[i][j]);
    }
  }
  return true;
}

export default possibleBipartition;
