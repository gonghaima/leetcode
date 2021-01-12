/********************************************************************************************************************************
 * Runtime: 168 ms, faster than 60.71% of JavaScript online submissions for Number of Operations to Make Network Connected.     *
 * Memory Usage: 53.4 MB, less than 80.36% of JavaScript online submissions for Number of Operations to Make Network Connected. *
 ********************************************************************************************************************************/

// union find

export default (n, connections) => {
  const parents = {};
  let parentsCount = 0;

  let uniqueItems = new Set();

  const find = (u) => {
    if (parents[u] == null) {
      parentsCount++;
      parents[u] = u;
    }
    // path compression
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
    // nodes - involved for edges
    uniqueItems.add(u);
    uniqueItems.add(v);
    union(u, v);
  }


  // edges required are nodes number minus 1
  const existingRequiredConnenctions = uniqueItems.size - 1;
  // availabe connections to move = number of connection  -  required connection
  const extraConnenctionsAvailable = connections.length - existingRequiredConnenctions;

  // number of nodes are not invovled in edges (isolated) = nodes total number - nodes in edges
  const isolatedNodesCount = n - uniqueItems.size;

  // total parents = isolated nodes + parents in edges
  const totalParent = isolatedNodesCount + parentsCount;
  // connection required for all parents to be connected  = parent count - 1
  const movesRequired = totalParent - 1;

  // if movesRequired greater than availabe connections, return -1
  // otherwise, return moves required
  const result = movesRequired > extraConnenctionsAvailable ? -1 : movesRequired;

  return result;
};
