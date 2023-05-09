export const inputData = {
  case1: { head: [1, 2, 3, 4, 5], n: 2 },
  case2: { head: [1], n: 1 },
  case3: { head: [1, 2], n: 1 },
};

export const expected = {
  case1: [1, 2, 3, 5],
  case2: [],
  case3: [1],
};
