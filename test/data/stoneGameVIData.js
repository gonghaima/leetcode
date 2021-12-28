export const inputData = {
  case1: { aliceValues: [1, 3], bobValues: [2, 1] },
  case2: { aliceValues: [1, 2], bobValues: [3, 1] },
  case3: { aliceValues: [2, 4, 3], bobValues: [1, 6, 7] },
  case4: {
    aliceValues: [6, 7, 5, 6, 5, 6, 9, 3, 7, 3, 5, 6, 10, 3, 2, 7, 2, 5, 10, 2],
    bobValues: [8, 2, 9, 10, 3, 2, 1, 1, 10, 6, 9, 1, 1, 4, 10, 3, 7, 9, 6, 2],
  },
};

export const expected = {
  case1: 1,
  case2: 0,
  case3: -1,
  case4: 1,
};
