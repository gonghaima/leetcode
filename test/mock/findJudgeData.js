export const inputData = {
  case1: { N: 2, trust: [[1, 2]] },
  case2: { N: 3, trust: [[1, 3], [2, 3]] },
  case3: { N: 3, trust: [[1, 3], [2, 3], [3, 1]] },
  case4: { N: 3, trust: [[1, 2], [2, 3]] },
  case5: { N: 4, trust: [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]] },
  case6: { N: 1, trust: [] },
};

export const expected = {
  case1: 2,
  case2: 3,
  case3: -1,
  case4: -1,
  case5: 3,
  case6: 1,
};
