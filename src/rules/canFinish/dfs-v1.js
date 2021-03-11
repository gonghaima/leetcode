/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/***********************************************************************************************
 * Runtime: 104 ms, faster than 73.33% of TypeScript online submissions for Course Schedule.   *
 * Memory Usage: 45 MB, less than 53.33% of TypeScript online submissions for Course Schedule. *
 ***********************************************************************************************/

// referred from eventualSafeNodes  (find cycle)

// colors: WHITE 0, GRAY 1, BLACK 2;
const dfs = (node, color, graph) => {
  if (color[node] > 0)
    return color[node] == 2;

  color[node] = 1;
  if (graph[node]) {
    for (const nei of graph[node]) {
      if (color[nei] == 1 || !dfs(nei, color, graph))
        return false;
    }
  }

  color[node] = 2;
  return true;
};

var canFinish = function (numCourses, prerequisites) {

  let visited = {};
  //build graph
  const graph = {};
  prerequisites.map(([cur, pre]) => {
    graph[pre] = (graph[pre] || []);
    graph[pre].push(cur);
  });

  let canF = true;
  const color = new Array(numCourses);
  for (let i = 0; canF && i < prerequisites.length; i++) {
    const [cur, pre] = prerequisites[i];
    // find if each of them safe
    if (!dfs(pre, color, graph)) {
      canF = false
    }
  }
  return canF;
};

export default canFinish;

/**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
 * Approach #2: Depth-First Search [Accepted]                                                                                                                                                                                                                                                                                                                             *
 * Intuition                                                                                                                                                                                                                                                                                                                                                              *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * As in Approach #1, the crux of the problem is whether you reach a cycle or not.                                                                                                                                                                                                                                                                                        *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * Let us perform a "brute force": a cycle-finding DFS algorithm on each node individually. 
 * This is a classic "white-gray-black" DFS algorithm that would be part of any textbook on DFS. 
 * We mark a node gray on entry, and black on exit. 
 * If we see a gray node during our DFS, it must be part of a cycle. 
 * In a naive view, we'll clear the colors between each search. *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * Algorithm                                                                                                                                                                                                                                                                                                                                                              *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * We can improve this approach, by noticing that we don't need to clear the colors between each search.                                                                                                                                                                                                                                                                  *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * When we visit a node, the only possibilities are that we've marked the entire subtree black (which must be eventually safe), 
 * or it has a cycle and we have only marked the members of that cycle gray. 
 * So indeed, the invariant that gray nodes are always part of a cycle, 
 * and black nodes are always eventually safe is maintained.                                  *
 *                                                                                                                                                                                                                                                                                                                                                                        *
 * In order to exit our search quickly when we find a cycle (and not paint other nodes erroneously), 
 * we'll say the result of visiting a node is true if it is eventually safe, otherwise false. 
 * This allows information that we've reached a cycle to propagate up the call stack so that we can terminate our search early.                                              *
 **************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/