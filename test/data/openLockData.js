export const inputData = {
  case1: { deadends: ['0201', '0101', '0102', '1212', '2002'], target: '0202' },
  case2: { deadends: ['8888'], target: '0009' },
  case3: {
    deadends: ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
    target: '8888',
  },
};

export const expected = {
  case1: 6,
  case2: 1,
  case3: -1,
};
