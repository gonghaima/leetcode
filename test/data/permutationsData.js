export const inputData = {
  case1: [1, 2, 3],
  case2: [0, 1],
  case3: [1],
};

export const expected = {
  case1: [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ],
  case2: [
    [0, 1],
    [1, 0],
  ],
  case3: [[1]],
};
