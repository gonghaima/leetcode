export const inputData = {
  case1: {
    s: 'abcd',
    indices: [0, 2],
    sources: ['a', 'cd'],
    targets: ['eee', 'ffff'],
  },
  case2: {
    s: 'abcd',
    indices: [0, 2],
    sources: ['ab', 'ec'],
    targets: ['eee', 'ffff'],
  },
};

export const expected = {
  case1: 'eeebffff',
  case2: 'eeecd',
};
