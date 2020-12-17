// https://leetcode.com/problems/redundant-connection/discuss/883878/JavaScript-Union-Find

// union find

export default edges => {
  const group = Array(edges.length + 1)
    .fill(null)
    .map((_, i) => i);

  function find(x) {
    while (group[x] !== x) x = group[x];
    return x;
  }

  // union
  for (let [x, y] of edges) {
    const xGroup = find(x),
      yGroup = find(y);
    if (xGroup === yGroup) return [x, y];
    group[yGroup] = xGroup;
  }
};
