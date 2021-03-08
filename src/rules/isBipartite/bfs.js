
/**
 * @param {number[][]} graph
 * @return {boolean}
 */

/*****************************************************************************************************
 * Runtime: 80 ms, faster than 94.68% of JavaScript online submissions for Is Graph Bipartite?.      *
 * Memory Usage: 41.5 MB, less than 46.28% of JavaScript online submissions for Is Graph Bipartite?. *
 *****************************************************************************************************/

var isBipartite = function (graph) {
  const colors = new Map();
  const stack = [];

  for (let i = 0; i < graph.length; i++) {
    if (colors.has(i)) continue;

    colors.set(i, true);
    stack.push(i);

    while (stack.length > 0) {
      let current = stack.pop();

      for (let neighbour of graph[current]) {
        if (colors.get(neighbour) === colors.get(current)) return false;
        if (!colors.has(neighbour)) {
          colors.set(neighbour, !colors.get(current));
          stack.push(neighbour);
        }
      }
    }
  }
  return true
};

export default isBipartite;