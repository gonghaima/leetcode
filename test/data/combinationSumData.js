export const inputData = {
  case1: { candidates: [2, 3, 6, 7], target: 7 },
  case2: { candidates: [2, 3, 5], target: 8 },
  case3: { candidates: [2], target: 1 },
};

export const expected = {
  case1: [[2, 2, 3], [7]],
  case2: [
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ],
  case3: [],
};
