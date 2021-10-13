export const inputData = {
  case1: { n: 4, connections: [[0, 1], [0, 2], [1, 2]] },
  case2: { n: 6, connections: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]] },
  case3: { n: 6, connections: [[0, 1], [0, 2], [0, 3], [1, 2]] },
  case4: { n: 5, connections: [[0, 1], [0, 2], [3, 4], [2, 3]] }
};

export const expected = {
  case1: 1,
  case2: 2,
  case3: -1,
  case4: 0
};
