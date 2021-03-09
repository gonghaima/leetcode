
/**
 * @param {number[][]} graph
 * @return {boolean}
 */

/*****************************************************************************************************
 *  Runtime: 88 ms, faster than 69.15% of JavaScript online submissions for Is Graph Bipartite?.     *
 * Memory Usage: 41.8 MB, less than 22.07% of JavaScript online submissions for Is Graph Bipartite?. *
 *****************************************************************************************************/


var isBipartite = function (graph) {
  const colors = {}

  for (let i = 0; i < graph.length; i++) {
    if (!colors.hasOwnProperty(i) && !dfs(i, true)) return false
  }
  return true;

  function dfs(idx, color) {
    if (colors.hasOwnProperty(idx)) return color === colors[idx];
    colors[idx] = color;

    for (const i of graph[idx]) {
      if (!dfs(i, !color)) return false;
    }

    return true;
  }
};

export default isBipartite;