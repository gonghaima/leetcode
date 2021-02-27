
/***********************************************************************************************************
 * Runtime: 136 ms, faster than 68.52% of JavaScript online submissions for Find Eventual Safe States.     *
 * Memory Usage: 47.2 MB, less than 48.15% of JavaScript online submissions for Find Eventual Safe States. *
 ***********************************************************************************************************/

const eventualSafeNodes = (graph) => {
  const marked = {};
  const onStack = {};


  const isCycle = (v, graph) => {
    marked[v] = true;
    onStack[v] = true;
    for (const w of graph[v]) {
      if (!marked[w]) {
        if (isCycle(w, graph)) {
          return true;
        }
      } else if (onStack[w]) {
        return true;
      }
    }
    onStack[v] = false;
    return false;
  }

  const res = [];

  for (let i = 0; i < graph.length; ++i) {
    if (!isCycle(i, graph)) {
      res.push(i);
    }
  }
  return res;
}

export default eventualSafeNodes;
