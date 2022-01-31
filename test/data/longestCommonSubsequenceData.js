export const inputData = {
  case1: { text1: 'abcde', text2: 'ace' },
  case2: { text1: 'abc', text2: 'abc' },
  case3: { text1: 'abc', text2: 'def' },
};

export const expected = {
  case1: 3,
  case2: 3,
  case3: 0,
};
