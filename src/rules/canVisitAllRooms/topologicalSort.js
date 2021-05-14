/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/*************************************************************************************************
 *  Runtime: 100 ms, faster than 80.00% of TypeScript online submissions for Course Schedule.    *
 * Memory Usage: 43.7 MB, less than 62.22% of TypeScript online submissions for Course Schedule. *
 *************************************************************************************************/

/*****************************************
 * Topological - sort / Kahn's algorithm *
 *****************************************/

var canFinish = function (numCourses, prerequisites) {
  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);

  prerequisites.map(([e, v]) => {
    // build graph map
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    // build indegree array
    indegree[e]++;
  });

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();
    if (graph.has(v)) {
      for (const e of graph.get(v)) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    order.push(v);
  }

  return numCourses === order.length;
};

export default canFinish;