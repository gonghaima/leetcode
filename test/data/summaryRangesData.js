export const inputData = {
  case1: [0, 1, 2, 4, 5, 7],
  case2: [0, 2, 3, 4, 6, 8, 9],
};

export const expected = {
  case1: ['0->2', '4->5', '7'],
  case2: ['0', '2->4', '6', '8->9'],
};
