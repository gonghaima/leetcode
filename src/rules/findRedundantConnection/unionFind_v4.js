// https://leetcode.com/problems/redundant-connection/discuss/750477/JavaScript-Clean-Union-Find

// union find

export default edges => {
  class UnionFind {
    constructor(n) {
      this.graph = [...Array(n)].map((_, i) => i);
      this.extra = null;
    }

    find(id) {
      if (this.graph[id] === id) return id;
      this.graph[id] = this.find(this.graph[id]);
      return this.graph[id];
    }

    union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);
      if (rootX !== rootY) this.graph[rootY] = rootX;
      else this.extra = [x, y]
    }
  }

  const unionfind = new UnionFind(edges.length + 1);

  for (let [u, v] of edges) {
    unionfind.union(u, v);
  }
  return unionfind.extra;   
};
