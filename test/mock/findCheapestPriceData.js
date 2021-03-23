export const inputData = {
  case1: { n: 3, edges: [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src: 0, dst: 2, K: 1 },
  case2: { n: 3, edges: [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src: 0, dst: 2, K: 0 },
  case3: { n: 5, edges: [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src: 2, dst: 1, K: 1 },
  case4: { n: 4, edges: [[0, 1, 1], [0, 2, 5], [1, 2, 1], [2, 3, 1]], src: 0, dst: 3, K: 1 }
};

export const expected = {
  case1: 200,
  case2: 500,
  case3: -1,
  case4: 6
};
