
/***********************************************************************************************************
 * Runtime: 128 ms, faster than 87.04% of JavaScript online submissions for Find Eventual Safe States.     *
 * Memory Usage: 46.5 MB, less than 88.89% of JavaScript online submissions for Find Eventual Safe States. *
 ***********************************************************************************************************/

const eventualSafeNodes = (graph) => {

  // colors: WHITE 0, GRAY 1, BLACK 2;
  const dfs = (node, color, graph) => {
    if (color[node] > 0)
      return color[node] == 2;

    color[node] = 1;
    for (const nei of graph[node]) {
      if (color[nei] == 1 || !dfs(nei, color, graph))
        return false;
    }

    color[node] = 2;
    return true;
  }

  const N = graph.length;
  const color = new Array(N);
  const ans = [];

  for (let i = 0; i < N; ++i)
    if (dfs(i, color, graph))
      ans.push(i);
  return ans;
}

export default eventualSafeNodes;


/**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
 * Approach #2: Depth-First Search [Accepted]                                                                                                                                                                                                                                                                                                                             *
 * Intuition                                                                                                                                                                                                                                                                                                                                                              *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * As in Approach #1, the crux of the problem is whether you reach a cycle or not.                                                                                                                                                                                                                                                                                        *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * Let us perform a "brute force": a cycle-finding DFS algorithm on each node individually. This is a classic "white-gray-black" DFS algorithm that would be part of any textbook on DFS. We mark a node gray on entry, and black on exit. If we see a gray node during our DFS, it must be part of a cycle. In a naive view, we'll clear the colors between each search. *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * Algorithm                                                                                                                                                                                                                                                                                                                                                              *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * We can improve this approach, by noticing that we don't need to clear the colors between each search.                                                                                                                                                                                                                                                                  *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * When we visit a node, the only possibilities are that we've marked the entire subtree black (which must be eventually safe), or it has a cycle and we have only marked the members of that cycle gray. So indeed, the invariant that gray nodes are always part of a cycle, and black nodes are always eventually safe is maintained.                                  *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * In order to exit our search quickly when we find a cycle (and not paint other nodes erroneously), we'll say the result of visiting a node is true if it is eventually safe, otherwise false. This allows information that we've reached a cycle to propagate up the call stack so that we can terminate our search early.                                              *
 **************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/