
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */


var possibleBipartition = function (N, dislikes) {
  if (!dislikes.length) return true;
  const colors = new Map();
  const stack = [];

  const graph = new Array(N+1).fill(null).map(() => ([]));
  //build graph, each person has a set of disliked people
  for (let [a, b] of dislikes) {
    graph[a].push(b);
    graph[b].push(a);
  }

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

}

export default possibleBipartition;
