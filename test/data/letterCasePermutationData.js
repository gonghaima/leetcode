export const inputData = {
  case1: 'a1b2',
  case2: '3z4',
};

export const expected = {
  case1: ['a1b2', 'a1B2', 'A1b2', 'A1B2'],
  case2: ['3z4', '3Z4'],
};
