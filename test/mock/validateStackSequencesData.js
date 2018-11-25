export const inputData = {
  case1: {
    pushed: [1, 2, 3, 4, 5],
    popped: [4, 5, 3, 2, 1]
  },
  case2: {
    pushed: [1, 2, 3, 4, 5],
    popped: [4, 3, 5, 1, 2]
  },
  case3: {
    pushed: [2, 1, 3, 0],
    popped: [1, 0, 3, 2]
  },
  case4: {
    pushed: [8, 9, 2, 3, 7, 0, 5, 4, 6, 1],
    popped: [6, 8, 2, 1, 3, 9, 0, 7, 4, 5]
  }
};

export const expected = {
  case1: true,
  case2: false,
  case3: true,
  case4: false
};
