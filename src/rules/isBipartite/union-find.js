
/**
 * @param {number[][]} graph
 * @return {boolean}
 */

/*****************************************************************************************************
 * Runtime: 88 ms, faster than 69.15% of JavaScript online submissions for Is Graph Bipartite?.      *
 * Memory Usage: 41.1 MB, less than 88.30% of JavaScript online submissions for Is Graph Bipartite?. *
 *****************************************************************************************************/

var isBipartite = function (graph) {
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

  const N = graph.length;

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
};

export default isBipartite;