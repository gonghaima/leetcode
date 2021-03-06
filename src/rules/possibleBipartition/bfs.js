
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */

/******************************************************************************************************
 *  Runtime: 220 ms, faster than 20.24% of JavaScript online submissions for Possible Bipartition.    *
 * Memory Usage: 51.3 MB, less than 38.09% of JavaScript online submissions for Possible Bipartition. *
 ******************************************************************************************************/

var possibleBipartition = function (N, dislikes) {
  if (!dislikes.length) return true;
  const colors = new Map();
  const stack = [];
  const graph = {};
  //build graph, each person has a set of disliked people
  for (let [a, b] of dislikes) {
    graph[a] = (graph[a] || new Set()).add(b);
    graph[b] = (graph[b] || new Set()).add(a);
  }

  // check though each person
  for (let i = 1; i <= N; i++) {
    // if this person already colored, skip it.
    if (colors.has(i)) continue;
    // not colored, set this person's color as true
    colors.set(i, true);
    // put to stack, to check further for his/her list
    stack.push(i);

    // if check list greater than 0, it will keep checking
    while (stack.length > 0) {
      let current = stack.pop();
      // if reatch to the end, return true
      if (!graph[current]) return true;
      for (let neighbour of graph[current]) {
        // if same color found, it means not a bipartition
        if (colors.get(neighbour) === colors.get(current)) return false;
        // if hasn't colored, set color to opposite to current
        if (!colors.has(neighbour)) {
          colors.set(neighbour, !colors.get(current));
          // put this un-colored person for next iteration
          stack.push(neighbour);
        }
      }
    }
  }
  return true;

}

export default possibleBipartition;
