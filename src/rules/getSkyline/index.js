/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

// https://leet-codes.blogspot.com/2022/09/218-skyline-problem.html

class UnionFind {
  constructor(length) {
    this.roots = Array.from(Array(length).keys());
  }
  union(left, right) {
    //no need to use rank, use path compression is enough, because we set parent to the right-most edge
    this.roots[left] = this.find(right); // standard UnionFind lroot=find(left), rroot=find(right) and merge lroot and rroot with ranking considerations to compress path
  }
  find(a) {
    //path compression
    var b = a;
    while (this.roots[b] !== b) {
      b = this.roots[b];
    }
    return (this.roots[a] = b);
  }
}

var getSkyline = function(buildings) {
  let set = new Set(),
    map = new Map();
  buildings.forEach((v) => (set.add(v[0]), set.add(v[1])));
  let points = Array.from(set.values()).sort((a, b) => a - b);
  points.forEach((v, i) => map.set(v, i));
  let res = [],
    heights = Array(points.length).fill(0),
    uf = new UnionFind(points.length);
  for (let [b, e, h] of buildings.sort((a, b) => b[2] - a[2])) {
    let left = uf.find(map.get(b)),
      right = map.get(e);
    for (; left < right; ) {
      if (heights[left] === 0) {
        heights[left] = h;
        uf.union(left, right);
      }
      left = uf.find(++left);
    }
  }
  heights.forEach((h, i) =>
    res[res.length - 1]?.[1] !== h ? res.push([points[i], h]) : null
  );
  return res;
};

export default getSkyline;
