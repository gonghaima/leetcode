/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */

// Floyd–Warshall algorithm

var findTheCity = (n, edges, distanceThreshold) => {
  // build distance matrix for the shortest weight, between nodes
  const distance = Array.from({ length: n }, () => new Uint16Array(n).fill(10001));
  for (const edge of edges) {
    distance[edge[0]][edge[1]] = distance[edge[1]][edge[0]] = edge[2];
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      for (let k = 0; k < n; ++k) {
        if (k === j) continue;
        distance[j][k] = Math.min(distance[j][k], distance[j][i] + distance[i][k]);
      }
    }
  }

  // find the minimum city
  let city = 0;
  let minNum = n;
  for (let i = 0; i < n; ++i) {
    let curNum = 0;
    for (let j = 0; j < n; ++j) {
      distance[i][j] <= distanceThreshold && ++curNum;
    }
    if (curNum <= minNum) {
      minNum = curNum;
      city = i;
    }
  }
  return city;
};

export default findTheCity;
