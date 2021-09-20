export const inputData = {
  case1: [1, 2, 3],
  case2: [0],
};

export const expected = {
  case1: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
  case2: [[], [0]],
};
