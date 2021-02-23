
/**********************************************************************************************************
 * Runtime: 260 ms, faster than 16.67% of JavaScript online submissions for Find Eventual Safe States.    *
 * Memory Usage: 78.1 MB, less than 5.55% of JavaScript online submissions for Find Eventual Safe States. *
 **********************************************************************************************************/

const eventualSafeNodes = (graph) => {
  const N = graph.length;
  let safe = {}; // new boolean[N];

  let parents = {};
  let rgraph = {};
  for (let i = 0; i < N; ++i) {
    parents[i] = new Set();
    rgraph[i] = new Set();
  }

  let queue = [];

  for (let i = 0; i < N; ++i) {
    if (graph[i].length === 0)
      queue.push(i);
    for (let j = 0; j < graph[i].length; j++) {
      parents[i].add(graph[i][j]);
      rgraph[graph[i][j]].add(i);
    }
  }

  while (queue.length > 0) {
    const j = queue.shift();
    safe[j] = true;
    for (const i of rgraph[j]) {
      debugger;
      parents[i].delete(j);
      if (parents[i].size === 0)
        queue.push(i);
    }

  }

  let ans = [];
  for (let i = 0; i < N; ++i) if (safe[i])
    ans.push(i);

  return ans;
}

export default eventualSafeNodes;


/***********************************************************************************************************************************************************************************************************************************************************************************************************************
 * Approach #1: Reverse Edges [Accepted]                                                                                                                                                                                                                                                                               *
 * Intuition                                                                                                                                                                                                                                                                                                           *
 *                                                                                                                                                                                                                                                                                                                     *
 * The crux of the problem is whether you can reach a cycle from the node you start in. If you can, then there is a way to avoid stopping indefinitely; and if you can't, then after some finite number of steps you'll stop.                                                                                          *
 *                                                                                                                                                                                                                                                                                                                     *
 * Thinking about this property more, a node is eventually safe if all it's outgoing edges are to nodes that are eventually safe.                                                                                                                                                                                      *
 *                                                                                                                                                                                                                                                                                                                     *
 * This gives us the following idea: we start with nodes that have no outgoing edges - those are eventually safe. Now, we can update any nodes which only point to eventually safe nodes - those are also eventually safe. Then, we can update again, and so on.                                                       *
 *                                                                                                                                                                                                                                                                                                                     *
 * However, we'll need a good algorithm to make sure our updates are efficient.                                                                                                                                                                                                                                        *
 *                                                                                                                                                                                                                                                                                                                     *
 * Algorithm                                                                                                                                                                                                                                                                                                           *
 *                                                                                                                                                                                                                                                                                                                     *
 * We'll keep track of graph, a way to know for some node i, what the outgoing edges (i, j) are. We'll also keep track of rgraph, a way to know for some node j, what the incoming edges (i, j) are.                                                                                                                   *
 *                                                                                                                                                                                                                                                                                                                     *
 * Now for every node j which was declared eventually safe, we'll process them in a queue. We'll look at all parents i = rgraph[j] and remove the edge (i, j) from the graph (from graph). If this causes the graph to have no outgoing edges graph[i], then we'll declare it eventually safe and add it to our queue. *
 *                                                                                                                                                                                                                                                                                                                     *
 * Also, we'll keep track of everything we ever added to the queue, so we can read off the answer in sorted order later.                                                                                                                                                                                               *
 *                                                                                                                                                                                                                                                                                                                     *
 * Complexity Analysis                                                                                                                                                                                                                                                                                                 *
 *                                                                                                                                                                                                                                                                                                                     *
 * Time Complexity: O(N+E), where N is the number of nodes in the given graph, and E is the total number of edges.                                                                                                                                                                                           *
 *                                                                                                                                                                                                                                                                                                                     *
 * Space Complexity: O(N) in additional space complexity.                                                                                                                                                                                                                                                          *
 ***********************************************************************************************************************************************************************************************************************************************************************************************************************/