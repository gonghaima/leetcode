export const inputData = {
  case1: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 },
  case2: { nums: [1], k: 1 },
  case3: { nums: [1, -1], k: 1 },
  case4: { nums: [9, 11], k: 2 },
  case5: { nums: [4, -2], k: 2 },
};

export const expected = {
  case1: [3, 3, 5, 5, 6, 7],
  case2: [1],
  case3: [1, -1],
  case4: [11],
  case5: [4]
};
