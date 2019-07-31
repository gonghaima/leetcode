export const inputData = {
  case1: [1, 2, 3, 4],
  case2: [1, 2, 3, 8, 9, 10]
};

export const expected = {
  case1: 3,
  case2: 2
};

// 1 2 3 4 5      - 5

// 3  -  (5-3+1)
// 4  -  (5-4+1)
// 5  -  (5-5+1)
