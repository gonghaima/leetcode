export const inputData = {
  case1: { n: 5, ranges: [3, 4, 1, 1, 0, 0] },
  case2: { n: 3, ranges: [0, 0, 0, 0] },
  case3: { n: 7, ranges: [1, 2, 1, 0, 2, 1, 0, 1] },
  case4: { n: 8, ranges: [4, 0, 0, 0, 0, 0, 0, 0, 4] },
  case5: { n: 8, ranges: [4, 0, 0, 0, 4, 0, 0, 0, 4] }
};

export const expected = {
  case1: 1,
  case2: -1,
  case3: 3,
  case4: 2,
  case5: 1
};
