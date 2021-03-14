export const inputData = {
  case1: { times: [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n: 4, k: 2 },
  case2: { times: [[1, 2, 1]], n: 2, k: 1 },
  case3: { times: [[1, 2, 1]], n: 2, k: 2 },
  case4: { times: [[1, 2, 1], [2, 1, 3]], n: 2, k: 2 },
  case5: { times: [[1, 2, 1], [2, 3, 2], [1, 3, 4]], n: 3, k: 1 },
  case6: {
    times: [[1, 2, 1], [2, 3, 7], [1, 3, 4], [2, 1, 2]]
    , n: 3, k: 2
  },
};

export const expected = {
  case1: 2,
  case2: 1,
  case3: -1,
  case4: 3,
  case5: 3,
  case6: 6,
};
