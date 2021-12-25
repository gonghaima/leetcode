export const inputData = {
  case1: { aliceValues: [1, 3], bobValues: [2, 1] },
  case2: { aliceValues: [1, 2], bobValues: [3, 1] },
  case3: { aliceValues: [2, 4, 3], bobValues: [1, 6, 7] },
};

export const expected = {
  case1: 1,
  case2: 0,
  case3: -1,
};
