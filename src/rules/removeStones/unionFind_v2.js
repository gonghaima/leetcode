
/******************************************************************************************************************************
 * Runtime: 100 ms, faster than 97.10 % of JavaScript online submissions for Most Stones Removed with Same Row or Column.     *
 * Memory Usage: 43.3 MB, less than 85.51 % of JavaScript online submissions for Most Stones Removed with Same Row or Column. *
 ******************************************************************************************************************************/


export default stones => {
  const parents = {};
  let n = 0;

  const find = (u) => {
    if (parents[u] == null) {
      n++;
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
      n--;
    }
  };

  for (const [u, v] of stones) {
    union(u, ~v);
  }

  return stones.length - n;
};
