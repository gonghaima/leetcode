export const inputData = {
  case1: [[1], [2], [3], []],
  case2: [[1, 3], [3, 0, 1], [2], [0]],
  case3: [[], [1, 1], [2, 2]],
  case4: [[2, 3], [], [2], [1, 3, 1]]
};

export const expected = {
  case1: true,
  case2: false,
  case3: false,
  case4: true
};