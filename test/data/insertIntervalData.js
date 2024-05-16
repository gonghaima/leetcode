export const inputData = {
  case1: {
    intervals: [
      [1, 3],
      [6, 9],
    ],
    newInterval: [2, 5],
  },
  case2: {
    intervals: [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    newInterval: [4, 8],
  },
};

export const expected = {
  case1: [
    [1, 5],
    [6, 9],
  ],
  case2: [
    [1, 2],
    [3, 10],
    [12, 16],
  ],
};
