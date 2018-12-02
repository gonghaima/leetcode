export const inputData = {
  case1: 'cbbd',
  case2: 'babad',
  case3: 'a',
  case4: 'bb',
  case5: 'eabcb',
  case6: 'aacdefcaa'
};

export const expected = {
  case1: 'bb',
  case2: ['bab', 'aba'],
  case3: 'a',
  case4: 'bb',
  case5: 'bcb',
  case6: 'aa'
};
