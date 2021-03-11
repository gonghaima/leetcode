/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/*************************************************************************************************
 *  Runtime: 108 ms, faster than 68.89% of TypeScript online submissions for Course Schedule.    *
 * Memory Usage: 45.1 MB, less than 53.33% of TypeScript online submissions for Course Schedule. *
 *************************************************************************************************/

// referred from eventualSafeNodes  (find cycle)

//dfs find cycle
function isNodeSafe(graph, node, visited) {
  // if already visited, it is cycle
  if (visited[node] === true) {
    return false;
  }
  // if it is safe, return true
  if (visited[node] === "safe") {
    return true;
  }

  // mark as visited, carry on check its connected nodes
  visited[node] = true;
  if (graph[node]) {
    for (let i = 0; i < graph[node].length; i++) {
      // if one of connected node contains cycle, return false
      if (!isNodeSafe(graph, graph[node][i], visited)) {
        return false;
      }
    }
  }

  // if code goes this far without returning false, mark the node as safe, return true
  visited[node] = "safe";
  return true;
}

var canFinish = function (numCourses, prerequisites) {

  let visited = {};
  //build graph
  const graph = {};
  prerequisites.map(([cur, pre]) => {
    graph[pre] = (graph[pre] || []);
    graph[pre].push(cur);
  });

  let canF = true;
  for (let i = 0; canF && i < prerequisites.length; i++) {
    const [cur, pre] = prerequisites[i];
    // find if each of them safe
    if (!isNodeSafe(graph, pre, visited)) {
      canF = false
    }
  }
  return canF;
};

export default canFinish;
