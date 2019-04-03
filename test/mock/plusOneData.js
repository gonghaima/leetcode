export const inputData = {
  case1: [1, 2, 3],
  case2: [4, 3, 2, 1],
  case3: [9],
  case4: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
  case5: [8, 9, 9, 9]
};

export const expected = {
  case1: [1, 2, 4],
  case2: [4, 3, 2, 2],
  case3: [1, 0],
  case4: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4],
  case5: [9, 0, 0, 0]
};
