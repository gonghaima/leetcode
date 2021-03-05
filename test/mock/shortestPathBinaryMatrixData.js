export const inputData = {
  case1: [[0, 1], [1, 0]],
  case2: [[0, 0, 0], [1, 1, 0], [1, 1, 0]],
  case3: [[1, 0, 0], [1, 1, 0], [1, 1, 0]],
  case4: [[0, 0, 0], [1, 0, 0], [1, 1, 0]],
  case5: [[0]],
  case6: [
    [0, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 0]]
};

export const expected = {
  case1: 2,
  case2: 4,
  case3: -1,
  case4: 3,
  case5: 1,
  case6: 4
};
