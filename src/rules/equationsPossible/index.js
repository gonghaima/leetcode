/**********************************************************************************************************************
 * Runtime: 108 ms, faster than 28.57% of JavaScript online submissions for Satisfiability of Equality Equations.     *
 * Memory Usage: 41.6 MB, less than 64.29% of JavaScript online submissions for Satisfiability of Equality Equations. *
 **********************************************************************************************************************/


// thought process

// 1. union find & merge all connected

// 2. loop thought disconnected pair, if both of them having common parent, return false

export default (equations) => {
  let possible = true;
  const parents = {};
  const find = (u) => {
    if (parents[u] == null) {
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
    }
  };

  const connections = [];
  const evaluation = [];

  equations.map(connection => {
    if (connection[1] == "!") evaluation.push([connection[0], connection[3]])
    else connections.push([connection[0], connection[3]])
  });

  // union connected items
  for (const [u, v] of connections) {
    union(u, v);
  }

  const checkDisconnected = (u, v) => {
    const p1 = find(u);
    const p2 = find(v);
    if (p1 === p2) possible = false;
  };

  // union disconnected, if found common parent, return false
  for (const [u, v] of evaluation) {
    if (possible) checkDisconnected(u, v);
  }

  return possible;
};
