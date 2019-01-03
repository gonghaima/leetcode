export const inputData = {
  case1: 'cbbd',
  case2: 'babad',
  case3: 'a',
  case4: 'bb',
  case5: 'eabcb',
  case6: 'aacdefcaa',
  case7: 'aba',
  case8: 'abcda'
  // adcba
};

export const expected = {
  case1: 'bb',
  case2: ['bab', 'aba'],
  case3: 'a',
  case4: 'bb',
  case5: 'bcb',
  case6: 'aa',
  case7: 'aba',
  case8: 'a'
};
