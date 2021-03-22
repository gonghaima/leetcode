export const inputData = {
  case1: { n: 3, edges: [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src: 0, dst: 2, K: 1 },
  case2: { n: 3, edges: [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src: 0, dst: 2, K: 0 }
};

export const expected = {
  case1: 200,
  case2: 500
};
