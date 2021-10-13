export const inputData = {
  case1: { startTime: [1, 2, 3, 3], endTime: [3, 4, 5, 6], profit: [50, 10, 40, 70] },
  case2: { startTime: [1, 2, 3, 4, 6], endTime: [3, 5, 10, 6, 9], profit: [20, 20, 100, 70, 60] },
  case3: { startTime: [1, 1, 1], endTime: [2, 3, 4], profit: [5, 6, 4] },
};

export const expected = {
  case1: 120,
  case2: 150,
  case3: 6,
};
