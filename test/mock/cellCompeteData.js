export const inputData = {
  case1: { state: [1, 0, 0, 0, 0, 1, 0, 0], days: 1 },
  case2: { state: [1, 1, 1, 0, 1, 1, 1, 1], days: 2 }
};

export const expected = {
  case1: [0, 1, 0, 0, 1, 0, 1, 0],
  case2: [0, 0, 0, 0, 0, 1, 1, 0]
};
