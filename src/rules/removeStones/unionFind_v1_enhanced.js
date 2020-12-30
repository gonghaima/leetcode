// track parent while union, save one N loop

/*****************************************************************************************************************************
 * Runtime: 116 ms, faster than 74.71% of JavaScript online submissions for Most Stones Removed with Same Row or Column.     *
 * Memory Usage: 50.4 MB, less than 26.44% of JavaScript online submissions for Most Stones Removed with Same Row or Column. *
 *****************************************************************************************************************************/

// union find - DSU (Disjoint Set Union)
class DSU {
  constructor(n) {
    this.parent = [...Array(n).keys()];
    this.parentSet = new Set();
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
    const xFd = this.find(x);
    const yFd = this.find(y);
    this.parent[xFd] = yFd;
    this.parentSet.delete(xFd);
    this.parentSet.add(yFd);
  }
}

export default stones => {
  const N = 10000;
  const dsu = new DSU(2 * N);
  stones.forEach(([row, col]) => {
    dsu.union(row, col + N)
  });

  return stones.length - dsu.parentSet.size;
};
