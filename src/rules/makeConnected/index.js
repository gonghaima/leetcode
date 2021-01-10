/********************************************************************************************************************************
 * Runtime: 168 ms, faster than 60.71% of JavaScript online submissions for Number of Operations to Make Network Connected.     *
 * Memory Usage: 53.4 MB, less than 80.36% of JavaScript online submissions for Number of Operations to Make Network Connected. *
 ********************************************************************************************************************************/

export default (n, connections) => {
  const parents = {};
  let parentsCount = 0;

  let uniqueItems = new Set();

  const find = (u) => {
    if (parents[u] == null) {
      parentsCount++;
      parents[u] = u;
    }
    else if (parents[u] !== u) parents[u] = find(parents[u]); // path compression
    return parents[u];
  };

  const union = (u, v) => {
    const p1 = find(u);
    const p2 = find(v);
    if (p1 !== p2) {
      parents[p1] = p2;
      parentsCount--;
    }
  };

  for (const [u, v] of connections) {
    uniqueItems.add(u);
    uniqueItems.add(v);
    union(u, v);
  }


  const existingRequiredConnenctions = uniqueItems.size - 1;
  const extraConnenctionsAvailable = connections.length - existingRequiredConnenctions;



  const isolatedNodesCount = n - uniqueItems.size;
  const totalParent = isolatedNodesCount + parentsCount;
  const movesRequired = totalParent - 1;

  const result = movesRequired > extraConnenctionsAvailable ? -1 : movesRequired;

  return result;
};
