export const inputData = {
  case1: { n: 4, edges: [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]], distanceThreshold: 4 },
  case2: { n: 5, edges: [[0, 1, 2], [0, 4, 8], [1, 2, 3], [1, 4, 2], [2, 3, 1], [3, 4, 1]], distanceThreshold: 2 }
};

export const expected = {
  case1: 3,
  case2: 0
};
