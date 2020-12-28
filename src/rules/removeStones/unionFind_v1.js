/*****************************************************************************************************************************
 * Runtime: 136 ms, faster than 62.65% of JavaScript online submissions for Most Stones Removed with Same Row or Column.     *
 * Memory Usage: 50.6 MB, less than 26.51% of JavaScript online submissions for Most Stones Removed with Same Row or Column. *
 *****************************************************************************************************************************/

// union find - DSU (Disjoint Set Union)
class DSU {
  constructor(n) {
    this.parent = [...Array(n).keys()];
  }
  find(x) {
    // find the root parent
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    // set y as x's parent
    this.parent[this.find(x)] = this.find(this.find(y));
  }
}

export default stones => {
  const N = 10000;
  const dsu = new DSU(2 * N);
  stones.forEach(([row, col]) => {
    dsu.union(row, col + N)
  });

  const set = new Set();
  stones.forEach(stone => {
    set.add(dsu.find(stone[0]))
  });

  return stones.length - set.size;
};
