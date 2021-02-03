/**************************************************************************************************
 * Runtime: 140 ms, faster than 10.35% of JavaScript online submissions for Number of Islands.    *
 * Memory Usage: 52.4 MB, less than 5.30% of JavaScript online submissions for Number of Islands. *
 **************************************************************************************************/

export default (grid) => {
  if (grid.length === 0) return 0;

  let parent = {};

  const DIRS = [[0, -1], [0, 1], [-1, 0], [1, 0]];

  const UnionFind = function (grid) {
    let size = {};

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === '1') {
          let id = `${i}_${j}`;
          parent[id] = id;
          size[id] = 1;
        }
      }
    }

    this.find = (id) => {
      if (parent[id] === id) return id;
      parent[id] = this.find(parent[id]);
      return parent[id];
    }

    this.union = (x, y) => {
      let rootX = this.find(x);
      let rootY = this.find(y);

      if (rootX === rootY) return;
      if (size[rootX] > size[rootY]) {
        size[rootX] += size[rootY];
        parent[rootY] = rootX;
      } else {
        size[rootY] += size[rootX];
        parent[rootX] = rootY;
      }
    }
  }

  const UF = new UnionFind(grid);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        let id = `${i}_${j}`;
        for (let dir of DIRS) {
          let ni = i + dir[0];
          let nj = j + dir[1];
          if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid[i].length) {
            let nId = `${ni}_${nj}`
            if (grid[ni][nj] === '1') UF.union(id, nId);
          }
        }
      }
    }
  }

  let rootSet = new Set();
  for (let child in parent) {
    let root = UF.find(child);
    if (!rootSet.has(root)) rootSet.add(root);
  }
  return rootSet.size;
};
