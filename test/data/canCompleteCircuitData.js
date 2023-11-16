export const inputData = {
  case1: { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] },
  case2: { gas: [2, 3, 4], cost: [3, 4, 3] },
};

export const expected = {
  case1: 3,
  case2: -1,
};
