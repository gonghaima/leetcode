export const inputData = {
  case1: { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2 },
  case2: { nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k: 3 },
  case3: { nums: [0, 0, 1, 1, 1, 0, 0], k: 0 },
  case4: { nums: [0, 0, 0, 0], k: 0 },
  case5: { nums: [0, 0, 0, 1], k: 4 },
  case6: { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1], k: 0 },
};

export const expected = {
  case1: 6,
  case2: 10,
  case3: 3,
  case4: 0,
  case5: 4,
  case6: 4
};
